import { injectable } from "inversify";
import { ITodo } from "../interface";
import "reflect-metadata";

const axios = require("axios");

@injectable()
export class TodoClient implements ITodo {
  fetchData = async () : Promise<any> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response;
  }
}