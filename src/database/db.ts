import fs from 'fs';

let db = require('./db.json');

setInterval(async()=>{

 fs.writeFileSync('./db.json',JSON.stringify(db));

},10000);

export default db;

