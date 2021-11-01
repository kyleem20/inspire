// import { DisplaysController } from "./Controllers/DisplaysController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { TodosController } from "./Controllers/TodosController.js";

class App {
  // displaysController = new DisplaysController();

  imagesController = new ImagesController()

  quotesController = new QuotesController()
  weathersController = new WeathersController()
  todosController = new TodosController()


}

window["app"] = new App();
