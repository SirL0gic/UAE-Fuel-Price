// To get latest data
let webScraper = () => {
  const url = "https://gulfnews.com/gold-forex/historical-fuel-rates";

  axios
    .get(url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      const rows = $(".table-striped tbody tr");

      const fuelPrices = [];

      rows.each((index, row) => {
        const columns = $(row).find("td");
        const date = $(row).find("th").text().trim();
        const super98 = $(columns[0]).text().trim();
        const special95 = $(columns[1]).text().trim();
        const ePlus91 = $(columns[2]).text().trim();
        const diesel = $(columns[3]).text().trim();

        fuelPrices.push({
          date,
          super98,
          special95,
          ePlus91,
          diesel,
        });
      });

      fuelPrices.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });

      console.log(fuelPrices);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};









