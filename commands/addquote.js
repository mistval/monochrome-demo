'use strict'
const PublicError = require('monochrome-bot').PublicError;

/**
* Demonstrates persisting data.
*/
module.exports = {
  commandAliases: ['addquote', 'aq'],
  canBeChannelRestricted: true,
  uniqueId: 'addquote',
  serverAdminOnly: false,
  shortDescription: 'Add a quote to my database.',
  usageExample: '<prefix>addquote I\'m not very quotable',
  action(bot, msg, suffix, monochrome) {
    if (!suffix) {
      throw PublicError.createWithCustomPublicMessage('You gotta give me a quote to add!', true, 'No argument');
    }

    const persistence = monochrome.getPersistence();
    return persistence.editGlobalData(globalData => {
      if (!globalData.quotes) {
        globalData.quotes = [];
      }
      globalData.quotes.push({user: msg.author.username, quote: suffix});
      return globalData;
    }).then(() => {
      return msg.channel.createMessage('Quote added!');
    });
  },
};
