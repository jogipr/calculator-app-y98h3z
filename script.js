const numbersContainer = document.querySelector('.numbers-container');
const appResult = document.querySelector('.app-result');

const operationsContainer = document.querySelector('.operations-container');
const equalsContainer = document.querySelector('.equals-container');

let operands = [];
let operand = '';
let position = 0;

function addOperand(event) {
  if (event.target.id) {
    operand += event.target.id;
  }
  operands[position] = operand;
  appResult.innerHTML = ` ${operands.join(' ')} `;
}

numbersContainer.addEventListener('click', addOperand);

function addOperation(event) {
  if (event.target.id) {
    operand = '';
    operands.push(event.target.id);
    position += 2;
  }
  console.log(operands);
  appResult.innerHTML = ` ${operands.join(' ')} `;
}

operationsContainer.addEventListener('click', addOperation);

function equalsOperation(event) {
  if (event.target.id == '=') {
    let result = eval(operands.join(' '));
    appResult.innerHTML = `<span> ${result}<span/>`;
  }
}

equalsContainer.addEventListener('click', equalsOperation);
