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
    const t2 = document.querySelector(".track2");
    const t3 = document.querySelector(".track3");
    const song = document.querySelector(".fastercar");

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
        }, 8100);
        setTimeout(function () {
            song.loop = true;
            song.currentTime = 0;
            song.play();
        }, 12500);
    });
    const nextbtn1 = document.querySelector(".nextwork");
    const aphimg = document.querySelector(".aphquiz");
    const wttx = document.querySelector(".wttx"); // make sure this matches!
    const needlet = document.querySelector(".needle");
    const apsec1 = document.querySelector(".apsec");
    const misim = document.querySelector(".misl");
    const misec1 = document.querySelector(".misec");

    nextbtn1.addEventListener("click", function () {
        aphimg.style.animation = "slide-down 2.5s ease both";
        needlet.style.position = "absolute";
        aphimg.style.zIndex = "50%";
        apsec1.style.visibility = "visible";
        apsec1.style.webkitAnimation = "2s fade-in forwards";
        apsec1.style.animation = "2s fade -in forwards";
        window.scrollBy(0, 650);
    });
    nextbtn1.addEventListener("dblclick", function(){
        misim.style.animation = "slide-down2 2.5s ease both";
        needlet.style.position = "absolute";
        misim.style.zIndex = "50%";
        misec1.style.visibility = "visible";
        misec1.style.webkitAnimation = "2s fade-in forwards";
        misec1.style.animation = "2s fade -in forwards";
    })
    aboutBtn.addEventListener("click", function () {
        welcomeDiv.style.display = "none";
        wheader.style.display = "none";
        playing.style.display = "block";
        setTimeout(function () {
            t2.style.display = "block";
        }, 2000)
        setTimeout(function () {
            aboutPage.style.display = "block";
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

    function playAudio() {
        song.play();
    }
});
