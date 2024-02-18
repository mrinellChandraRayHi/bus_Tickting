let num=0;
let perSit=550;
const btns=document.querySelectorAll('.btn');
const counts=document.getElementById('count');
const tk=document.getElementById('tk');
const sits=document.getElementById('sit');
//const ele=document.createElement('p');
//const eleT=document.createTextNode('Mrinell');
//ele.appendChild(eleT);
// const sit=document.getElementById('seates').appendChild(ele);

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        //const sit=document.getElementById('seates').appendChild(ele);
        //sit.style.maxHeight='100vh';
        const styless=e.currentTarget.innerHTML;
        //console.log(styless);
        const style = e.currentTarget.classList.add('bg');
        const styles=e.currentTarget.classList;
        //console.log(style);
        if(styles.contains('btn-active')){
            num++;
            perSit;
        }
        counts.innerHTML=num;
        tk.innerHTML=perSit;
        sits.innerHTML=styless;

        

    })
})

function myFu(){
    const h=document.getElementById('hide');
    const v=document.getElementById('visible');
    h.classList.add('hidden');
    v.classList.remove('hidden');
}

function myFunc(){
    const h=document.getElementById('hide');
    const v=document.getElementById('visible');
    h.classList.remove('hidden');
    v.classList.add('hidden');
}