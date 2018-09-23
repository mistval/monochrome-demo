/**
* Demonstrates processing arbitrary messages, rather than commands.
*/
module.exports = {
  name: 'Palindrome',
  action(bot, msg, monochrome) {
    const text = msg.content;
    if (!text || text.length < 2) {
      return false; // Since we are not interested in handling this message, return false.
    }
    const textBackwards = text.split('').reverse().join('');
    if (text === textBackwards) {
      return msg.channel.createMessage('That\'s a palindrome!'); // Since we are handling this message, return a promise
    } else {
      return false; // Since we are not interested in handling this message, return false.
    }
  }
};
