document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="session"]');
    const cards = document.querySelectorAll('.card');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            const value = this.value;

            cards.forEach(card => {
                if (value === 'all' || card.dataset.session === value) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const bar = document.querySelector('.progress span');

    let percent = 0;
    const timer = setInterval(() => {
        percent += 5;
        bar.style.width = percent + '%';

        if (percent >= 100) {
            clearInterval(timer);
            setTimeout(() => loading.classList.add('hide'), 200);
        }
    }, 80);
});

const music = document.getElementById("xmasMusic");

mainTl.eventCallback("onStart", () => {
  music.volume = 0.4;
  music.loop = true;
  music.play().catch(() => {
    // phòng trường hợp browser chặn autoplay
    console.log("Autoplay bị chặn, cần user interaction");
  });
});


const startMusicOnce = () => {
  music.play().catch(() => {});
  document.removeEventListener("click", startMusicOnce);
};

document.addEventListener("click", startMusicOnce);


const btn = document.getElementById("toggleMusic");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
};


