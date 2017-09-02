import React from 'react'
import styled from 'styled-components/native'

const backgroundImage = require('../../assets/images/clock.png')

export default (props) => (
  <Wrapper style={props.style}>
    <ClockImage />
    <ClockText>
      3
    </ClockText>
  </Wrapper>
);

const Wrapper = styled.View`
  position: relative;
  width: 90;
  height: 45;
`

const ClockText = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  width: 45;
  height: 45;
  font-size: 24;
  color: black;
  background-color: transparent;
`

const ClockImage = styled.Image.attrs({
  source: backgroundImage,
  resizeMode: 'cover',
  height: undefined,
  width: undefined,
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 45;
  width: 45;
`
