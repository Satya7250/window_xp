//clock script
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    document.getElementById(
        "clock"
    ).textContent = `${hours}:${minutes} ${ampm}`;

    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("date").textContent = formattedDate;
}

updateClock();
setInterval(updateClock, 1000);

//about section open and close
document.querySelector('.icon-about').addEventListener('click', function () {
    document.querySelector('.about-display').style.display = 'block';
});
document.querySelector('.about-display .title-btn:last-child').addEventListener('click', function () {
    document.querySelector('.about-display').style.display = 'none';
});

//resume section open and close
document.querySelector('.icon-resume').addEventListener('click', function () {
    document.querySelector('.resume-display').style.display = 'block';
});
document.querySelector('.resume-display .close-resume').addEventListener('click', function () {
    document.querySelector('.resume-display').style.display = 'none';
});

//contact section open and close
document.querySelector('.icon-contact').addEventListener('click', function () {
    document.querySelector('.contact-display').style.display = 'block';
});
document.querySelector('.contact-display .close-contact').addEventListener('click', function () {
    document.querySelector('.contact-display').style.display = 'none';
});

//project section open and close
document.querySelector('.icon-projects').addEventListener('click', function () {
    document.querySelector('.project-display').style.display = 'block';
});
document.querySelector('.project-display .close-project').addEventListener('click', function () {
    document.querySelector('.project-display').style.display = 'none';
});


/* Background Changer */
const container = document.getElementById("container");
document.querySelectorAll(".background-changer").forEach(btn => {
  const bg = btn.dataset.bg;
  new Image().src = bg;
  btn.onclick = () => container.style.backgroundImage = `url('${bg}')`;
});



//Zoom Functionality for all XP windows
document.querySelectorAll('.zoom-btn').forEach(button => {
    button.addEventListener('click', function () {
        const xpWindow = this.closest('.xp-window').parentElement;
        const isZoomed = xpWindow.classList.toggle('zoomed');

        if (isZoomed) {
            xpWindow.style.width = '95%';
            xpWindow.style.height = '95%'; 
            xpWindow.style.maxWidth = '100%';
            xpWindow.style.transform = 'translate(-50%, -50%) scale(1.05)';
            this.textContent = '❐';
        } else {
            xpWindow.style.width = '90%';
            xpWindow.style.height = '85%';
            xpWindow.style.maxWidth = '900px';
            xpWindow.style.transform = 'translate(-50%, -50%) scale(1)';
            this.textContent = '□';
        }
    });
});

//music player
function activateMusicPlayer() {
  const container = document.getElementById("musicContainer");
  container.classList.toggle("active");
}

document.addEventListener('wheel', e => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
