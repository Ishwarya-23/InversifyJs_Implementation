import { TodoClient } from "../todoClient";

const axios = require('axios');

jest.mock('axios');

it('returns a list of todos', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              }
        ]
    });

    const todoClient = new TodoClient();
    const todos = await todoClient.fetchData();
    expect(todos).toMatchObject({
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              }
        ]
    });
});
