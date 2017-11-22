'use strict'
const PublicError = require('monochrome-bot').PublicError;

/**
* Send a message as the bot.
* Syntax: }broadcast [channel_id] [announcement]
*/
module.exports = {
  commandAliases: ['}broadcast', '}b'],
  botAdminOnly: true,
  shortDescription: 'Send a message as me.',
  usageExample: '}broadcast [channelId] Hello!',
  action(bot, msg, suffix) {
    if (!suffix || suffix.indexOf(' ') === -1) {
      throw PublicError.createWithCustomPublicMessage('Say \'}broadcast [channel_id] [announcement]\' to broadcast a message.', false, 'Invalid syntax');
    }
    let spaceIndex = suffix.indexOf(' ');
    let channelId = suffix.substring(0, spaceIndex);
    let announcement = suffix.substring(spaceIndex + 1);
    return bot.createMessage(channelId, announcement);
  },
};