let Router = (function () {
    
    
    let go = function (pageName) {
        let useRoute = document.getElementById('router').checked;

        if (useRoute && (!history.state || history.state.pageName != pageName)) {
            window.history.pushState({pageName}, pageName, '?p=' + pageName);
        }

        loadCSS(pageName);
        loadJS(pageName);
    };

    
    let loadCSS = function (pageName) {
        let fileName = getConfig(pageName).css;
        if (!fileName) {
            return ;
        }

        let link = document.createElement('link');
        link.id = fileName;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = fileName;
        link.media = 'all';

        document.head.appendChild(link);
    };

    let loadJS = function (pageName) {
        let fileName = getConfig(pageName).js;
        if (!fileName) {
            return;
        }

        let script = document.createElement('script');
        script.src = fileName;

        document.getElementById('script').innerHTML = '';
        document.getElementById('script').appendChild(script);
    };

    const config = [
        {
            pageName: 'home',
            js: './home.js',
            css: null
        }, {
            pageName: 'page1',
            js: './page1.js',
            css: null
        }, {
            pageName: 'page2',
            js: './page2.js',
            css: './page2.css'
        }
    ];

    function getConfig(pageName){
        for (let index = 0; index < config.length; index++) {
            const pageConfig = config[index];
            if (pageConfig.pageName == pageName) {
                return pageConfig;
            }
        }
        
        return null;
    }

    return { go };
}());

window.onpopstate = function () {
    Router.go(history.state.pageName);
};