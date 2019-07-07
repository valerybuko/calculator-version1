class Calculator {
    constructor(id) {
      this.firstNumber = "";
      this.secondNumber = "";
      this.result = "";
      this.operation = "";
      this.buttons = null;
      this.inputEl = null;
      this.operatorsEl = null;
      this.equalsEl = null;
      this.deleteEL = null;
      this.plusMinusEL = null;
      this.el = document.querySelector("#" + id);
    }
  }
  