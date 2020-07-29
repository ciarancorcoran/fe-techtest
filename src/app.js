import { NumberButtonGridList } from './components/NumberButtonGridList'

const app = function(max) {
  const body = document.querySelector('body')
  body.append(NumberButtonGridList(max))
};

export default app;
