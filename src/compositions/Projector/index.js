import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { sizes } from 'reactive-container';
import {
  Column,
  ReactiveContainer,
} from 'styled-components-reactive-grid';

import Button from 'blocks/Button';
import FullHeightRow from 'blocks/FullHeightRow';
import Icon from 'blocks/Icon';

import { breakpoints } from './constants';

const { XS, SM, MD } = sizes;

function next({ slideIndex }, { slides }) {
  const newSlideIndex = (slides.length - 2) >= slideIndex ? slideIndex + 1 : slideIndex;
  return {
    slideIndex: newSlideIndex,
  }
}

function previous({ slideIndex }, { slides }) {
  const newSlideIndex = slideIndex === 0 ? 0 : slideIndex - 1;
  return {
    slideIndex: newSlideIndex,
  }
}

class Projector extends Component {
  static propTypes = {
    slides: PropTypes.array,
  }

  static defaultProps = {
    slides: []
  }

  state = {
    slideIndex: 0,
  }

  componentDidMount() {
    window.addEventListener(
      'keydown',
      this.keypressEventHandler,
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.keypressEventHandler,
    );
  }

  keypressEventHandler = (e) => {
    if (e.key === "ArrowLeft") {
      this.setState(previous);
    }
    if (e.key === "ArrowRight") {
      this.setState(next);
    }
  }

  currentSlide() {
    const CurrentSlide = this.props.slides[this.state.slideIndex];
    return <CurrentSlide />;
  }

  render() {
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
              modifiers={['ghost', 'xl']}
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
            <ReactiveContainer breakpoints={breakpoints}>
              <FullHeightRow modifiers={['middle']}>
                {this.currentSlide()}
              </FullHeightRow>
            </ReactiveContainer>
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
              modifiers={['ghost', 'xl']}
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
