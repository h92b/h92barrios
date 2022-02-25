window.onload = () => {
    /* console.log(randomInt(1, 999999999999)); */
    fetchData('home');
    let tm=document.querySelectorAll('.txtMenu'),a,o;
	for(let i=0;i<tm.length;i++)
		a=null!=tm[i].nextElementSibling&&tm[i].nextElementSibling.textContent=='', a ? function(){
			for(let i=0;i<tm.length;i++)tm[i].style.display='none';
		}() : 0 ;;
};
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createElement(tag, className, text){
    let element = document.createElement(tag);
    element.className = className;
    element.innerText = text;
    return element;
}
function toggleElement(element){
    element.classList.toggle('hidden');
}
function hps(a,b){
	history.pushState({page: a}, '', b);
}
function fetchData(a){
    if (validFetch){
        fetch(http+'\/\/'+host+'/portfolio/api/index.html')
        .then(response => response.text())
        .then(data => {
			/*  */
            document.querySelector('.contenido').innerHTML=data;
			switch(a){
				case 'home': hps(a,'?home'); document.title='Inicio - h92barrios';  document.querySelector('.title-context').textContent='Inicio';
					break;
				case 'about': hps(a,'?about'); document.title='Sobre Mi - h92barrios'; document.querySelector('.title-context').textContent='Sobre Mi';
					break;
				case 'tools': hps(a,'?tools'); document.title='herramientas - h92barrios';  document.querySelector('.title-context').textContent='Herramientas';
					break;
				case 'hobbits': hps(a,'?hobbits'); document.title='Pasatiempos - h92barrios'; document.querySelector('.title-context').textContent='Pasatiempos';
					break;
				case 'acercade': hps(a,'?acercade'); document.title='Acerca De - h92barrios'; document.querySelector('.title-context').textContent='Acerca De';
					break;
			}
        })
        .catch(error => console.error(error));
    }
}
window.onpopstate = function(e){
	/*  */
}
window.onclick = function(e){
    e.preventDefault();
    let a,b,c=false,url=http+'\/\/'+host+'\/portfolio';
	b=function(){
        let a = 'undefined' != typeof e.target.href;
        a ? b = e.target.href : 'undefined' != e.target.parentElement.href ? b = e.target.parentElement.href : 0 ;
        return b;
    }();
    switch(b){
        case url+'?home' : fetchData('home');
            break;
        case url+'?about' : fetchData('about');
            break;
        case url+'?tools' : fetchData('tools');
            break;
        case url+'?hobbits' : fetchData('hobbits');
            break;
        case url+'?acercade' : fetchData('acercade');
            break;
		default: c=true;
    }
    c=c&&function(){
        let a = void 0 !== e.target&&document.getElementsByTagName('I') || e.target&&document.getElementsByTagName('A');
        a ? 'A' === e.target.tagName&&null!=e.target.nextElementSibling.className ? b = e.target.nextElementSibling : null != e.target.parentElement.nextElementSibling&&'upmenu' === e.target.parentElement.nextElementSibling.className ? b = e.target.parentElement.nextElementSibling : 0 : 0 ;
		if(void 0 != b){
			return b;
		}else{
			return false;
		}
    }();
	if(c){
		c.classList.toggle('active');
	}
}