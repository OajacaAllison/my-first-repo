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
    const song = document.querySelector(".fastercar")

    workBtn.addEventListener("click", function () {
        // Slide out welcome + header
        welcomeDiv.style.webkitAnimation = "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        welcomeDiv.style.animation = "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        wheader.style.webkitAnimation = "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        wheader.style.animation = "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";

        // Hide them after animation
        setTimeout(function () {
            welcomeDiv.style.display = "none";
            wheader.style.display = "none";
        }, 1000);

        // Show and animate 'playing' slowly
        setTimeout(function () {
            playing.style.display = "block";
            playing.style.webkitAnimation = "slide-in-top 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            playing.style.animation = "slide-in-top 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        }, 1200);

        // Slide out 'playing'
        setTimeout(function () {
            playing.style.webkitAnimation = "slide-out-bottom 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            playing.style.animation = "slide-out-bottom 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        }, 3500);

        // Hide 'playing'
        setTimeout(function () {
            playing.style.display = "none";
        }, 5600);

        // Fade in t1
        setTimeout(function () {
            t1.style.visibility = "visible";
            t1.style.webkitAnimation = "fade-in 1s ease both";
            t1.style.animation = "fade-in 1s ease both";
        }, 5700);

        // Fade out t1
        setTimeout(function () {
            t1.style.webkitAnimation = "fade-out 1s ease both";
            t1.style.animation = "fade-out 1s ease both";
        }, 7000);

        // Hide t1
        setTimeout(function () {
            t1.style.visibility = "hidden";
        }, 8000);

        // Slide in workPage
        setTimeout(function () {
            workPage.style.display = "inherit";
            workPage.style.webkitAnimation = "slide-in-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            workPage.style.animation = "slide-in-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            document.body.style.backgroundColor = "#e2d2f4";
        }, 8100);
        setTimeout(function () {
            song.loop = true;
            song.currentTime = 0;
            song.play();
        }, 12700);
    });
    const nextbtn1 = document.querySelector(".nextwork");
    const aphimg = document.querySelector(".aphquiz");
    const wttx = document.querySelector(".wttx"); // make sure this matches!
    const needlet = document.querySelector(".needle")
    nextbtn1.addEventListener("click", function () {
        wttx.style.height = "500px";
        wttx.style.textAlign = "right";
        aphimg.style.animation = "slide-down 2.5s ease both"
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

});
