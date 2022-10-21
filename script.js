const open = document.getElementById("open")
const close = document.getElementById("close")
const mainContainer = document.querySelector(".mainContainer")

open.addEventListener("click", () => mainContainer.classList.add("show-nav"))

close.addEventListener("click", () => mainContainer.classList.remove("show-nav"))



const panels = document.querySelectorAll(".panel") //querySelector allows to select ANY elements

//forEach array calls to add the eventListener to element "panel" and listener will add panel to class list active
//technically it tells what to do when you click(which is the event)
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses() //remove previous active before adding active to new panel
        panel.classList.add("active")
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
};

