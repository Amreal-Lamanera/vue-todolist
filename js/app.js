const todos = [
    {
        text: 'Fare i compiti',
        done: true
    },
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Fare la doccia',
        done: false
    },
    {
        text: 'Preparare la cena',
        done: false
    },
]

const app = new Vue({
    el: '#app',
    data: {
        todos,
        newTodo: ''
    },
    computed: {
        todoChecked() {
            const checked = new Array;
            this.todos.forEach(element => {
                if (element.done) checked.push(element.text)
            });
            return checked;
        }
    },
    methods: {
        toggleDoneOf(todo) {
            todo.done = !todo.done;
        },
        addTodo() {
            this.newTodo = this.newTodo.trim();
            if (!this.newTodo) return
            this.todos.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },
        addTodoEnter(event) {
            if (event.key === 'Enter') this.addTodo()
        }
    },
})