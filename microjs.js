function $ (selector, el) {
     if (!el) {el = document;}
     return el.querySelector(selector);
}
function $$ (selector, el) {
     if (!el) {el = document;}
     return Array.prototype.slice.call(el.querySelectorAll(selector));
}
function(){
	function Send(url, method, data, sync) {
		return new Promise(function(resolve, reject){
			var request = new XMLHttpRequest();
			request.open(method, url, !sync);
			request.onreadystatechange = function () {
				console.log(request);
				if (request.readyState === 4 && request.status === 200) {
					resolve(request.responseText);
				}
				else{
					reject(request.responseText);
				}
			};
			if (method == 'POST') {
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
			}
			request.send(JSON.stringify(data));
		}
    }
    function BuildUrl(base, params) {
		if (params==null||params=={}||params==[])
			return base;
        var query = [];
        for (var key in params) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
        return base + '?' + query.join('&');
    }
    $.Post = function (url, params, data, sync) {
		return this.Send(BuildUrl(url, params), 'POST', data, sync);
    }
    $.Get = function (url, params, sync) {
        return this.Send(BuildUrl(url, params), 'GET', null, sync);
    }
}