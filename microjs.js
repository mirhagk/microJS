function $ (selector, el) {
    if (!el) {el = document;}
    return el.querySelector(selector);
}
function $$ (selector, el) {
    if (!el) {el = document;}
    return Array.prototype.slice.call(el.querySelectorAll(selector));
}
Element.prototype.toggleClass = function (className) {
    if (this.className.indexOf(className) > -1) {
        this.className = this.className.replace(className, '');
    }
    else {
        this.className += ' ' + className;
    }
};
(function(){
    function send(url, method, data) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open(method, url, true);
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200)
                        resolve(request.responseText);
                    else
                        reject(request.responseText);
                }
            };
            if (method == 'POST') {
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            }
            request.send(JSON.stringify(data));
        });
    }
    function buildUrl(base, params) {
        if ($.isEmpty(params))
            return base;
        var query = [];
        for (var key in params) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
        return base + '?' + query.join('&');
    }
    $.isEmpty = function (value) {
        return value == null
        || (value.length && value.length == 0)
        || (Object.keys(value).length === 0);
    }
    $.post = function (url, params, data) {
        return send(buildUrl(url, params), 'POST', data);
    }
    $.get = function (url, params) {
        return send(buildUrl(url, params), 'GET', null);
    }
})();