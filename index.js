let button = document.getElementById("btn")
let image = document.querySelector("#me")
let setTheme = localStorage.getItem("theme")

if(setTheme){
    document.body.classList.add(setTheme)
    if(setTheme === "dark"){
        image.src = "sun_icon-removebg-preview.png"

    }

}

button.addEventListener("click", function myClick(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        image.src="moon_icon-removebg-preview.png"
        localStorage.setItem("theme", "light")
    }else{
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        image.src ="sun_icon-removebg-preview.png"
        localStorage.setItem("theme", "dark")
    }
})


 let btn1 = document.getElementById("btn-1") 
 let nav = document.querySelector(".nav1")
 let nav2 = document.querySelector(".nav2")

 btn1.addEventListener("mouseover",() => {
    nav.style.transform === "translateX(0%)"
    if(nav.style.transform ="translateX(0%)"){
        nav2.style.visibility = "hidden"

    }else{
        nav2.style.display = "block"
    }
 })
 btn1.addEventListener("mouseout", () => {
    setTimeout(() => {
        if(!nav.matches(":hover")){
            nav.style.transform ="translateX(-100%)"
            nav2.style.visibility = "visible"
        }
    },100)
 })

 let btn2 = document.getElementById("home");
 let btn3 = document.getElementById("about");
 let btn4 = document.getElementById("contact");
 let btn5 = document.getElementById("others");
 let btn6 = document.querySelector("#man")

 btn2.addEventListener("click",() => {
    window.location.href = "index.html"
 });
 btn3.addEventListener("click",() => {
    window.location.href = "app.html"
 });
    btn4.addEventListener("click",() => {
        window.location.href = "script.html"
 })
    btn5.addEventListener("click",() => {
        window.location.href = "element.html"
 })
    btn6.addEventListener("click",() => {
        window.location.href = "element.html"
})