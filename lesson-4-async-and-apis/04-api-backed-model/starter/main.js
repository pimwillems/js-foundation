import { BookController } from "./controller.js";

const controller = new BookController("/shared/books.json");
controller.start();
