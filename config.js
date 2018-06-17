module.exports = {
  botToken: '',
  botAdminIds: [''],
  prefixes: ['!'],
  discordBotsDotOrgAPIKey: '', // If you have an API key from discordbots.org, insert it here and stats will be periodically sent.
  botsDotDiscordDotPwAPIKey: '', // If you have an API key from bots.discord.pw, insert it here and stats will be periodically sent.
  logsDirectory: './logs', // The directory to write logs to (can be an empty string). Logs are also written to the console.
  useANSIColorsInLogFiles: true,  // Whether ANSI color codes should be used in the log file or not. If you're going to be cat'ing log files in a console, you probably want this to be true. If you're going to be opening logs in notepad, you may want to set this to false.
  serverAdminRoleName: 'monochrome', // Users with a role with this name will be considered server admins able to run server admin commands.
  genericErrorMessage: 'Oh no, that command had an error! Please tell my owner to check the logs!', // If a command errors and that error escapes into core code, this message will be sent to the channel. If you don't want a generic error message, this can be an empty string.
  genericDMReply: 'Hi <user>, say <prefix>help to see my commands!', // The bot will reply with this when DM'd, if the DM doesn't contain a command. <user> is replaced with the user's name.
  genericMentionReply: 'Hi <@user>, say <prefix>help to see my commands!', // The bot will reply like this when mentioned. <@user> mentions the user.
  missingPermissionsErrorMessage: 'I don\'t have permission to reply to that command in this channel (maybe I don\'t have permission to upload files, embed links, etc)', // If the bot cannot create a message due to missing permissions, and that error escapes into core code (which it generally should, more on that under Best Practices) then this message will be sent to the channel.
  statusRotation: [ // An array of statuses to rotate through.
    'bot!help for commands!',
    'eating chicken',
    'buying games on steam'
  ],
  statusRotationIntervalInSeconds: 600, // How often to change status.
};
