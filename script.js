function sendOrder() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const comment = document.getElementById("comment").value;

    if (!name || !phone) {
        alert("Ism va telefon raqamni kiriting!");
        return;
    }

    document.getElementById("response").innerText =
        `✅ Buyurtma qabul qilindi!\nIsm: ${name}\nTelefon: ${phone}\nXizmat: ${service}\nIzoh: ${comment}`;

    // Formani tozalash
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("comment").value = "";
}
document.getElementById("callLink").href =
  "tel:+998901234567";
document.getElementById("smsLink").href =
  "sms:+998901234567?body=Salom, buyurtma bermoqchiman";
function sendByPhoneSMSMail() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const comment = document.getElementById("comment").value;

  const text =
    `Ism: ${name}\nTel: ${phone}\nXizmat: ${service}\nIzoh: ${comment}`;

  // EMAIL
  window.location.href =
    "mailto:example@gmail.com?subject=Yangi buyurtma&body=" +
    encodeURIComponent(text);
}
