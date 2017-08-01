import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

function configureGlobalStyles({
  globalStyles: { buildGlobalStyleString },
  ...rest
}) {
  const globalStyles = buildGlobalStyleString(rest);

  // `injectGlobal` must be called separately for normalize(). Interpolating into `globalStyles`
  // breaks functionality and renders the string `[object Object]` in the styles.
  injectGlobal([normalize()])
  injectGlobal([globalStyles]);

  return true;
}

export default configureGlobalStyles;
