/**
* Demonstrates how to require a setting from the database.
* The setting is defined in ./../server_settings.json.
* Syntax: }broadcast [channel_id] [announcement]
*/
module.exports = {
  commandAliases: ['countdown'],
  botAdminOnly: false,
  uniqueId: 'countdown',
  requiredSettings: ['fun/countdown_start'],
  shortDescription: 'Start a countdown.',
  action(bot, msg, suffix, monochrome, settings) {
    const countdownStart = settings['fun/countdown_start'];
    for (let i = countdownStart; i >= 0; --i) {
      setTimeout(() => {
        msg.channel.createMessage(i.toString());
      }, (countdownStart - i) * 2000);
    }
  },
};
