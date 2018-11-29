
const PublicError = require('monochrome-bot').PublicError;

/**
* Evaluate arbitrary javascript code and return the result. Syntax: }eval [javascript code]
*/
module.exports = {
  commandAliases: ['eval'],
  botAdminOnly: true,
  shortDescription: 'Evaluate arbitrary javascript code (use wisely).',
  usageExample: '<prefix>eval 4+5',
  uniqueId: 'eval',
  action(bot, msg, suffix) {
    if (!suffix) {
      throw PublicError.createWithCustomPublicMessage('Say \'}eval [javascript code]\' to evaluate code.', false, 'No argument');
    }
    const result = eval(suffix);
    const text = JSON.stringify(result, null, 2);
    return msg.channel.createMessage(`\`\`\`js\n${text}\n\`\`\``);
  },
};
