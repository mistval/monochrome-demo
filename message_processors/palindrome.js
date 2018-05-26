'use strict'
/**
* Demonstrates processing arbitrary messages, rather than commands.
*/
module.exports = {
  name: 'Palindrome',
  action(bot, msg, monochrome) {
    let text = msg.content;
    if (!text || text.length < 2) {
      return false; // Since we are not interested in this message, return false.
    }
    let textBackwards = text.split('').reverse().join('');
    if (text === textBackwards) {
      msg.channel.createMessage('That\'s a palindrome!');
      return true; // Since we are handling this message, return true.
    } else {
      return false; // Since we are not interested in this message, return false.
    }
  }
};
