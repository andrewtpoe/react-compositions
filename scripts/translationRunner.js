const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/translations/extracted-messages',
  translationsDirectory: 'src/translations/',
  languages: ['en'],
});
