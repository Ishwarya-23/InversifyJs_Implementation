import { inject, injectable } from "inversify";
import { ITodo } from "../interface";
import "reflect-metadata";

@injectable()
export class ApiManager {
    private todoClient: ITodo;
    constructor(@inject("Todo") todoClient:ITodo) {
        this.todoClient = todoClient;
    }

    fetchData = async () : Promise<any> => {
        return await this.todoClient.fetchData();
    }
}