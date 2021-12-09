import { inject, injectable } from "inversify";
import { ITodo } from "../interface";
import "reflect-metadata";

@injectable()
export class ApiManager {
    private todoClient: ITodo;

    // Injecting todoClient dependency instead of creating it
    constructor(@inject("Todo") todoClient:ITodo) {
        this.todoClient = todoClient;
    }

    /**
     * Calls the fetchData function from the injected class
     * @returns a promise
     */
    fetchData = async () : Promise<any> => {
        return await this.todoClient.fetchData();
    }
}