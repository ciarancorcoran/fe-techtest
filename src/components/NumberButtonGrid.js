import { checkNumberIsMultiple } from '../utils/numberButtonsClick'
import './NumberButtonGrid.css';

export const handleNumberButtonClick = (e, max) => {
  if (e.target.tagName !== 'BUTTON') { return }

  const number = Number(e.target.innerHTML)
  for (let i = 1; i <= max; i++) {
    const idToHighlight = document.getElementById(i)
    if (!idToHighlight.classList.contains('highlight') && checkNumberIsMultiple(i, number)) {
      idToHighlight.classList.add('highlight')
    } else if (idToHighlight.classList.contains('highlight') && !checkNumberIsMultiple(i, number)) {
      idToHighlight.classList.remove('highlight')
    }
  }
}

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