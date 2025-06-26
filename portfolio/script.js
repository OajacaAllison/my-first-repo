document.addEventListener("DOMContentLoaded", () => {
    const workBtn = document.querySelector(".wbutton");
    const aboutBtn = document.querySelector(".abutton");
    const contactBtn = document.querySelector(".cbutton");

    const workPage = document.querySelector(".work");
    const aboutPage = document.querySelector(".about");
    const contactPage = document.querySelector(".contact");
    const welcomeDiv = document.querySelector(".welcomerecords");
    const wheader = document.querySelector(".w");
    const playing = document.querySelector(".play");
    const t1 = document.querySelector(".track1");
    const t2 = document.querySelector(".track2")
    const t3 = document.querySelector(".track3")

    workBtn.addEventListener("click", function () {
        welcomeDiv.style.display = "none";
        wheader.style.display = "none";
        playing.style.display = "block";
        setTimeout(function () {
            t1.style.display = "block";
        }, 2000)
        setTimeout(function () {
            workPage.style.display = "inherit";
            document.body.style.backgroundColor = "#e2d2f4";
        }, 3000)
    });

    aboutBtn.addEventListener("click", function () {
        welcomeDiv.style.display = "none";
        wheader.style.display = "none";
        playing.style.display = "block";
        setTimeout(function () {
            t2.style.display = "block";
        }, 2000)
        setTimeout(function () {
            aboutPage.style.display = "block";
            document.body.style.backgroundColor = "#dde4ed"
        }, 3000)
    });
    contactBtn.addEventListener("click", function () {
        welcomeDiv.style.display = "none";
        wheader.style.display = "none";
        playing.style.display = "block";
        setTimeout(function () {
            t3.style.display = "block";
        }, 2000)
        setTimeout(function () {
            contactPage.style.display = "inherit";
        }, 3000)
    });

    const backbtn1 = document.querySelector(".backbtn1");
    const backbtn2 = document.querySelector(".backbtn2");
    const backbtn3 = document.querySelector(".backbtn3")


});
