const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");


// const hr=date.
setInterval(()=>{
    const date=new Date();
const hr=date.getHours();
const min=date.getMinutes();
const sec=date.getSeconds();
hours.style.transform=`rotate(${(30*hr+(min/2))}deg)`;
minutes.style.transform=`rotate(${6*min}deg)`;
seconds.style.transform=`rotate(${6*sec}deg)`;
},1000);


