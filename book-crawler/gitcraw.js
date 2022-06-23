const axios = require("axios");
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
const ogDate = {
  title: null,
  description: null,
  imageUrl: null,
};

async function ogdataScrap(url) {
  try {
    const response = await axios({
      url: url,
      method: "GET",
      responseType: "arraybuffer",
    });
     console.log(response.status);
  } catch (error) {
  }
}

ogdataScrap("https://github.com/WON-JIN-LEE/fhufehuifew");
