// Функция для получения параметра 'role' из URL
function getRoleFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('role');
}

// Описание ролей
const roleDescriptions = {
    "tank": "Вы — Танк! Защищаете своих союзников и принимаете основной урон.",
    "mage": "Вы — Маг! Контролируете поле боя своими заклинаниями и способностями.",
    "marksman": "Вы — Стрелок! Наносите высокий урон с безопасного расстояния.",
    "support": "Вы — Поддержка! Помогаете команде, исцеляя и защищая союзников.",
    "jungler": "Вы — Лесник! Ваше место — в лесу, где вы быстро зарабатываете золото и ганките врагов."
};

// Получаем роль и выводим её на страницу
const role = getRoleFromUrl();
document.getElementById('role').textContent = roleDescriptions[role].split(' ')[2]; // Отображаем название роли
document.getElementById('description').textContent = roleDescriptions[role]; // Отображаем описание роли

// Анимация конфетти при загрузке страницы
function launchConfetti() {
    var end = Date.now() + 5 * 1000; // Конфетти длится 5 секунд

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

window.onload = function() {
    launchConfetti(); // Запускаем конфетти при загрузке страницы
};
