const sleeves = document.querySelectorAll(".sleeve");
const disk = document.getElementById("disk");
const nowPlayingText = document.getElementById("nowPlayingText");

sleeves.forEach((sleeve) => {
  sleeve.addEventListener("click", () => {
    // Remove highlights from all
    sleeves.forEach((s) => s.classList.remove("highlighted"));

    // Highlight clicked one
    sleeve.classList.add("highlighted");

    const section = sleeve.getAttribute("data-section");

    // Move disk into place with animation
    disk.classList.remove("hidden");

    // Reset position
    disk.style.transform = "translate(0px, 0px)";

    // Slide record out and into player
    setTimeout(() => {
      disk.style.transform = "translate(500px, 0px)";
    }, 200); // out of sleeve

    setTimeout(() => {
      disk.style.transform = "translate(700px, 100px)";
    }, 1000); // into player

    setTimeout(() => {
      nowPlayingText.textContent = `Now Playing: ${section}`;
    }, 1700);

    // Optionally navigate
    // setTimeout(() => {
    //   window.location.href = `/${section.toLowerCase()}/${section}.html`;
    // }, 3000);
  });
});
