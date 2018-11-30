const { erisVersion } = require('monochrome-bot');
const monochromeVersion = require('monochrome-bot/package.json').version;

module.exports = {
  commandAliases: ['about'],
  uniqueId: 'about53463',
  cooldown: 30,
  shortDescription: 'Show some meta information about me.',
  canBeChannelRestricted: false,
  action(erisBot, msg) {
    return msg.channel.createMessage(`\`\`\`md
# Monochrome

[ CREATOR ](You)
[ LIBRARY ](Eris v${erisVersion})
[ FRAMEWORK ](Monochrome v${monochromeVersion})

Information about this bot.

\`\`\``, null, msg);
  },
};
