let menustatus = false;
let navtoggle = function(){
    let getsb = document.querySelector(".nav-sidebar ");
    let getsbul = document.querySelector(".nav-sidebar ul");
    let getmenu = document.querySelector(".nav-sidebar span");
    let getlinks = document.querySelectorAll(".nav-sidebar a");

    if(menustatus === false)
    {
        getsbul.style.visibility = "visible";
        getmenu.style.opacity = "0.5";
        getsb.style.width= "200px";
         
        let al=getlinks.length;
        for(let i=0;i<al;i++){
            getlinks[i].style.opacity=1
        }
        
        menustatus=true;
    }
    else if(menustatus === true)
    {
        
        getmenu.style.opacity = "0";
        getsb.style.width= "50px";
         
        let al=getlinks.length;
        for(let i=0;i<al;i++){
            getlinks[i].style.opacity=0;
        }
        getsbul.style.visibility = "hidden";
        menustatus=false;
    }
}