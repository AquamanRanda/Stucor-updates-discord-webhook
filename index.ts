import getdata from "./utils/getdata";
const Discord = require("discord.js");
require("dotenv").config();

let first = "";

async function data() {
  const data = await getdata();
  first = data[0].title;
}
data();
setInterval(async function () {
  const data = await getdata();
  if (data[0].title !== first) {
    const webhook = new Discord.WebhookClient(
      process.env.id,
      process.env.token
    );
    webhook
      .send(`\n Title: ${data[0].title} \n Link: ${data[0].links} \n `)
      .catch(console.error);
    first = data[0].title;
  } else {
    console.log("no change");
  }
}, 1800000);
