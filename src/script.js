function dropMenu(){
    let menu = document.getElementById("nav")
    if(menu.className === "navbar"){
        menu.className += " menu"
    }else
    menu.className = "navbar"
}
function seeMore(this1){
    let dot = this1.parentElement.querySelector(".dots")
    let more = this1.parentElement.querySelector(".more")
    let btn = this1.parentElement.querySelector(".btn")
    console.log(dot.style.display)
    if(dot.style.display == "none"){
        more.style.display = "none"
        dot.style.display = "block"
        btn.innerText = "Read More"
        btn.style.backgroundColor = "rgb(41, 44, 223)"
    }
else{
    more.style.display = "block"
    dot.style.display = "none"
    btn.innerText = "Read Less"
    btn.style.backgroundColor = " rgb(115, 37, 9)"
  }
}