var product = document.getElementById("product");
product.innerText = "*";
// Получаем все кнопки калькулятора
const buttons = document.querySelectorAll('li');

// Добавляем обработчик событий для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс 'active' у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));

        // Добавляем класс 'active' только к текущей нажатой кнопке
        button.classList.add('active');
    });
});
