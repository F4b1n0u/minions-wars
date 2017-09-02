import React from 'react'
import styled from 'styled-components/native'

import Creature from '@components/creature'

export default class PlayerComponent extends React.Component {
  render() {
    const {
      master,
      minions,
      ...rest,
    } = this.props

    return (
      <Wrapper>
        <Master
          {...master}
          {...rest}
        />
        {
          minions.map((minion, index) => (
            <Minion
              type={minion.type}
              key={index}
              left={index * 30 + 10 } 
            />
          ))
        }
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

const Minion = Creature.extend`
  position:absolute;
  height: 30;
  width: 23;
  bottom: 26;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`;

const Master = Creature.extend`
  position:absolute;
  height: 115;
  width: 87;
  bottom: 26;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`
