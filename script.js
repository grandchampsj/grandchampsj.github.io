//navbar

const open = document.getElementById("open")
const close = document.getElementById("close")
const mainContainer = document.querySelector(".mainContainer")

open.addEventListener("click", () => mainContainer.classList.add("show-nav"))

close.addEventListener("click", () => mainContainer.classList.remove("show-nav"))


// project panel
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
}

//page transition

window.onload = () => {
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll("a");

    setTimeout(() => {
        transition_el.classList.remove("is-active");
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener("click", e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add("is-active");

            setTimeout(() => {
                window.location.href = target;
            }, 500);

        })
    }
}
