const myskill = document.getElementById('myskill');
const contact = document.getElementById('contact');
const btnskill = document.getElementById('btn-skill');
const btncontact = document.getElementById('btn-contact');

contact.style.display = "none";


function displaySkill(){
    contact.style.display = "none";
    myskill.style.display = "block";
}

function displayContact(){
    myskill.style.display = "none";
    contact.style.display = "block";
}

btnskill.addEventListener('click',function(){
    btnskill.style.paddingBottom = "5px";
    btnskill.style.borderBottom = "2px solid tomato";
    btncontact.style.borderBottom = "none";
});

btncontact.addEventListener('click',function(){
    btncontact.style.paddingBottom = "5px";
    btncontact.style.borderBottom = "2px solid tomato";
    btnskill.style.borderBottom = "none";
});