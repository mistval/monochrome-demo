'use strict'
module.exports = {
  commandAliases: ['ping', 'p'],
  canBeChannelRestricted: true,
  uniqueId: 'ping',
  serverAdminOnly: false,
  shortDescription: 'You say <prefix>ping, I say pong.',
  action(bot, msg, suffix) {
    return msg.channel.createMessage('Pong!', null, msg);
  },
};
