import * as fs from 'fs';
import ModBot from '../prototypes/proto';

let db = {
  raw:require('../../db.json'),
  getMemberIndex:(id:string)=>{
      return db.raw.users.findIndex(user=>user.id == id);  
  },
  getGuildIndex:(id:string)=>{
    return db.raw.guilds.findIndex(guild=>guild.id == id)
  }

};

setInterval(async()=>{

 fs.writeFileSync('./db.json',JSON.stringify(db.raw));

},10000);
  



 
global.db = db;

declare global{
  var db:ModBot.DbObjs.db
}
