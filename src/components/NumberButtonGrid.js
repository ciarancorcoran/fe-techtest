import { handleNumberButtonClick } from '../utils/numberButtonsClick'
import './NumberButtonGrid.css';

const NumberButtonGrid = (max) => {
  const buttonGridContainer = document.createElement('main')
  buttonGridContainer.addEventListener('click', event => handleNumberButtonClick(event, max))

  for (let i = 1; i <= max; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.id = i
    buttonGridContainer.append(button)
  }

  return buttonGridContainer
}

export default NumberButtonGrid