var icon =document.getElementById("icon");
console.log(icon)
icon.onclick= function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src="images/sun.png";
    }
    else{
        icon.src="images/moon.png";
    }
}