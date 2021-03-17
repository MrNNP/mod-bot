import { Message } from "discord.js";
import noMassPing from './algos/noMassPing';
let algos:Array<Function> = [];
algos.push(noMassPing);

const checkBlanketMod = (msg:Message,pingLimit:number)=>{
    return algos.map(algo=>algo(msg,pingLimit));
}

export default checkBlanketMod;