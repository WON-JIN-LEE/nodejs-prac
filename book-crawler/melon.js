const axios = require("axios");
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
async function ogdataScrap(url) {
  try {
    const response = await axios({
      url: "https://www.melon.com/chart/index.htm",
      method: "GET",
      responseType: "arraybuffer",
    });
    const content = iconv.decode(response.data, "utf8").toString();
    const $ = cheerio.load(content);

    $("#lst50").each(
      (index, element) => {
        const ranking = $(element).find("td:nth-child(2) > div > span.rank").text();
               let title = $(element)
                 .find("td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a")
                 .text()
               const artist = $(element)
                 .find("td:nth-child(6) > div > div > div.ellipsis.rank02 > a")
          .text();
               const albumtitle = $(element)
                 .find("td:nth-child(7) > div > div > div > a")
          .text();
               const albumNumber = $(element)
                 .find("td:nth-child(4) > div > a")
                 .attr("href")
                 .split("'")[1];
        console.log(ranking);
        console.log(title);
        console.log(artist);
        console.log(albumtitle);
        console.log(albumNumber);
        console.log("✅✅✅✅✅✅✅");
      

      }
    );
  } catch (error) {}
}

// ogdataScrap();

async function detailDataScrap(albumNumber) {
  const responseDetail = await axios({
    url: `https://www.melon.com/album/detail.htm?albumId=${albumNumber}`,
    method: "GET",
    responseType: "arraybuffer",
  });

  const content = iconv.decode(responseDetail.data, "utf8").toString();
  const $ = cheerio.load(content);
  const detailObj = {
    publisher: '',
    agency: '',
  };
  $("#conts > div.section_info > div > div.entry > div.meta > dl").each(
    (index, element) => {
       detailObj.publisher = $(element)
        .find("dd:nth-child(6)")
        .text();
      detailObj.agency = $(element).find("dd:nth-child(8)").text();
      
    });
  return detailObj;
  
}


detailDataScrap(10937474).then(console.log);
