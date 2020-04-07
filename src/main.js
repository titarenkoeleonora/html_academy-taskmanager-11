import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filters.js";
import {createLoadMoreTemplate} from "./components/load-more.js";
import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {generateFilters} from "./components//mock/filter.js";

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const filters = generateFilters();

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, createEditTemplate());

const renderTasks = (container, template) => {
  for (let i = 0; i < TASK_COUNT; i++) {
    render(container, template);
  }
};

renderTasks(taskListElement, createTaskTemplate());

render(boardElement, createLoadMoreTemplate());
