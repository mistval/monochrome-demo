'use strict'
module.exports = {
  commandAliases: ['bot!ping', 'bot!p'],
  canBeChannelRestricted: true,
  uniqueId: 'ping',
  serverAdminOnly: false,
  shortDescription: 'You say bot!ping, I say pong.',
  action(bot, msg, suffix) {
    return msg.channel.createMessage('Pong!', null, msg);
  },
};
