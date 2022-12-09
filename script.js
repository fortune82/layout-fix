buttonEng = document.querySelector(".engButton");
buttonUkr = document.querySelector(".ukrButton");
textUkr = document.querySelector(".ukr_window");
textEng = document.querySelector(".eng_window");
resetText = document.querySelector(".resetText"); // кнопка сброса

buttonUkr.onclick = pressUkr;
buttonEng.onclick = pressEng;
resetText.onclick = resText;

let alphabet = {
  q: "й",
  w: "ц",
  e: "у",
  r: "к",
  t: "е",
  y: "н",
  u: "г",
  i: "ш",
  o: "щ",
  p: "з",
  "[": "х",
  "]": "ї",
  a: "ф",
  s: "і",
  d: "в",
  f: "а",
  g: "п",
  h: "р",
  j: "о",
  k: "л",
  l: "д",
  ";": "ж",
  "'": "є",
  z: "я",
  x: "ч",
  c: "с",
  v: "м",
  b: "и",
  n: "т",
  m: "ь",
  "<": "б",
  ">": "ю",
  "\n": "\n", // enter нажатый
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  0: "0",
  ',' : ',',
  '.' : '.',
  '?' : '?',
  '!' : '!',
  '@' : '@',
  '#' : '#',
  '$' : '$',
  '%' : '%',
  '(' : '(',
  ')' : ")",
  '-' : '-',
  '+' : '+',
  '=' : '=',
  '{' : '{',
  '}' : '}',
 }

function pressUkr() {
  let textUser = textUkr.value; //получаем значения введенные пользовавтелям
  let arrTextLowerCase = textUser.toLowerCase(); // преобразовываем текст в ннижний регистр
  let arrText = arrTextLowerCase.split(""); //разбиваем слова на буквы
  for (i = 0; i < arrText.length; i++) {
    // перебираем весь текст
    if (arrText[i] == " ") {
      textEng.value += " "; //textEng.value вместо textEng.innerHTML, т.к. при  textEng.innerHTML срабатывает вывод на экран только 1 раз
    }
    for (let key in alphabet) {
      // перебираем все ключи массива alphabet
      if (arrText[i] == key) {
        // сравниваем букву с ключом
        textEng.value += alphabet[key]; // выводим перевод на экран
      }
    }
  }
}

function pressEng() {
  let textUser = textEng.value; //получаем значения введенные пользовавтелям
  let arrTextLowerCase = textUser.toLowerCase(); // преобразовываем текст в ннижний регистр
  let arrText = arrTextLowerCase.split(""); //разбиваем слова на буквы
  for (i = 0; i < arrText.length; i++) {
    // перебираем весь текст
    if (arrText[i] == " ") {
      textUkr.value += " ";
    }
    for (let key in alphabet) {
      // перебираем все значения массива alphabet
      if (arrText[i] == alphabet[key]) {
        // сравниваем букву со значением
        textUkr.value += key; // выводим перевод на экран
      }
    }
  }
}

function resText() {
  textEng.innerHTML = ""  //очищаем в html файле
  textUkr.innerHTML = ""      
  textEng.value = ""// очищаем с экрана
  textUkr.value = "" 
}
