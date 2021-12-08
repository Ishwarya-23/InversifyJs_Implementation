import { Container } from "inversify";
import { ApiManager } from "./utils/apiManager";
import { ITodo } from "./interface";
import { TodoClient } from "./utils/todoClient";

let container = new Container();

container.bind<ITodo>("Todo").to(TodoClient);
container.bind<ApiManager>("ApiManager").to(ApiManager);

export { container };