function randomNumber() {
    var number = Math.floor(Math.random() * 100);
    for (let count = 1; count <= 10; count++) {
        let num = prompt('Введите число:');
        if (num == number) alert('Вы угадали число за ' + count + " попыток. Число: " + number);
        else if (+num < number) alert('Загаданное число больше');
        else if (+num > number) alert('Загаданное число меньше');
    }
    return alert('Вы не угадали число: ' + number);
}
randomNumber();