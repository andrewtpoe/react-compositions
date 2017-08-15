import PropTypes from 'prop-types';
import React from 'react';

import Button from 'blocks/Button';
import Icon from 'blocks/Icon';

function getIconName(type) {
  const typeMap = {
    next: 'arrow-right',
    previous: 'arrow-left',
  };

  return typeMap[type];
}

function ControlButton({ onClick, type }) {
  return (
    <Button modifiers={['ghost', 'xl']} onClick={() => onClick()}>
      <Icon modifiers={['xlFontSize']} name={getIconName(type)} />
    </Button>
  );
}

ControlButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['next', 'previous']).isRequired,
};

export default ControlButton;
