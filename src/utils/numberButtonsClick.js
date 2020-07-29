export const handleNumberButtonClick = (e, max) => {
  if (e.target.tagName !== 'BUTTON') { return }

  const number = Number(e.target.innerHTML)
  for (let i = 1; i <= max; i++) {
    const idToHighlight = document.getElementById(i)
    if (!idToHighlight.classList.contains('highlight') && i % number === 0) {
      idToHighlight.classList.add('highlight')
    } else if (idToHighlight.classList.contains('highlight') && i % number !== 0) {
      idToHighlight.classList.remove('highlight')
    }
  }
}