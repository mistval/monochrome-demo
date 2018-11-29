module.exports = {
  commandAliases: ['ping', 'p'],
  uniqueId: 'ping',
  cooldown: 5,
  shortDescription: 'You say <prefix>ping, I say pong.',
  longDescription: 'This command is really useless and has no need for a long description but ¯\\_(ツ)_/¯',
  usageExample: '<prefix>ping',
  botAdminOnly: false,
  canBeChannelRestricted: true,
  requiredSetting: ['unique_id_of_some_setting'],
  aliasesForHelp: ['ping'],
  action(bot, msg) {
    return msg.channel.createMessage('Pong!', null, msg);
  },
};
