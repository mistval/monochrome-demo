const monochrome = require('monochrome-bot');

const commandsDirectoryPath = __dirname + '/commands';
const messageProcessorsDirectoryPath = __dirname + '/message_processors';
const settingsFilePath = __dirname + '/server_settings.js';
const logsDirectoryPath = __dirname + '/logs';

let bot = new monochrome({
  botToken: '', // (required) YOUR BOT TOKEN HERE. Recommend keeping it in a config file and gitignoring it.
  botAdminIds: [''], // (optional) Discord user IDs for bot admins. They will be able to run admin-only commands like eval.
  prefixes: ['!'], // (optional) A list of default prefixes for your bot.
  commandsDirectoryPath: commandsDirectoryPath, // (optional) The path to a directory where you will keep your command files
  messageProcessorsDirectoryPath: messageProcessorsDirectoryPath, // (optional) The path to a directory where you will keep your message processor files
  logsDirectoryPath: logsDirectoryPath, // (optional) The directory to write logs to (can be an empty string). Logs are also written to the console.
  settingsFilePath: settingsFilePath, // (optional) A path to .js file where you define the settings
  discordBotsDotOrgAPIKey: '', // (optional) If you have an API key from discordbots.org, insert it here and stats will be periodically sent.
  botsDotDiscordDotPwAPIKey: '', // (optional) If you have an API key from bots.discord.pw, insert it here and stats will be periodically sent.
  useANSIColorsInLogFiles: true,  // (optional) Whether ANSI color codes should be used in the log file or not. If you're going to be cat'ing log files in a console, you probably want this to be true. If you're going to be opening logs in notepad, you may want to set this to false.
  genericErrorMessage: 'Oh no, that command had an error! Please tell my owner to check the logs!', // (optional) If a command errors and that error escapes into core code, this message will be sent to the channel.
  genericDMReply: 'Hi <user>, say <prefix>help to see my commands!', // (optional) The bot will reply with this when DM'd, if the DM doesn't contain a command. <user> is replaced with the user's name.
  genericMentionReply: 'Hi <@user>, say <prefix>help to see my commands!', // (optional) The bot will reply like this when mentioned. <@user> mentions the user.
  missingPermissionsErrorMessage: 'I don\'t have permission to reply to that command', // (optional) If the bot cannot create a message due to missing permissions, and that error escapes into core code (which it generally should, more on that under Best Practices) then this message will be sent to the channel.
  inviteLinkDmReply: 'You can invite me to your server with this link! http://xxxxxxxx.com', // (optional) If a user DMs the bot an invite link to a server, the bot will respond with this. (Sometimes users DM bots server invite links to try to get them to join a server)
  statusRotation: [ // (optional) An array of statuses to rotate through.
    '@ me for help!',
    'eating chicken',
    'buying games on steam'
  ],
  statusRotationIntervalInSeconds: 600, // (optional) How often to change status.
  erisOptions: undefined, // (optional) Arguments to pass to the Eris Client constructor. See https://abal.moe/Eris/docs/Client
});

bot.connect();
