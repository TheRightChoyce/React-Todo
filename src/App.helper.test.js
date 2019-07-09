const {createNewToDo} = require('./App.helper');

test('It returns a valid to do object', () => {
    const newTodo = createNewToDo("new item");
    expect(newTodo.task).toBe("new item");
});