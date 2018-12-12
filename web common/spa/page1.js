(function(){
    console.log('page1.js');

    document.getElementById("entry").innerHTML = "loading...";

    ajaxGet('page1').then(result => {
        document.getElementById("entry").innerHTML = result;
    });
}());