import {createElement} from "../utils";

const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board {
  constructor(board) {
    this._board = board;
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate(this._board);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
