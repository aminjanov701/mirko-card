const company = {
  name: "MIRKO IZOBAZALT",
  phone: "+998906315553",
  displayPhone: "+998 90 631 55 53",
  address: "Фергана, Узбекистан",
  map: "https://maps.app.goo.gl/tJ2QovGrQXCd3f8q8",
  instagram: "https://www.instagram.com/mirko_izobazalt?igsi=cDh4Nno0MHd2M294",
  telegram: "https://t.me/mirko_izobazalt",
  whatsapp: "https://wa.me/998901234567"
};

document.getElementById("callBtn").href = `tel:${company.phone}`;
document.getElementById("phoneText").textContent = company.displayPhone;

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
