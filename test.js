
// Resize Function




let width = window.innerWidth;
let iphone = document.getElementById('iphone');


let hidephone = () => {
    
    if(width <= 991){
        iphone.classList.add("hide");
        
    }
    
    
}

window.addEventListener("resize", hidephone() );
function refresh() { location.reload(); }

// Questions Sections

var a = 1;

showtest = (b) => {
    if(a==1){
        document.getElementById("hiddentest"+b).style.display="inline";
        document.getElementById("downarrow"+b).style.display="none";
        document.getElementById("uparrow"+b).style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("hiddentest"+b).style.display="none";
        document.getElementById("downarrow"+b).style.display="inline";
        document.getElementById("uparrow"+b).style.display="none";
        return a=1;
    }
}


