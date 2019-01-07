var Todo = (function () {

    //Model
    let page2Data = null;

    //Controller 
    let init = function(){
        FakeService.getPage2Data().then(result => {
            page2Data = result;
    
            render();
        });
    };

    let add = function(content){
        let newTodo = {};
        newTodo.id = genNewId();
        newTodo.content = content;
        newTodo.done = false;
        page2Data.content.todos.unshift(newTodo);

        render();
    }

    let update = function(id){
        for (let index = 0; index < page2Data.content.todos.length; index++) {
            let todoItem = page2Data.content.todos[index];

            if (todoItem.id == id) {
                todoItem.done = !todoItem.done;
            }
        }

        FakeService.updatePage2Data(page2Data);
        render();
    };

    function render() {
        var rendered = Mustache.render(template, page2Data);
        document.getElementById("entry").innerHTML = rendered;
    }

    function genNewId(){
        let newId = 1;

        for (let index = 0; index < page2Data.content.todos.length; index++) {
            let todoItem = page2Data.content.todos[index];

            if (todoItem.id >= newId) {
                newId = todoItem.id + 1;
            }
        }

        return newId;
    }

    // VIEW
    let template = `
        <h1>{{ pageName }}</h1>

        <h5>{{ content.title }}</h5>

        <b>TODO LIST </b>
        <div>
            <input type="text" class="todo" placeholder="Enter new todo here.." onkeyup="if (event.keyCode == 13){Todo.add(this.value);}" autofocus/>
        </div>
        <ul class="todo-list">
        {{#content.todos}}
            <li class="todo-item" onclick="Todo.update({{id}});">
                {{#done}}
                <span class="done">√</span>
                {{/done}}
                <span>{{content}}</span>
            </li>
        {{/content.todos}}
        </ul>
    `;

    return { init, add, update};
}());

Todo.init();