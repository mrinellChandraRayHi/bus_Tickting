let num=0;
let perSit=550;
const btns=document.querySelectorAll('.btn');
const counts=document.getElementById('count');
const tk=document.getElementById('tk');
const sits=document.getElementById('sit');
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styless=e.currentTarget.innerHTML;
        const style = e.currentTarget.classList.add('bg');
        const styles=e.currentTarget.classList;
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