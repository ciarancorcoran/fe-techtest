import NumberButtonGrid from './components/NumberButtonGrid'

const app = function(max) {
  const body = document.querySelector('body')
  body.append(NumberButtonGrid(max))
};

export default app;
