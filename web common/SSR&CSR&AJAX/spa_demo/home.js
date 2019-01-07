(function () { 
    FakeService.getHomeData().then(result => {
        let html = "";
        html += "<h1>" + result.pageName + "</h1>";
        html += "<h3>" + result.content.spa + "</h3>";
        html += "<p style='margin-top:20px;'>There's <i><b>only one index.html</b></i> in the appliction, and every page is rendered by JS. </br>";
        html += "When you routing in the different pages, the JS dynamically generates html and relace into the DOM.</p>";

        html += "<h5>Render Type</h5>";
        html += "<ul>"
        for (let index = 0; index < result.content.renderTyps.length; index++) {
            html += "<li>" + result.content.renderTyps[index] + "</li>";
        }
        html += "</ul>";

        html += "<p style='margin-top:40px;'>And when you routing, <i><b>you are not</b></i> routed to another document actually. " +
         "Nothing happens except for the url in your browser. The tech is show in blow:</p>";

        html += "<h5>Route</h5>";
        html += "<ul>"
        for (let index = 0; index < result.content.routes.length; index++) {
            html += "<li><a href='" + result.content.routes[index].url + "'>" + result.content.routes[index].title + "</a></li>";
        }
        html += "</ul>";

        document.getElementById("entry").innerHTML = html;
    });
}());