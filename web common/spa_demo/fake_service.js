let FakeService = (function(){

    let promise = function(data){
        return new Promise(function (resolve, reject) {
            NProgress.start();
            setTimeout(function () {
                resolve(data);
                NProgress.done();
            }, 500);
        });
    }

    let getHomeData = function (){
        return promise({
            pageName: 'home',
            content:{
                spa: 'SPA is the short name of Single Page Application.',
                routes: [{ title: 'HTML5 history api.', url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API' }, { title: 'url hash.', url:'https://developer.mozilla.org/en-US/docs/Web/Events/hashchange'}],
                renderTyps: ['SSR(Server Side Rendering).', 'CSR(Client Side Rendering).']
            }
        });
    };

    let getPage1Data = function () {
        return promise({
            pageName: 'page1',
            content:{
                problem: 'Generate html with js is to hard.',
                solutions: ['template engines.', 'SSR(Server Side Rendering)']
            },
            ssrContent: '<div>Here is datas from SSR.</div>' 
        });
    };

    let getPage2Data = function () {
        return promise({
            pageName: 'page2',
            content:{
                title: 'MVC/MVP/MVVM在前端的应用',
                todos:[
                    { id: 1, content:'SPA的方式相当于把大量后端逻辑移到了前端', done: true },
                    { id: 2, content: '当前端逻辑变得复杂，便有人想到了已在其他领域应用多年的MVC', done: true },
                    { id: 3, content: 'MVC的主要目的是分离视图与业务逻辑，使得代码结构清晰易维护', done: false }
                ]
            }
        });
    };

    let updatePage2Data = function(data){
        // TODO update
    };

    return { getHomeData, getPage1Data, getPage2Data, updatePage2Data };
}());