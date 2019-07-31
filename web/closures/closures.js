window.Utils = (function(){
    let callbacks = [];

    function executeCallbacks() {
        var i;
        while ((i = callbacks.shift())){
            i();
        }
    } 

    function addCallback(){
        callbacks.push(function () { console.log(Math.random()) });
    }

    return {
        addFn: addCallback,
        runFns: executeCallbacks
    };
})();