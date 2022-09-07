const sidemenu =document.querySelector("aside");
const menuebtn=document.querySelector("#menu-btn");
const clsoebtn=document.querySelector("#close-btn");
const themetoggler=document.querySelector(".theme-toggler");


let dark=sessionStorage.getItem("dark");


if(dark=="true"){
    document.body.classList.toggle('dark-theme-variables');
    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
}
//show sidebar
menuebtn.addEventListener('click',() =>{
    sidemenu.style.display='block';
})

clsoebtn.addEventListener('click',() =>{
    sidemenu.style.display='none';
})

//change thme
themetoggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');
    if(dark==null || dark =="false"){
        sessionStorage.setItem("dark", "true");
    }
    if(dark=="true"){
        sessionStorage.setItem("dark", "false");
       

    }
    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})