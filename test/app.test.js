import app from '../src/app'

describe('app', function() {
  beforeEach(() => {
    app(144)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it ('returns html with a main element containing buttons up to a certain number', function() {
    const mainElement = document.querySelector('main')
    expect(mainElement.childElementCount).toBe(144);
  })

  it ('clicks on a button and adds a highlight class to multiples', function() {
    const mainElement = document.querySelector('main');
    const allButtonElements = mainElement.childNodes;
    allButtonElements[1].click()
    expect((allButtonElements[1] && allButtonElements[5]).classList.contains('highlight')).toBe(true);
  })

  it ('clicks two different buttons and removes classes on second button click', function() {
    const mainElement = document.querySelector('main');
    const allButtonElements = mainElement.childNodes;
    allButtonElements[1].click()
    expect((allButtonElements[1] && allButtonElements[5]).classList.contains('highlight')).toBe(true);
    allButtonElements[2].click()
    expect((allButtonElements[1] && allButtonElements[4]).classList.contains('highlight')).toBe(false);
  })
});