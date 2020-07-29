import './NumberButtonGrid.css';

const NumberButtonGrid = (max, handleNumberButtonClick) => {
  const buttonGridContainer = document.createElement('main')
  const numbersArray = Array.from({ length: max }, (v, i) => i)
  buttonGridContainer.addEventListener('click', event => handleNumberButtonClick(event, numbersArray))

  for (let i = 1; i <= max; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.id = i
    buttonGridContainer.append(button)
  }

  return buttonGridContainer
}

export default NumberButtonGrid