const axios = require("axios");
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
async function ogdataScrap(url) {
  try {
    const response = await axios({
      url: "https://www.genie.co.kr/chart/top200",
      method: "GET",
      responseType: "arraybuffer",
    });

    const content = iconv.decode(response.data, "utf8").toString();
    const $ = cheerio.load(content);

    $("#body-content > div.newest-list > div > table > tbody> tr").each(
      (index, element) => {
        const rank = $(element).find("td.number").text().split(" ")[0].trim();
        let title = $(element)
          .find("td.info > a.title.ellipsis")
          .text()
          .trim();
        if(title.includes('19금')) title = title.replace(/\s/g, "");
        
          // title = title.split(' ');
        const artist = $(element).find("td.info > a.artist.ellipsis").text();
        const albumtitle = $(element)
          .find("td.info > a.albumtitle.ellipsis")
          .text();
        const albumNumber = $(element)
          .find("td.info > a.albumtitle.ellipsis")
          .attr("onclick")
          .split("'")[1];
        
        console.log(rank);
        console.log(title);

      }
    );
  } catch (error) {}
}

 ogdataScrap();

async function detailDataScrap(albumNumber) {
  const responseDetail = await axios({
    url: `https://www.genie.co.kr/detail/albumInfo?axnm=${albumNumber}`,
    method: "GET",
    responseType: "arraybuffer",
  });

  const content = iconv.decode(responseDetail.data, "utf8").toString();
  const $ = cheerio.load(content);
  const detailObj = {
    albumNumber,
    publisher:'',
    agency:'',
  };

  $("#body-content > div.album-detail-infos > div.info-zone > ul").each(
    (index, element) => {
       detailObj.publisher = $(element)
        .find("li:nth-child(3) > span.value")
        .text();
      detailObj.agency = $(element).find("li:nth-child(4) > span.value").text();
      
    });
  return detailObj;
  
}


// detailDataScrap(80282407).then(console.log);
