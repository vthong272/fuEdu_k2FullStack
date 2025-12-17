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

