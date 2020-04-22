import AbstractComponent from "./abstract-component";

const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class BoardComponent extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate(this._board);
  }
}
