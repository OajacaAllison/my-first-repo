document.addEventListener("DOMContentLoaded", () => {
    const workBtn = document.querySelector(".wbutton");
    const aboutBtn = document.querySelector(".abutton");
    const contactBtn = document.querySelector(".cbutton");

    const workPage = document.querySelector(".work");
    const aboutPage = document.querySelector(".about");
    const contactPage = document.querySelector(".contact");
    const welcomeDiv = document.querySelector(".welcomerecords");
    const wheader = document.querySelector(".w")

    function show(page) {
        // hide everything first
        [workPage, aboutPage, contactPage].forEach(el => el.style.display = "none");
        // then show the one we want
        page.style.display = "block";
        // hide initial menu
        welcomeDiv.style.display = "none";
        wheader.style.display = "none";
    }

    workBtn.addEventListener("click", () => show(workPage));
    aboutBtn.addEventListener("click", () => show(aboutPage));
    contactBtn.addEventListener("click", () => show(contactPage));

    let backbtn = document.querySelector(".backbtn");
    backbtn.addEventListener("click", function(){
        welcomeDiv.style.display = "block";
        wheader.style.display = "block";
        workPage.style.display="none";
        aboutPage.style.display="none";
        contactPage.style.display="none";

    })
});
