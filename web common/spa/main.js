(function(){
    console.log('main.js');

    document.getElementById("entry").innerHTML = "loading...";

    ajaxGet('home').then(result => {
        document.getElementById("entry").innerHTML = result;
    });
}());


function ajaxGet(url){
    let html = "<h2>Welcome to " + url + "</h2><p>Here is " + url + ".</p>" ;

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(html);
        }, 500);
    });
}

function go(page){
    var script = document.createElement('script');
    script.src = './' + page + '.js';

    document.getElementById('script').innerHTML = '';
    document.getElementById('script').appendChild(script); 
}