import { GuildMember, Role } from "discord.js";
import { muteOptions } from "../../prototypes/proto";

let main = async (Member:GuildMember,length:number,role?:string|Role):Promise<muteOptions>=>{
    if(typeof role == "string" ){
       return main(Member,length, await Member.guild.roles.fetch(role));
        
     }

    return new Promise<muteOptions>((resolve, reject) => {
       
        Member.roles.add(role).then(()=>{
            var resolveObject:muteOptions = {
                roleId:role.id,
                length:length,
                guildId:Member.guild.id,
                sucess:true,
                userId:Member.user.id

            }
            if(length==-1){
                resolveObject.unmutePromise = new Promise<any>((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            
                            Member.roles.remove(role);
                            resolve('success');
                        } catch (error) {
                            reject(error);
                        }
                    }, length);
                })
                
            }
            resolve(resolveObject);
        }).catch(err=>{
            var resolveObject:muteOptions = {
                roleId:role.id,
                length:length,
                guildId:Member.guild.id,
                sucess:false,
                userId:Member.user.id,
                

            }
            resolve(resolveObject)
        });
    

    });

}

export default main;