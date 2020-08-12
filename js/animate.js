const mineBtns = document.querySelectorAll(".btn-mine-step");
const mineStepCapacity = document.querySelectorAll(".animated");
const goldCart = document.getElementsByClassName("cart-container")[0];

animateGoldCart = () => {
  goldCart.style.display = "block";
  setTimeout(function () {
    goldCart.classList.add("cart-container-move");
  }, steps[steps.length - 1].animationDuration * 1000);
};

incrementAmount = (index) => {
  let currentValue = steps[index].initialAmount;
  let maxValue = steps[index].totalAmount;

  checkAndIncrement = () => {
    mineStepCapacity[index].innerHTML =
      steps[index].title + " " + currentValue + " / " + maxValue;
    if (currentValue++ < maxValue) {
      setTimeout(checkAndIncrement, steps[index].animationDuration * 10);
    }
  };
  checkAndIncrement();
};

updateStepStatus = (index) => {
  setTimeout(function () {
    steps[index].updateActiveStatus();
  }, steps[index].animationDuration * 1000);
};

animateStepCapacity = (index) => {
  mineBtns[index].classList.add("btn-mine-step-active");
  mineStepCapacity[index].classList.add("animate-step-capacity");
  mineStepCapacity[index].style.transitionDuration =
    steps[index].animationDuration + "s";
  incrementAmount(index);
};

setButtonText = (index) => {
  mineBtns[index].innerText = steps[index].btnName;
};

setStepCapacityHTML = (item, index) => {
  if (index === 0) {
    item.innerHTML = steps[index].title;
  } else {
    item.innerHTML =
      steps[index].title +
      steps[index].initialAmount +
      " / " +
      steps[index].totalAmount;
  }
};

addListenerToButtons = (item, index) => {
  mineBtns[index].addEventListener("click", () => {
    if (index === 0) {
      updateStepStatus(index);
      animateStepCapacity(index);
    } else if (index === steps.length - 1) {
      updateStepStatus(index);
      animateStepCapacity(index);
      animateGoldCart();
    } else if (steps[index - 1].active === true) {
      updateStepStatus(index);
      animateStepCapacity(index);
    }
  });
};

mineStepCapacity.forEach((item, index) => {
  setStepCapacityHTML(item, index);
  setButtonText(index);
  addListenerToButtons(item, index);
});
