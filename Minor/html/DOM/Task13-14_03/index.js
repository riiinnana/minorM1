const elementA = document.getElementById("a");
const elementResult = document.getElementById("result");
const elementVerify = document.getElementById("verify");
const elementSend = document.getElementById("send");

const out500 = document.getElementById("out500");
const out100 = document.getElementById("out100");
const out10 = document.getElementById("out10");
const out2 = document.getElementById("out2");
const outputTable = document.getElementById("outputTable");
const note = document.getElementById("note");

let check = false;

function verify() {
  let a = parseInt(elementA.value);

  if (isNaN(a) || a < 0) {
    alert("Введите корректную сумму");
    check = false;
    return;
  }

 
  let Bank_500 = parseInt(a / 500);
  let Ostatok_500 = a % 500;

  let Bank_100 = parseInt(Ostatok_500 / 100);
  let Ostatok_100 = Ostatok_500 % 100;

  let Bank_10 = parseInt(Ostatok_100 / 10);
  let Ostatok_10 = Ostatok_100 % 10;

  let Bank_2 = parseInt(Ostatok_10 / 2);
  let Ostatok_2 = Ostatok_10 % 2;

  console.log(a, Bank_500, Bank_100, Bank_10, Bank_2);

  
  out500.textContent = Bank_500;
  out100.textContent = Bank_100;
  out10.textContent = Bank_10;
  out2.textContent = Bank_2;
  outputTable.style.display = "table";

  
  if (Ostatok_2 !== 0) {
    elementResult.value = `500×${Bank_500}, 100×${Bank_100}, 10×${Bank_10}, 2×${Bank_2}, остаток ${Ostatok_2} руб.`;
    note.textContent = `Нельзя разменять точно. Остаток: ${Ostatok_2} руб.`;
    check = false;
  } else {
    elementResult.value = `500×${Bank_500}, 100×${Bank_100}, 10×${Bank_10}, 2×${Bank_2}`;
    note.textContent = "Размен возможен без остатка.";
    check = true;
  }
}

function send() {
  if (check) {
    document.getElementById("UserEnter").submit();
  } else {
    alert("Размен выполнен не полностью — проверьте остаток перед отправкой.");
  }
}

elementVerify.addEventListener("click", verify);
elementSend.addEventListener("click", send);
