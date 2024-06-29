let openbutton=document.getElementById('openpopup');
let closebutton=document.getElementById('closepopup');
let popup=document.getElementById('popup');

openbutton.addEventListener('click',() =>(
    popup.classList.add('open')
));

closebutton.addEventListener('click',()=>(
    popup.classList.remove('open')
));