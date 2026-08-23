const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeBtn = document.getElementById("closeBtn");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const flap = document.querySelector(".flap");

function hasMusicSource() {
    // Cek apakah ada <source> di dalam <audio> ATAU src langsung di elemen audio
    return music.querySelector("source") !== null || music.getAttribute("src");
}

envelope.addEventListener("click", () => {
    flap.classList.add("open");

    setTimeout(() => {
        envelope.style.display = "none";
        letter.style.display = "block";
    }, 700);

    if (hasMusicSource()) {
        music.play().catch(() => {});
        musicBtn.textContent = "♫";
    }
});

closeBtn.addEventListener("click", () => {
    letter.style.display = "none";
    envelope.style.display = "flex";
    flap.classList.remove("open");
});

musicBtn.addEventListener("click", () => {
    if (!hasMusicSource()) {
        alert("Tambahkan file musik ke elemen audio di index.html.");
        return;
    }

    if (music.paused) {
        music.play().catch(() => {});
        musicBtn.textContent = "♫";
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
    }
});
