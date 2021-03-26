import'./database/db';
import commands from './commands/cmds';
import blanketMod from './blanketModeration/blanketMod';
const handler = {
    commands,
    blanketMod
};
export default handler;