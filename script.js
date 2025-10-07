const btn=document.querySelector('button')

btn.addEventListener('mouseover',(e)=>{
    const x=e.clientX;
    const y=e.clientY;

    console.log(x,y);
    
    const ranX=Math.random()*(650)+1
    const ranY=Math.random()*(650)+1

    console.log(ranX,ranY);


    btn.style.top = ranX+"px"
    btn.style.left = ranY+"px"
})