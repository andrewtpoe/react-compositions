import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { withSize } from 'reactive-container';
import {
  applyResponsiveStyleModifiers,
  applyStyleModifiers,
  responsiveStyleModifierPropTypes,
  styleModifierPropTypes,
} from 'styled-components-modifiers';
import {
  buildThemePropTypes,
  validateTheme,
} from 'styled-components-theme-validator';

/**
 * Applies the theme to styled component as a defaultProp in test env only.
 * @param  {Component} WrappedComponent A component to wrap with the test theme
 * @return {Component}                 The wrapped component with the expected defaultProps
 */
export const withTestTheme = (WrappedComponent) => {
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line global-require
    const defaultTheme = require('../style/theme.js').default;

    // eslint-disable-next-line no-param-reassign
    WrappedComponent.defaultProps = {
      ...WrappedComponent.defaultProps,
      theme: defaultTheme,
    };
  }

  return WrappedComponent;
};

export function buildStyledComponent(
  displayName,
  builderFn,
  styles,
  {
    defaultProps = {},
    modifierConfig = {},
    propTypes = {},
    responsive = false,
    themePropTypes = {},
  } = {},
) {
  const validationPropTypes = buildThemePropTypes(themePropTypes);

  const component = builderFn`
    ${validateTheme(displayName, validationPropTypes)}
    ${styles}
    ${applyStyleModifiers(modifierConfig)}
    ${responsive && applyResponsiveStyleModifiers(modifierConfig)}
  `;

  const finalPropTypes = { ...propTypes };

  if (!isEmpty(modifierConfig)) {
    finalPropTypes.modifiers = styleModifierPropTypes(modifierConfig);
  }

  if (responsive) {
    finalPropTypes.responsiveModifiers = responsiveStyleModifierPropTypes(modifierConfig);
    finalPropTypes.size = PropTypes.string.isRequired;
  }

  component.defaultProps = {
    ...defaultProps,
    className: `${displayName}${defaultProps.className ? ` ${defaultProps.className}` : ''}`,
  };

  component.displayName = displayName;

  component.propTypes = finalPropTypes;

  if (responsive) {
    return withTestTheme(withSize(component));
  }

  return withTestTheme(component);
}

export default buildStyledComponent;
