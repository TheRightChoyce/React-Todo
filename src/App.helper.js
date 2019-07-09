const createNewToDo = function(taskName) {
    return {
        task: taskName,
        completed: false, 
        id: Date.now()
    };
};


const toggleTodoComplete = function() {

}

module.exports = {createNewToDo, toggleTodoComplete};
