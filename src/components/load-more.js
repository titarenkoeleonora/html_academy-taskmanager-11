import AbstractComponent from "./abstract-component";

const createLoadMoreTemplate = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMore extends AbstractComponent {
  getTemplate() {
    return createLoadMoreTemplate();
  }
}
