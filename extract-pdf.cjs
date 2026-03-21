const pdf = require('pdf-parse/lib/pdf-parse.js');
const fs = require('fs');

const buf = fs.readFileSync('public/ouR CLIENTS PDF.pdf');
pdf(buf).then(data => {
  console.log('=== PDF TEXT ===');
  console.log(data.text);
  console.log('=== NUM PAGES:', data.numpages);
}).catch(err => {
  console.error('Error:', err.message);
});
