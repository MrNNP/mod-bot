import { Message } from "discord.js";
import { moderationAlgoExport } from "../prototypes/proto";
import noMassPing from './algos/noMassPing';
let algos:Array<moderationAlgoExport> = [];
algos.push(noMassPing);

const checkBlanketMod = (msg:Message,pingLimit:number)=>{
    return algos.map(algo=>algo.check(msg,pingLimit));
}

export default checkBlanketMod;