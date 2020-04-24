import AbstractComponent from "./abstract-component";

const createLoadMoreTemplate = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMoreButtonComponent extends AbstractComponent {
  getTemplate() {
    return createLoadMoreTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
