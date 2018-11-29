

/**
* Demonstrates getting persisted data.
*/
module.exports = {
  commandAliases: ['getquote', 'gq'],
  canBeChannelRestricted: false,
  serverAdminOnly: false,
  uniqueId: 'getquote',
  shortDescription: 'Get a random quote from my database.',
  longDescription: 'Get a random quote from my database. I will randomly select a quote from among the quotes stored with the <prefix>addquote command.',
  action(bot, msg, suffix, monochrome, settings, extension) {
    const persistence = monochrome.getPersistence();
    return persistence.getGlobalData().then((globalData) => {
      if (!globalData.quotes) {
        return msg.channel.createMessage(`There aren't any quotes yet :( Use the ${msg.prefix}addquote command to add some.`);
      }

      let quoteIndex = Math.floor(Math.random() * globalData.quotes.length);
      if (extension === '-newest') {
        quoteIndex = globalData.quotes.length - 1;
      }

      const content = {};
      content.embed = {};
      content.embed.title = 'Random Quote';
      content.embed.description = `"${globalData.quotes[quoteIndex].quote}" - ${globalData.quotes[quoteIndex].user}`;
      return msg.channel.createMessage(content);
    });
  },
  canHandleExtension(extension) {
    return extension === '-newest';
  },
};
