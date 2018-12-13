(function(){
    FakeService.getPage1Data().then(result => {
        var rendered = Mustache.render(template, result);

        document.getElementById("entry").innerHTML = rendered;
    });

    let template = `
        <h1>{{ pageName }}</h1>
        <h5>Problem</h5>
        <p>{{ content.problem }}</p>

        <h5>Solutions</h5>
        <ul>
            {{#content.solutions}}
                <li>{{.}}</li>
            {{/content.solutions}}
        </ul>
    `;
}());