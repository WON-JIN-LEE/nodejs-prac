const axios = require("axios");
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
async function ogdataScrap(url) {
  try {
    const response = await axios({
      url: "https://vibe.naver.com/chart/total",
      method: "GET",
      responseType: "arraybuffer",
    });


    const content = iconv.decode(response.data, "utf8").toString();

    const $ = cheerio.load(content);


    $("#content > div.track_section > div:nth-child(2) > div > table").each(
      (index, element) => {
        console.log($(element));

        const ranking = $(element).find("tr:nth-child(1) > td.rank > span").text();
 

        
      
        console.log(ranking);
        console.log("✅✅✅✅✅✅✅");
      

      }
    );
  } catch (error) {}
}

ogdataScrap();




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


// detailDataScrap(10937474).then(console.log);
