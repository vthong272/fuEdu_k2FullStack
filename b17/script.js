document.addEventListener('DOMContentLoaded', function () {
document.getElementById('ex1_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex1_a').value);
    let b = Number(document.getElementById('ex1_b').value);
    [a, b] = [b, a];
    document.getElementById('ex1_out').innerHTML =
        `Sau khi hoán vị:<br>Số a = ${a}<br>Số b = ${b}`;
});

document.getElementById('ex2_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex2_a').value);
    let b = Number(document.getElementById('ex2_b').value);
    let c = Number(document.getElementById('ex2_c').value);
    let max = Math.max(a, b, c);
    document.getElementById('ex2_out').innerHTML =
        `Số lớn nhất là: ${max}`;
});

document.getElementById('ex3_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex3_a').value);
    let b = Number(document.getElementById('ex3_b').value);
    let sameSign = (a > 0 && b > 0) || (a < 0 && b < 0);
    document.getElementById('ex3_out').innerHTML =
        `Hai số ${sameSign ? 'cùng dấu' : 'không cùng dấu'}`;
});

document.getElementById('ex4_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex4_a').value);
    let b = Number(document.getElementById('ex4_b').value);
    let c = Number(document.getElementById('ex4_c').value);
    let sorted = [a, b, c].sort((x, y) => x - y);
    document.getElementById('ex4_out').innerHTML =
        `Sắp xếp tăng dần: ${sorted.join(', ')}`;
});

document.getElementById('ex5_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex5_km').value);
    let total = 0;
    if (a <= 1) total = a * 15000;
    else if (a <= 5) total = 15000 + (a - 1) * 13500;
    else if (a <= 120) total = 15000 + 4 * 13500 + (a - 5) * 11000;
    else total = (15000 + 4 * 13500 + (a - 5) * 11000) * 0.9;
    document.getElementById('ex5_out').innerHTML =
        `Tổng tiền taxi: ${total.toLocaleString()}đ`;
});

document.getElementById('ex6_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex6_kwh').value);
    let total = 0;
    if (a <= 50) total = a * 1678;
    else if (a <= 100) total = 50 * 1678 + (a - 50) * 1734;
    else if (a <= 200) total = 50 * 1678 + 50 * 1734 + (a - 100) * 2014;
    else if (a <= 300) total = 50 * 1678 + 50 * 1734 + 100 * 2014 + (a - 200) * 2536;
    else if (a <= 400) total = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (a - 300) * 2834;
    else total = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (a - 400) * 2927;

    document.getElementById('ex6_out').innerHTML =
        `Tổng tiền điện: ${total.toLocaleString()}đ`;
});

document.getElementById('ex7_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex7_n').value);
    let total = 0;
    for (let i = 1; i <= a; i++) {
        total += i * (i + 1);
    }
    document.getElementById('ex7_out').innerHTML =
        `Tổng là: ${total}`;
});

function ktnt(x) {
    if (x < 2) return false;
    if (x === 2 || x === 3) return true;
    if (x % 2 === 0 || x % 3 === 0) return false;

    let i = 5;
    let m = Math.trunc(Math.sqrt(x));

    while (i <= m) {
        if (x % i === 0) return false;
        i += 2;
        if (x % i === 0) return false;
        i += 4;
    }

    return true;
}

document.getElementById('ex8_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a = Number(document.getElementById('ex8_x').value);

    document.getElementById('ex8_out').innerHTML =
        ktnt(a) ? `${a} là số nguyên tố` : `${a} không phải số nguyên tố`;
});

document.getElementById('ex9_btn').addEventListener('click', () => {
        let html = '';
        for (let i = 1; i <= 10; i++) {
            html += `<strong>Bảng ${i}</strong><br>`;
            for (let j = 1; j <= 10; j++) {
                html += `${i} × ${j} = ${i * j}<br>`;
            }
            html += '<br>';
        }
        document.getElementById('ex9_out').innerHTML = html;
    });
});



