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

// window.addEventListener('load', () => {
//     const loading = document.getElementById('loading');
//     const bar = document.querySelector('.progress span');

//     let percent = 0;
//     const timer = setInterval(() => {
//         percent += 5;
//         bar.style.width = percent + '%';

//         if (percent >= 100) {
//             clearInterval(timer);
//             setTimeout(() => loading.classList.add('hide'), 200);
//         }
//     }, 80);
// });

const music = document.getElementById("xmasMusic");
const btn = document.getElementById("toggleMusic");

function startMusic() {
  music.volume = 0.4;
  music.loop = true;
  music.play().catch(() => {});
  window.removeEventListener("pointerdown", startMusic);
}

window.addEventListener("pointerdown", startMusic);

// nút bật tắt
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
});
