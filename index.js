const validJSON = '{ "name": "Mango", "age": 2 }';
const invalidJSON = "{ бекенд вернул такое-то чудо}";

// Констурция трай кетч нужен для того чтобы не упал твой скрипт полностью
// применяете когда вы парсите джейсон и когда с локалсториджа читаете и парсите тоже используете
// обязательно оберните в трай кетч
try {
  console.log(1);

  console.log(JSON.parse(validJSON));

  console.log(2);
} catch (error) {
  console.log(error);
  if (error.name === "SyntaxError") {
    console.log("Ошибка парса json надо что-то делать");
  }
}

console.log("После try...catch");

// async/await - это для работы  промисами / ассинхронным кодом

// чтобы сделать функцию асснихроной достаточно написать async

// // для функции ставите асинг
// const fn = async function () {}

// // Для стрелочной функции
// const arr = async () => {}

// // для метода обьекта
// const x = {
//     async getname() {}
// }

// // метод класса
// const X = {
//     async getname() {}
// }

// Правило 1
// ассинхронная функция всегда возвращает промис

// Правило 2
// async - делает код синхронным

function getFruit(name) {
  const fruits = {
    strawberry: "S",
    kiwi: "K",
    apple: "A",
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
  try {
    const apple = getFruit("apple");
    const kiwi = getFruit("kiwi");
    const berry = getFruit("strawberry");

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);

    return fruits;

  } catch (error) {
    console.log("Ошибка");
  }
}

aMakeSmoothie().then(fruits => console.log)
