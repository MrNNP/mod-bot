import { MessageEmbed, Message, GuildMember, TextChannel, RoleManager, GuildChannelManager, CategoryChannel } from "discord.js";

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
            return msg.channel.awaitMessages(filter,{max:1,time:60000,errors:['time']});
            
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
                success:boolean
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

        export async function createPurgChannel(msg:Message,user:GuildMember):Promise<TextChannel>{
            let parent = await getParent(msg.guild.channels);
            if(parent.children.array().length>=40){
                //@ts-expect-error
                return parent.children.first;
              }
            let chanName = `purgatory-for-${user.user.discriminator}`;
           let indexOfChannel = parent.children.array().findIndex(channel=>channel.name == chanName);
           console.log(indexOfChannel);
         
           if(indexOfChannel==-1){
               return msg.guild.channels.create(chanName,{
                    parent: parent,
                    reason:'Purgatory Channel',
                    type:'text',
                    permissionOverwrites:[
                        {
                            id:user.id,
                            allow:["VIEW_CHANNEL","SEND_MESSAGES"]
                        },
                        {
                            id:msg.guild.roles.everyone,
                         deny:["VIEW_CHANNEL","SEND_MESSAGES"]
                     }
                ]
                });
            }else{
                //@ts-expect-error
                return parent.children.array()[indexOfChannel];
            }
        }
        export function givePurgRole(msg:Message,user:GuildMember):Promise<GuildMember>{
            return new Promise<GuildMember>(async(resolve, reject) => {
            try {
                
              let roles:RoleManager =  await msg.guild.roles.fetch();
              let indexOfRole =  roles.cache.array().findIndex(role=>role.name == 'In Purgatory');
                if(indexOfRole==-1){
                   let role = await roles.create({
                        data:{
                            name:'In Purgatory',
                            color:"#36393F",
                            mentionable:false,
                            permissions:[

                            ]
                        },
                        reason:'Purgatory Role'                         
                    });
                    msg.guild.channels.cache.forEach(async (channel) => {
                        await channel.overwritePermissions([
                            {
                                id: role.id,
                                deny: [
                                    "VIEW_CHANNEL", "SEND_MESSAGES"
                                ]
                            },
                            ...channel.permissionOverwrites.array()
                        ], 'Create purgatory role');
                    })


                    resolve(await msg.member.roles.add(role));


                } else {
                    resolve(await user.roles.add(roles.cache.array()[indexOfRole]));
                }

            } catch (error) {
                reject(error.toString())
            }

            })
        }
        async function getParent(channels:GuildChannelManager):Promise<CategoryChannel>{
            let indexofParent = channels.cache.array().findIndex(channel=>channel.name == 'PURGATORY');
            if(indexofParent == -1){
                return await channels.create('PURGATORY',{type:'category'})
            }else{
                //@ts-ignore
            return channels.cache.array()[indexofParent];
            }
        }

        export function addStrike(userId:string,msg:Message):Promise<ModBot.DbObjs.userObj>{
           return new Promise<ModBot.DbObjs.userObj>(async(resolve, reject) => {
               
               let index = db.getMemberIndex(userId)
               if(index==-1){
                   let Duser = await msg.guild.members.fetch(userId);
                   db.raw.users.push({
                       id:Duser.id,
                       strikes:1
                    });
                }
            })
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
        export interface rawdb{
            
            guilds:Array<guildObj>,
            users:Array<userObj>
        }
        export interface db{
            raw:rawdb,
            getMemberIndex:(id:string)=>number,
            getGuildIndex:(id:string)=>number
        }
    }

}
export default ModBot;