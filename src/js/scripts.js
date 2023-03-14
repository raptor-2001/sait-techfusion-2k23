let li=document.getElementsByClassName("down");
for(let i=0;i<li.length;i+=1){
    li[i].addEventListener('click',(e)=>{
        let temp=e.target;
        temp=temp.parentElement.parentElement.parentElement.lastElementChild;
        if(temp.style.display===""||temp.style.display==="none"){
            e.target.style.transition="all 0.75s ease"
            e.target.style.transform="rotate(180deg)";
            setTimeout(()=>{
                temp.style.display="block";
            },250);
        }
        else{
            e.target.style.transform="rotate(360deg)";
            setTimeout(()=>{
                temp.style.display="none";
            },250);
        }
        e.preventDefault();
    });
}