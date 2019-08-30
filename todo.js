var todosList = {
    todos: [],
    displayTodos: function() {
    console.log ('My todos:', this.todos);
},
    addTodo: function(todo) {
    this.todos.push({
        todeText: todoText,
        completed:false
    });
    this.displayTodos();
},
    changeTodo: function(position, newValue) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
},
    deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todo[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};
