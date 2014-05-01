var url = encodeURIComponent(location.href);

 if(url.match(/\.[a-zA-Z0-9-%]+$/)){
 	location.href = location.protocol + url.replace(/(\.[a-zA-Z0-9-%]+)$/, '$1.ezproxy.cul.columbia.edu/');
 }

if(url.match(/\.[a-zA-Z0-9\-%]+\//)){
	location.href = location.protocol + url.replace(/(\.[a-zA-Z0-9-%]+)(\/)/, '$1.ezproxy.cul.columbia.edu$2');
}
