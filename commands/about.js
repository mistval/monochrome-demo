
const libVersion = require('../node_modules/eris/package.json').version;

module.exports = {
  commandAliases: ['about'],
  uniqueId: 'about',
  cooldown: 5,
  shortDescription: 'Show some meta information about me.',
  action(bot, msg) {
    return msg.channel.createMessage(`\`\`\`md
# monochrome

[ CREATOR ](You)
[ LIBRARY ](Eris v${libVersion})\`\`\``);
  },
};
