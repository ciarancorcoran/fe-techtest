import { checkNumberIsMultiple } from '../utils/numberButtonsClick'
import './NumberButtonGrid.css';

const handleNumberButtonClick = (e, numbersArray) => {
  if (e.target.tagName !== 'BUTTON') { return }

  const number = Number(e.target.innerHTML)

  // go through the array and highlight each number that is a multiple
  numbersArray.forEach(currNum => {
    if (currNum === 0) {
      return
    }

    const idToHighlight = document.getElementById(currNum)

    if (checkNumberIsMultiple(currNum, number)) {
      idToHighlight.classList.add('highlight')
      return
    }

    idToHighlight.classList.remove('highlight')
  })
}

const NumberButtonGrid = (max) => {
  const buttonGridContainer = document.createElement('main')
  const numbersArray = Array.from({ length: max }, (v, i) => i)
  console.log('here it is: ', numbersArray)
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