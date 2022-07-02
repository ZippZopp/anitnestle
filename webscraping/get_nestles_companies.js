const puppeteer = require('puppeteer')
const fs = require('fs');

//scrap wikipedia for all companies owned by nestle
async function scrape_for_nestle_companies() {
  const browser = await  puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://en.wikipedia.org/wiki/List_of_Nestl%C3%A9_brands")
  const rows = await page.$$('.div-col')
  const companies = []
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    const label = await row.getProperty('textContent')
    var raw = await label.jsonValue()
    var raw = raw.replace(/[\(\[].+[\)\]]/g,'')
    var list_raw = raw.match(/(.+)(?<! )/g);
    for (let index = 0; index < list_raw.length; index++) {
      companies.push(list_raw[index])
      
    }
  }
  const jsoncompanies = JSON.stringify(companies);

  console.log(companies)
  fs.writeFile("./nestle_companies.json", jsoncompanies, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
   
  });

  await browser.close()
}

scrape_for_nestle_companies()
