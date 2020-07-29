import { checkNumberIsMultiple } from './utils/checkNumberIsMultiple'
import NumberButtonGrid from './components/NumberButtonGrid'

const handleNumberButtonClick = (e, numbersArray) => {
  if (e.target.tagName !== 'BUTTON') return

  const number = Number(e.target.innerHTML)

  // loop through the array and highlight each number that is a multiple
  numbersArray.forEach(currNum => {
    if (currNum === 0) return

    const idToHighlight = document.getElementById(currNum)

    if (checkNumberIsMultiple(currNum, number)) {
      idToHighlight.classList.add('highlight')
      return
    }

    if (idToHighlight.classList.contains('highlight')) idToHighlight.classList.remove('highlight')
  })
}

const app = function(max) {
  const body = document.querySelector('body')
  body.append(NumberButtonGrid(max, handleNumberButtonClick))
};

export default app;
