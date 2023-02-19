var x=-1;
function addField(){
    const container = document.getElementById('taskfields');
    x+=1;
    let input = document.createElement('input');
    input.id = `inp${x}`;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
}
// to remove input feild 
function removeField(){
    const container = document.getElementById('taskfields');
    container.removeChild(document.getElementById(`inp${x}`));
    container.innerHTML=container.innerHTML.replace("<br><br>",'') ;
    x-=1;
    
}
// page mode (dark , light)
var lightdarkvar=0;

 function modeChange(){
    var mn=document.getElementById('main');
    mn.classList.toggle("dark-mode");
    
    document.getElementById("firstInput").classList.toggle("dark-back");

    if ((lightdarkvar)%2==0){
    document.getElementById("modebtn").innerHTML=
    "<img src='/icons/sun.png' id='sun'  alt='dark' width='70px' height='56px'  style='border-radius:50%; border:0px;' >";
    lightdarkvar+=1;
    document.getElementById("modebtn").style.backgroundColor="transparent";
    document.getElementById("modebtn").style.borderRadius="50%";
    // for icons 
    document.getElementById("icon1").style.backgroundColor="#7a1d5b";
    document.getElementById("icon2").style.backgroundColor="#7a1d5b";
    document.getElementById("icon3").style.backgroundColor="#7a1d5b";
    // for clock 
    document.getElementById("clock").style.filter=" brightness(0)";
    // for quick adds
    document.getElementById("1").style.backgroundColor="rgb(79, 55, 55)";
    document.getElementById("1").style.color="white";
    document.getElementById("2").style.backgroundColor="rgb(79, 55, 55)";
    document.getElementById("2").style.color="white";    
    document.getElementById("3").style.backgroundColor="rgb(79, 55, 55)";
    document.getElementById("3").style.color="white";
    //  task box
    document.getElementById("taskbox1").style.backgroundColor="#928f66af";
    //top rounded bar
    document.getElementById("top").style.backgroundColor="#b5774f7f";
    //for video
    document.getElementById("vid").style.filter="invert(0)";
    // for body font color
    document.getElementById("todoPicker").style.backgroundColor="#b5774f7f";
    document.getElementById("todoPicker").style.border="1px groove grey";
    document.getElementById("taskbox1").style. border="1px groove grey";
    // for body bg
    document.body.style.backgroundColor="#976f6f";
    // for footer img
    document.getElementById("footerimg").src="/img/foooterdark.png";
    }
    else{
    document.getElementById("modebtn").
    innerHTML="<img src='/icons/moon1.png'alt='dark' id='moon' width='50px' height='50px' style='border-radius:50%;'>";
    lightdarkvar+=1;
    document.getElementById("modebtn").style.backgroundColor="transparent";
    document.getElementById("icon1").style.backgroundColor="#923a74";
    document.getElementById("icon2").style.backgroundColor="#923a74";
    document.getElementById("icon3").style.backgroundColor="#923a74";
    document.getElementById("clock").style.filter="invert(1)";
    document.getElementById("1").style.backgroundColor="white";
    document.getElementById("1").style.color="black";
    document.getElementById("2").style.backgroundColor="white";
    document.getElementById("2").style.color="black";   
    document.getElementById("3").style.backgroundColor="white";
    document.getElementById("3").style.color="black";
    document.getElementById("taskbox1").style.backgroundColor="#fffbacaf";

    document.getElementById("top").style.backgroundColor="#faa3697f";
    document.getElementById("vid").style.filter="invert(1)";

    document.getElementById("todoPicker").style.backgroundColor="#faa36983";
    document.getElementById("todoPicker").style. border="1px double rgb(228, 226, 226)";
    document.getElementById("taskbox1").style. border="1px groove rgb(248, 246, 246)";
    document.body.style.backgroundColor="#FFBABA";

    // for footer image 
    document.getElementById("footerimg").src="/img/foooter.png";
    }
}
function sendtotask(id){
    var wrap=document.getElementById('taskfields');
    var newele=document.createElement('input');
    newele.value=document.getElementById(id).innerHTML;
    wrap.appendChild(newele);
    newele.id=`inp${x}`;
    x+=1;
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createElement("br"));
   }