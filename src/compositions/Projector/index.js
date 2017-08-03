import { compact, isNaN } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { sizes } from 'reactive-container';
import { Column, Container, ReactiveContainer } from 'styled-components-reactive-grid';

import Button from 'blocks/Button';
import FullHeightRow from 'blocks/FullHeightRow';
import Icon from 'blocks/Icon';

import { breakpoints } from './constants';

const { XS, SM, MD } = sizes;

function saveSlideIndex(slideIndex) {
  window.memoryDB.setItem('REACT_COMPOSITIONS__slideIndex', slideIndex);
  window.memoryDB.setItem('REACT_COMPOSITIONS__slideIndexSavedAt', Date.now());
}

function savedSlideIndex() {
  const savedAt = parseInt(
    window.memoryDB.REACT_COMPOSITIONS__slideIndexSavedAt,
    10,
  );

  // uses a user's previous slideIndex for 10 minutes. Then slideIndex expires.
  if (!isNaN(savedAt) && Date.now() - 600000 < savedAt) {
    const slideIndex = parseInt(
      window.memoryDB.REACT_COMPOSITIONS__slideIndex,
      10,
    );

    return {
      slideIndex,
    };
  }
}

function next({ slideIndex }, { slides }) {
  const newSlideIndex =
    slides.length - 2 >= slideIndex ? slideIndex + 1 : slideIndex;

  if ((newSlideIndex + 1) === slides.length) {
    saveSlideIndex(0);
  } else {
    saveSlideIndex(newSlideIndex);
  }

  return {
    slideIndex: newSlideIndex,
  };
}

function previous({ slideIndex }, { slides }) {
  const newSlideIndex = slideIndex === 0 ? 0 : slideIndex - 1;

  saveSlideIndex(newSlideIndex);

  return {
    slideIndex: newSlideIndex,
  };
}

class Projector extends Component {
  static propTypes = {
    slides: PropTypes.array,
  };

  static defaultProps = {
    slides: [],
  };

  state = {
    slideIndex: 0,
  };

  componentWillMount() {
    this.setState(savedSlideIndex);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keypressEventHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keypressEventHandler);
  }

  keypressEventHandler = e => {
    if (e.key === 'ArrowLeft') {
      this.setState(previous);
    }
    if (e.key === 'ArrowRight') {
      this.setState(next);
    }
  };

  currentSlide() {
    const CurrentSlide = this.props.slides[this.state.slideIndex];
    return <CurrentSlide />;
  }

  render() {
    const previousDisabled = this.state.slideIndex === 0;
    const nextDisabled = this.props.slides.length === this.state.slideIndex + 1;

    return (
      <ReactiveContainer breakpoints={breakpoints}>
        <FullHeightRow modifiers={['middle']}>
          <Column
            modifiers={['center']}
            responsiveModifiers={{
              [XS]: ['col_1'],
              [SM]: ['col_2'],
              [MD]: ['col_3'],
            }}
          >
            <Button
              disabled={previousDisabled}
              modifiers={compact([
                previousDisabled && 'disabled',
                'ghost',
                'xl',
              ])}
              onClick={() => this.setState(previous)}
            >
              <Icon modifiers={['xlFontSize']} name="arrow-left" />
            </Button>
          </Column>
          <Column
            responsiveModifiers={{
              [XS]: ['col_10'],
              [SM]: ['col_8'],
              [MD]: ['col_6'],
            }}
          >
            <Container>
              <FullHeightRow modifiers={['middle']}>
                {this.currentSlide()}
              </FullHeightRow>
            </Container>
          </Column>
          <Column
            modifiers={['center']}
            responsiveModifiers={{
              [XS]: ['col_1'],
              [SM]: ['col_2'],
              [MD]: ['col_3'],
            }}
          >
            <Button
              disabled={nextDisabled}
              modifiers={compact([nextDisabled && 'disabled', 'ghost', 'xl'])}
              onClick={() => this.setState(next)}
            >
              <Icon modifiers={['xlFontSize']} name="arrow-right" />
            </Button>
          </Column>
        </FullHeightRow>
      </ReactiveContainer>
    );
  }
}

export default Projector;
