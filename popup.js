function init() {
  let updated = localStorage.getItem("updated");
  console.log(updated);
  if (updated == undefined) {
    getPromo();
  } else if (Date.now() - updated > 86400000) {
    getPromo();
  } else {
    document.getElementById("extractedText").innerHTML =
      localStorage.getItem("PromoString");
    console.log("promo updated");
  }
}

async function getPromo() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}.${month}.${year}`;
  const response = await fetch(
    "http://api.scrapestack.com/scrape?access_key={your_scrapestack_key}&url=http://www.saatva.com"
  )
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const display = doc.querySelector(".u-hidden--md-down").textContent;
      let PromoString =
        "<strong>" +
        `Saatva promotion of (${currentDate}): ` +
        "</strong>" +
        display;
      document.getElementById("extractedText").innerHTML = PromoString;
      localStorage.setItem("PromoString", PromoString);
      localStorage.setItem("updated", Date.now());
    })
    .catch((error) => {
      console.log("An error occurred while fetching the website:", error);
    });
}

init();
