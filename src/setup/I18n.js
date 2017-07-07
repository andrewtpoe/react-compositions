import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import enTranslations from 'translations/en.json';

addLocaleData([...en]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Build the object containing all of the translations
const translations = {
  en: enTranslations,
};

// Try full locale, try locale without region code, fallback to 'en'
const defaultMessages =
  translations[language] ||
  translations[languageWithoutRegionCode] ||
  translations.en;

function I18n({ locale, messages, children }) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}

I18n.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.node.isRequired,
};

I18n.defaultProps = {
  locale: language,
  messages: defaultMessages,
};

export default I18n;
