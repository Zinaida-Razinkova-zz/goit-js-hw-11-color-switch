// Привязка к кнопкам.
const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

// Логика работы кнопок.
const changeColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    console.log('Start!');

    this.isActive = true;

    this.intervalId = setInterval(() => {
      console.log('WOW - changeColor!');
      colorUpdate();
    }, 1000);
  },

  stop() {
    console.log('Stop!');
    clearInterval(this.intervalId);
    // this.intervalId = null;
    this.isActive = false;
  },
};

// Слушатель событий, при клике на кнопку запускаются функции
refs.start.addEventListener('click', changeColor.start.bind(changeColor));
refs.stop.addEventListener('click', changeColor.stop.bind(changeColor));

// Массив цветов, дан по условию.
const colors = [
  '#F08080',
  '#DB7093',
  '#DDA0DD',
  '#BA55D3',
  '#8B008B',
  '#1E90FF',
];

// Функция для генерации случайного числа (дана по условию от Саши Репеты).
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция обновления цвета фона
function colorUpdate() {
  const min = 0;
  const max = colors.length - 1;
  const randomColor = randomIntegerFromInterval(min, max);
  document.body.style.backgroundColor = colors[randomColor];
}
