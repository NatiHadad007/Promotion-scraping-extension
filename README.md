This project allows you to grab data from a certain site and displaying it by an extension, and updated it by each pass day if the data has changed.
instructions:
1. First you to sign up to this site https://scrapestack.com and paste the key into the api request, for example:
  const response = await fetch(
    "http://api.scrapestack.com/scrape?access_key=123123abcabc&url=http://www.saatva.com"
}

2. Grab the HTML element you want to scrape (by class or id), for example:
      const doc = parser.parseFromString(html, "text/html");
      const display = doc.querySelector(".u-hidden--md-down").textContent; // Grabing the data from this selector ".u-hidden--md-down"
  
