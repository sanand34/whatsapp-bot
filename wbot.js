const wbm = require("wbm/src/index");
const axios = require("axios/index");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Which news you want to hear: \n", (newstopic) => {
  async function fetchData() {
    const request = await axios.get(
      `https://api.currentsapi.services/v1/search?keywords=${newstopic}&language=en&&apiKey=96HVoSyCI_4qH_GCA9h70BOBpf932PmwEfJuv_gmIIt_lHws`
    );
    news = request.data.news;
  }

  fetchData();

  wbm
    .start()
    .then(async () => {
      const phones = ["Phonenumber"];
      const random = Math.floor(Math.random() * 3);
      const message = [news[random].title, news[random].description];

      await wbm.send(phones, message);

      await wbm.end();
    })
    .catch((err) => console.log(err));
