'use strict'
const Switcher=document.querySelector('.btn');

Switcher.addEventListener('click',Function);
    document.body.classList.toggle('dark-theme')

    var className=document.body.className;
    if(className =="light-theme") {
        console.log('current calss name:'+className);
        this.textContent="Dark";
    }
     else{
        this.texContent="light";
     }
