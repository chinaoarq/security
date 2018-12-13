var Page2 = (function () {

    //Model
    let page2Data = null;

    //Controller 
    let init = function(){
        if (page2Data) {
            render();
        }else{
            FakeService.getPage2Data().then(result => {
                page2Data = result;
        
                render();
            });
        }
    };

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

    // VIEW
    let template = `
        <h1>{{ pageName }}</h1>

        <h5>{{ content.title }}</h5>

        <b>TODO LIST </b>
        <ul class="todo-list">
        {{#content.todos}}
            <li class="todo-item" onclick="Page2.update({{id}});">
                {{#done}}
                <span class="done">√</span>
                {{/done}}
                <span>{{content}}</span>
            </li>
        {{/content.todos}}
        </ul>
    `;

    return { init, update};
}());

Page2.init();