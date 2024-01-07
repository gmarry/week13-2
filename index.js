function calculateDays() {
  const birthdayInput = document.getElementById("birthday"); // Получаем элемент input с id "birthday"
  const birthdayValue = birthdayInput.value; // Получаем значение из этого элемента (введенную дату рождения)
  const result = document.getElementById("result"); // Получаем элемент с id "result", куда будем выводить результат

  // Проверка, если значение даты рождения пусто
  if (birthdayValue === "") {
    result.textContent = "Пожалуйста, введите дату рождения"; // Устанавливаем текст сообщения об ошибке
    result.style.color = "#ff5e57"; // Устанавливаем красный цвет текста
    return;
  }

  const today = new Date(); // Создаем объект Date для текущей даты и времени
  const birthdayDate = new Date(birthdayValue); // Создаем объект Date для введенной даты рождения
  const timeDiff = birthdayDate.getTime() - today.getTime(); // Разница в миллисекундах между датой рождения и текущей датой
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Разница в днях, округленная вверх

  const absDaysDiff = Math.abs(daysDiff); // Получаем абсолютное значение разницы в днях

  let resultMessage = ""; // Переменная для хранения сообщения (не const, так как должна меняться)

  if (daysDiff === 0) {
    // Если разница в днях равна нулю
    resultMessage = "Сегодня Ваш день рождения! Поздравляю!!!"; // Устанавливаем сообщение "Сегодня Ваш день рождения!"
  } else if (daysDiff < 0) {
    // Если разница в днях меньше нуля (день рождения уже прошел в текущем году)
    resultMessage = `Ваш день рождения был ${absDaysDiff} ${numToWord(
      absDaysDiff,
      "день",
      "дня",
      "дней"
    )} назад.`;
  } else {
    // Если разница в днях больше нуля (день рождения еще предстоит в текущем году)
    resultMessage = `До вашего дня рождения осталось ${daysDiff} ${numToWord(
      daysDiff,
      "день",
      "дня",
      "дней"
    )}.`;
  }

  result.textContent = resultMessage; // Выводим сообщение в элемент с id "result"
}

function numToWord(num, formFor1, formFor234, formForOther) {
  num = num % 100; // Оставляем только последние две цифры числа
  let word = formForOther; // По умолчанию устанавливаем форму для чисел, оканчивающихся на "дней"

  if (num >= 5 && num <= 20) {
    // Если число от 5 до 20
    word = formForOther; // Форма остается той же
  } else {
    // В остальных случаях
    num = num % 10; // Оставляем только последнюю цифру числа

    if (num === 1) {
      // Если последняя цифра равна 1
      word = formFor1; // Форма для числа 1
    } else if (num >= 2 && num <= 4) {
      // Если последняя цифра от 2 до 4
      word = formFor234; // Форма для чисел от 2 до 4
    }
  }

  return word; // Возвращаем полученную форму слова
}

const button = document.getElementById("btn"); // Получаем кнопку по ее id "btn"
button.addEventListener("click", calculateDays); // Добавляем слушатель события "click" на кнопку, при котором будет вызываться функция
