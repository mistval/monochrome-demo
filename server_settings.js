const { SettingsConverters, SettingsValidators } = require('monochrome-bot');

module.exports = [
  {
    userFacingName: 'Fun', // This is the name of the category. The user will see it if they use the settings command.
    children: // The children can be other categories, or they can be settings, or a mixture thereof.
    [
      {
        userFacingName: 'Countdown start',
        description: 'This setting controls what number I\'ll count down from when you use the bot!countdown command.',
        allowedValuesDescription: 'A number between 1 and 20 (in seconds)',
        uniqueId: 'fun/countdown_start',
        defaultUserFacingValue: '16', // The default user facing value should be a string (even if the internal value is a number or something else)
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat, // Provide a function to convert the user facing value to an internal value that you want to use in your bot code. The function can be async.
        convertInternalValueToUserFacingValue: SettingsConverters.toString, // Provide a function to convert the internal value to a userFacingValue to display to the user. The function can be async.
        validateInternalValue: SettingsValidators.createRangeValidator(1, 20), // Provide a function that takes an internal setting value and returns true for valid, or false for invalid. The function can be async.
      },
    ]
  }
];
