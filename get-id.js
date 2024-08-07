const zone = '50cc9d3a469632368431c7acf755d038' // dns zone api key
const mail = 'duonghuu045@gmail.com' // your mail
const api_key = 'd7-mb8MUBl-X-oGb0RA4qaxO79-Hf5RmalbluWqS' // api key 

/* code get record api */
const axios = require('axios');
const url = `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/`;
const headers = {
    'X-Auth-Email': mail,
    'Authorization': `Bearer ${api_key}`,
    'Content-Type': 'application/json'
};

axios.get(url, { headers })
    .then(response => {
        const results = response.data.result;
        results.forEach(record => {
            console.log('your record ID:', record.id);
            id = record.id
        });
    })
    .catch(error => {
        console.error(error);
    });