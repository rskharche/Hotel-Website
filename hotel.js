window.addEventListener('load', updateHeaderNavHeight);
window.addEventListener('resize', updateHeaderNavHeight);

var headerNavElement = document.querySelector('body > header > nav');
var headerNavStyleElement = document.createElement('style');
document.head.appendChild(headerNavStyleElement);

function updateHeaderNavHeight()
{
	var h = headerNavElement.offsetHeight;
	
	headerNavStyleElement.innerText = 'header::before { height:' + h + 'px }'
		+ 'header { margin-bottom:' + (-h) + 'px }'
		+ '#main-content { padding-top:' + h + 'px }';
}
