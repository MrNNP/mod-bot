import { Message, MessageEmbed } from "discord.js";

const botName = `lol idk`
namespace ModBot{



    export namespace Interact {
        export namespace staticMessages{
           export const onlyYandN = '**ONLY REPLY WITH A Y OR N UNLESS OTHER OPTIONS ARE PROVIDED**'
           export const setupQuestions:Array<MessageEmbed> = [
               new MessageEmbed().setTitle('Do you want to use progressive punishments?'),
               new MessageEmbed().setTitle('What kind of punishments do you want to use?'),
               new MessageEmbed().setTitle('What task do you want in purgatory?'),

            ]
           export function setupStartMsg(guildName:string,userName:string,highestRole:string){
               return `Setting up ${botName} for ${guildName} by ${userName} with highest role of ${highestRole}.`
           }
        }
        export function askDiscUser(msg:Message){
            const filter = m => m.member.id == msg.member.id;
            return msg.channel.awaitMessages(filter,{max:1,time:6000,errors:['time']});
            
        }
        export function discordEmbed(title:string):MessageEmbed{
            let res = new MessageEmbed;
            res.setTitle(title);
            return res;
        }
        export async function questionDiscUser(question:MessageEmbed,msg:Message):Promise<Message>{
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
        export function askDiscUserwOptions(question:MessageEmbed,msg:Message,options:Array<Array<string>>,again?:boolean):Promise<string> {
            return new Promise<string>(async(resolve, reject) => {
                try {
                
                if(!again){
                question.addField('Your options are:',`there are ${options.length} options, answer with one of them`);
                question.setTimestamp();
                    options.forEach(option=>{    question.addField(option[0],option[1],true) })

                }
              let res = await questionDiscUser(question,msg);
              if(options.findIndex(index => res.content.toLowerCase() == index[0]) == -1){
                      
                      resolve(await askDiscUserwOptions(question,msg,options,true));
                }else{
                   resolve(res.content.toLowerCase())
                   return; 
                }
            } catch (error) {
                try {
                    reject();
                } catch (erroror) {
                    console.log(error+'\n\n\n\n\n\n and \n\n\n'+erroror);
                    reject();   
                }
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