import kick from './discord/kick';
import mute from './discord/mute';
import setup from './user/setup';
import purgatory from './discord/purgatory';


const cmds = {
   discord:{kick, mute, purgatory},
    user:{setup}
};

export default cmds;