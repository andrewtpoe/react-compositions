import { compact, isNaN } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { sizes, withSize } from 'reactive-container';
import { Column, Container, Row } from 'styled-components-reactive-grid';


import ControlButton from './ControlButton';
import FullHeightRow from './FullHeightRow';
import Slide from './Slide';

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

  if (newSlideIndex + 1 === slides.length) {
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
    size: PropTypes.oneOf([XS, SM, MD]).isRequired,
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

  handleNextClick = () => {
    window.scrollTo(0, 0);
    this.setState(next);
  }

  handlePreviousClick = () => {
    window.scrollTo(0, 0);
    this.setState(previous);
  }

  keypressEventHandler = e => {
    if (e.key === 'ArrowLeft') {
      this.setState(previous);
    }
    if (e.key === 'ArrowRight') {
      this.setState(next);
    }
  };

  slides = () => {
    return this.props.slides.map((CurrentSlide, index) => {
      const { slideIndex } = this.state;
      let modifier;
      if (index < slideIndex) {
        modifier = 'left';
      } else if (index > slideIndex) {
        modifier = 'right';
      }
      return (
        <Slide key={index} modifiers={compact([modifier])}>
          <CurrentSlide />
        </Slide>
      )
    })
  }

  render() {
    return (
      <FullHeightRow modifiers={['middle']}>
        <Column
          modifiers={['center']}
          responsiveModifiers={{
            [XS]: ['col_1'],
            [SM]: ['col_2'],
            [MD]: ['col_3'],
          }}
        >
          <Column
            responsiveModifiers={{
              [XS]: ['noDisplay'],
            }}
          >
            <ControlButton
              onClick={this.handlePreviousClick}
              type="previous"
            />
          </Column>
        </Column>
        <Column
          responsiveModifiers={{
            [XS]: ['col_10'],
            [SM]: ['col_8'],
            [MD]: ['col_6'],
          }}
        >
          <Container>
            <Row modifiers={['middle']}>
              {this.slides()}
            </Row>
            <Row>
              <Column modifiers={['col']}>
                <Column
                  responsiveModifiers={{
                    [SM]: ['noDisplay'],
                    [MD]: ['noDisplay'],
                  }}
                >
                  <ControlButton
                    onClick={this.handlePreviousClick}
                    type="previous"
                  />
                </Column>
              </Column>
              <Column modifiers={['col', 'end']}>
                <Column
                  responsiveModifiers={{
                    [SM]: ['noDisplay'],
                    [MD]: ['noDisplay'],
                  }}
                >
                  <ControlButton
                    onClick={this.handleNextClick}
                    type="next"
                  />
                </Column>
              </Column>
            </Row>
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
          <Column
            responsiveModifiers={{
              [XS]: ['noDisplay'],
            }}
          >
            <ControlButton
              onClick={this.handleNextClick}
              type="next"
            />
          </Column>
        </Column>
      </FullHeightRow>
    );
  }
}

export default withSize(Projector);
