import './NumberButtonGrid.css';

const NumberButtonGrid = (max, handleNumberButtonClick) => {
  const buttonGridContainer = document.createElement('main')
  const numbersArray = Array.from({ length: max + 1 }, (v, i) => i)
  buttonGridContainer.addEventListener('click', event => handleNumberButtonClick(event, numbersArray))

  numbersArray.forEach(i => {
    if (i === 0) return

    const button = document.createElement('button')
    button.textContent = i
    button.id = i
    buttonGridContainer.append(button)
  })

  return buttonGridContainer
}

export default NumberButtonGrid