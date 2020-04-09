import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filters.js";
import {createLoadMoreTemplate} from "./components/load-more.js";
import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {generateFilters} from "./components//mock/filter.js";
import {generateTasks} from "./components/mock/task.js";

const TaskCount = {
  TOTAL: 25,
  SHOWING_BY_BUTTON: 8,
  SHOWING_ON_START: 8,
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const filters = generateFilters();
const tasks = generateTasks(TaskCount.TOTAL);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(taskListElement, createEditTemplate(tasks[0]));

let showingTasksCount = TaskCount.SHOWING_ON_START;

const renderTasks = () => {
  tasks.slice(1, showingTasksCount)
    .forEach((task) => render(taskListElement, createTaskTemplate(task)));
};


renderTasks();

render(boardElement, createLoadMoreTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + TaskCount.SHOWING_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createTaskTemplate(task)));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
