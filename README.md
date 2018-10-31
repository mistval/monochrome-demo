# monochrome demo

This is a demo of using the [monochrome Discord bot core](https://www.npmjs.com/package/monochrome-bot). For most users, this is a good place to start, as everything is set up and all you need to do to get the bot online is add your bot token to the config. Then you can delete the commands you do not want, and add your own.

## Installation

```
git clone https://github.com/mistval/monochrome-demo.git
cd ./monochrome-demo
npm install
```

## Configuration
<ol>
<li>Create an application in <a href='https://discordapp.com/developers/applications/me'>Discord applications</a>. (or use an existing bot token)</li>
<li>In your application's settings, click "Create a Bot User" and confirm.
<li>Enter your new bot's token into monochrome-demo/bot.js's botToken field.</li>
<li>Use your application's Client ID to add your bot to your server. Substitute the Client ID into this link: https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot</li>
</ol>

## Starting the bot

```
node bot.js
```

Your bot should now appear as online in your server. Try !help to get a response, and see the demo commands.

## Building your bot

The demo version of monochrome comes with demo commands, demo message processors, demo settings, and demo configuration. While some of these are useful, such as the help command, others are not, and you will wish to delete them. As the first step in making your own bot, you should:

<ol>
<li>Delete unwanted commands from monochrome/commands. Simply delete the files for the commands you don't want.</li>
<li>Delete unwanted message processors from monochrome/message_processors. Simply delete the files for the message processors you don't want.</li>
<li>Delete monochrome/server_settings.js if you do not need to create any settings. If you do need to create your own settings, update the file with your own settings.</li>
<li>Write code for your own commands and add them to monochrome/commands.</li>
<li>Write code for your own message processors and add them to monochrome/message_processors.</li>
<li>Open bot.js and update the configuration options with your desired bot configuration.</li>
</ol>

## Help
[Support](https://discord.gg/f4Gkqku)
