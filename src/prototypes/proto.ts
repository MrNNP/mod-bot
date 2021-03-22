import { Message } from "discord.js";

const botName = `lol idk`
namespace ModBot{



    export namespace Interact {
        export namespace staticMessages{
           export const onlyYandN = '**ONLY REPLY WITH A Y OR N UNLESS OTHER OPTIONS ARE PROVIDED**'
           export const setupQuestions:Array<string> = [
               'Do you want to use progressive punishments?',
               'What kind of punishments do you want to use?',
               'What task do you want in purgatory?',

            ]
           export function setupStartMsg(guildName:string,userName:string,highestRole:string){
               return `Setting up ${botName} for ${guildName} by ${userName} with highest role of ${highestRole}.`
           }
        }
        export function askDiscUser(msg:Message){
            const filter = m => m.member.id == msg.member.id;
            return msg.channel.awaitMessages(filter,{max:1,time:60000,errors:['time']});
            
        }
        
        export async function questionDiscUser(question:string,msg:Message):Promise<Message>{
            return new Promise<Message>(async(resolve, reject) => {
                try {
                    await msg.channel.send(question)
                    let msgs = await askDiscUser(msg);
                    resolve(msgs.first());
                    
                } catch (error) {
                    reject(error);
                }
                
            })
        }
        export function askDiscUserwOptions(question:string,msg:Message,options:Array<string>):Promise<string> {
            return new Promise<string>(async(resolve, reject) => {
              let res = await questionDiscUser(question,msg);
              if(options.indexOf(res.content.toLowerCase()) == -1){
                  resolve(await askDiscUserwOptions(question,msg,options));
                    //TODO: test it now
                }else{
                   resolve(res.content.toLowerCase())
                   return; 
                }

            })
        }
     
    }
    
    export namespace Moderation{
        export namespace blanketMod{
            export interface Return {
                flagged:boolean,
                message:Message,
                messageAfter?:Message,
                deleted:boolean,
                algo:'noGhostPing'|'noMassPing'
            };
            export interface AlgoExport{
                check:Function,
                event:string 
             }
        }
        
        export interface ActionReturn{
        error?:boolean|string,
        success:boolean,
        extraInfo?:Punishments.options.puratoryOptions|Punishments.options.muteOptions
        }
    
    }
    
    export namespace Punishments{
        
        export namespace options{
            export interface basicOptions{
                userId:string,
                guildId:string,
                sucess:boolean
            }
            export interface puratoryOptions extends basicOptions{
                punishment:purgatoryPunishment,
                strength:number
            }
            export interface muteOptions extends basicOptions{
                length?:number,
                roleId:string
                unmutePromise?:Promise<any>
            }
        }
        export enum punishmentTypes {
            purgatory = 0,
            mute = 1,
            kick = 2
    
        }
        export enum purgatoryPunishment{
            math=0, messages=1
        }
        export interface pOptions{
            type:punishmentTypes,
            currentPunishments:Array<options.muteOptions|options.puratoryOptions|options.basicOptions>
            purgatoryType?:purgatoryPunishment
        }
    }
    
    export namespace DbObjs{
        export interface guildObj{
            id:string,
            users:Array<userObj>,
            pOptions:Punishments.pOptions,
            strikes:boolean
        
        }
    
        export interface userObj{
            id:string,
            strikes:number
        }
    }

}
export default ModBot;