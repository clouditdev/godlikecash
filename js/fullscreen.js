var button=document.getElementById("button")
var el=document.documentElement;
button.addEventListener("click", () => {
    if(el.requestFullscreen) {
        el.requestFullscreen()
    }
})