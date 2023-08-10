const burger=document.querySelector('.img_burger');
const menu=document.querySelector('.menu');
const btnclose=document.querySelector('.img_close');

const title=document.querySelector('.presentation');
const txt="Hello,my name is Ngankep Fandio Ordy Benidi.";

function typewrite(word,index){
    if(index<word.length){
        setTimeout(() =>{
           title.innerHTML += `<span>${word[index]}</span>`
           typewrite(txt, index +1)
        },300);
    }
}
setTimeout(() =>{
    typewrite(txt,0)
},500);






burger.addEventListener("click", ()=>{
    menu.style.display='block';
    menu.style.width='100%';
    btnclose.style.display='block';
});

btnclose.addEventListener("click", ()=>{
    menu.style.display='none';
    btnclose.style.display='none';
});