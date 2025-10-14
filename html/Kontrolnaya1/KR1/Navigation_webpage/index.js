function openImageCentered(url, w = 600, h = 400) {
  const left = (screen.width - w) / 2;
  const top = (screen.height - h) / 2;
  window.open(
    url,
    "_blank",
    `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );
}


document.getElementById("sendButton").addEventListener("click", combine);

function combine() {
  const s = document.getElementById("surname").value.trim();
  const n = document.getElementById("name").value.trim();
  const query = `${s} ${n}`;
  document.getElementById("query").value = query;
  document.getElementById("UserEnter").submit();
}

function combineOrder() {
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const pay = document.querySelector('input[name="pay"]:checked').value;
  const gift = document.getElementById("gift").checked ? "с подарочной упаковкой" : "";
  const warranty = document.getElementById("warranty").checked ? "с гарантией" : "";
  const delivery = document.getElementById("delivery").value;
  const comment = document.getElementById("comment").value;

  // собираем всё в одну строку для Google
  const queryText = `Заказ: ${product}, ${quantity} шт, оплата: ${pay}, ${gift} ${warranty}, доставка: ${delivery}. Комментарий: ${comment}`;
  
  // записываем строку в скрытое поле q
  document.getElementById("query").value = queryText;
}