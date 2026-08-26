const company = {
  name: "MIRKO IZOBAZALT",
  phone: "+998905315553",
  displayPhone: "+998 90 531 55 53",
  ownerTelegram: "uygun0", // <-- ЗАМЕНИТЕ на username владельца без @
  website: "https://mirko.uz",
  address: "Фергана, Узбекистан",
  map: "https://maps.app.goo.gl/tJ2QovGrQXCd3f8q8",
  map: "https://yandex.ru/maps/-/CTSwMU4t",
  instagram: "https://www.instagram.com/mirko_izobazalt?igsi=cDh4Nno0MHd2M294",
  telegram: "https://t.me/mirko_izobazalt",
  whatsapp: "https://wa.me/998901234567"
};

document.getElementById("ownerCallBtn").href = `tel:${company.phone}`;
document.getElementById("ownerPhoneText").textContent = company.displayPhone;
document.getElementById("ownerTelegramText").textContent = `@${company.ownerTelegram}`;
document.getElementById("ownerTelegramBtn").href = `https://t.me/${company.ownerTelegram}`;
document.getElementById("websiteBtn").href = company.website;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

document.getElementById("saveContact").addEventListener("click", () => {
  const vcard =
`BEGIN:VCARD
VERSION:3.0
FN:${company.name}
ORG:${company.name}
TEL;TYPE=WORK,VOICE:${company.phone}
ADR;TYPE=WORK:;;${company.address}
URL:${company.instagram}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "MIRKO-IZOBAZALT.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  showToast("Контакт готов к сохранению");
});
