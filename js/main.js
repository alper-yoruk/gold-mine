class Step {
  constructor(initialAmount, totalAmount, animationDuration, title, btnName) {
    this.initialAmount = initialAmount;
    this.totalAmount = totalAmount;
    this.animationDuration = animationDuration;
    this.title = title;
    this.btnName = btnName;
    this.active = false;
  }

  updateActiveStatus() {
    this.active = true;
  }
}

const step1 = new Step(0, 100, 4, "To the mine!", "Start");
const step2 = new Step(0, 100, 2, "Extracted: ", "Mine");
const step3 = new Step(0, 100, 4, "Capacity: ", "Carry");
const step4 = new Step(0, 100, 2, "Processed: ", "Process");
const step5 = new Step(0, 100, 1, "Produced: ", "Refine");

const steps = [step1, step2, step3, step4, step5];
