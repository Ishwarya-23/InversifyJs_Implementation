import { TodoClient } from "../todoClient";
import { ApiManager } from "../apiManager";

test('Validates if TodoClient class is injected in ApiManager class', () => {
    const todoClient = new TodoClient();
    const spy = jest.spyOn(todoClient, 'fetchData').mockImplementation(() => new Promise((resolve, reject) => {
        resolve('Success!');
    }));

    const apiManager = new ApiManager(todoClient);
    apiManager.fetchData();

    expect(todoClient.fetchData).toHaveBeenCalled();
    spy.mockRestore();
});