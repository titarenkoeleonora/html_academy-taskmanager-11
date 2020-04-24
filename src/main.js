import BoardComponent from "./components/board.js";
import FilterComponent from "./components/filters.js";
import SiteMenuComponent from "./components/site-menu.js";
import {generateFilters} from "./components//mock/filter.js";
import {generateTasks} from "./components/mock/task.js";
import {render} from "./utils/render.js";
import {TaskCount} from "./constants.js";
import BoardController from "./controllers/board.js";


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TaskCount.TOTAL);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent());
render(siteMainElement, new FilterComponent(filters));

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent);

const boardController = new BoardController(boardComponent);
boardController.render(tasks);
