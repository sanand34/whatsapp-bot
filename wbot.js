const wbm = require('wbm/src/index');
const axios = require('axios/index');
var news='Hello';

async function fetchData() {
    const request = await axios.get(`https://api.currentsapi.services/v1/search?keywords=India&language=en&&apiKey=96HVoSyCI_4qH_GCA9h70BOBpf932PmwEfJuv_gmIIt_lHws`);
    news=request.data.news;
  }

fetchData();

wbm.start().then(async () => {
    const phones = ['PHONENUMBERS'];
    const random=Math.floor(Math.random() * 3);
    const message = [news[random].title,news[random].description];
    
        await wbm.send(phones, message);

    await wbm.end();
}).catch(err => console.log(err));

