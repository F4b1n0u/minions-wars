import React from 'react'
import styled from 'styled-components/native'

import CreatureComponent from '@components/creature'

export default class PlayerComponent extends React.Component {
  render() {
    const {
      master,
      ...rest,
    } = this.props

    return (
      <Wrapper>
        <Master
          {...master}
          {...rest}
        />

        <Minion left={10} />
        <Minion left={40} />
        <Minion left={70} />
        <Minion left={100} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const Minion = CreatureComponent.extend`
  position:absolute;
  height: 30;
  width: 23;
  bottom: 29;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`

const Master = CreatureComponent.extend`
  position:absolute;
  height: 115;
  width: 87;
  bottom: 29;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`
