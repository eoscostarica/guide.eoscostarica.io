function setLang(){
    document.documentElement.lang="en";

    var alternative = document.createElement('link');    
    alternative.rel = 'alternative';
    alternative.hreflang = 'es';
    alternative.href = 'guias.eoscostarica.io';
    document.getElementsByTagName('head')[0].appendChild(alternative);
}

window.addEventListener('load', ()=> {
    setLang();
})