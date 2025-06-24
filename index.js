const axios = require('axios');

axios.get('https://api.github.com').then(res => {
  console.log('Status:', res.status);
}).catch(err => {
  console.error('Error:', err.message);
});

