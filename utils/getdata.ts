const cheerio = require("cheerio");
const axios = require("axios");
interface Props {
  [key: string]: any;
}

export default async function getdata() {
  let data: Props = [];
  const urlResponse = await axios.get(`https://stucor.in`);
  const $ = cheerio.load(urlResponse.data);
  $(".p-url").each(function (this: any) {
    data.push({
      title: $(this).attr("title"),
      links: $(this).attr("href"),
    });
  });
  return data;
}
