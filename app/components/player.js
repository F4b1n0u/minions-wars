import React from 'react'
import styled from 'styled-components/native'

import Creature from '@components/creature'

export default class PlayerComponent extends React.Component {
  render() {
    const {
      master,
      minions,
      position,
      ...rest,
    } = this.props

    const isPlayer1 = (position === 0) ? true : false;

    return (
      <Wrapper>
        <Master
          {...master}
          {...rest}
        />
        {
          minions.map((minion, index) => {
            const left = (isPlayer1) ? (index * 30 + 10) : undefined;
            const right = (!isPlayer1) ? ((minions.length - index) * 30 + 10) : undefined;

            return (
              <Minion
                type={minion.type}
                key={index}
                left={left}
                right={right}
                {...minion}
              />
            )
          })
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
  height: ${props => props.health * 10 + 20};
  width: ${props => (props.health * 10 + 20) * 0.76};
  bottom: 26;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`;

const Master = Creature.extend`
  position:absolute;
  height: ${props => props.health * 10 + 20};
  width: ${props => (props.health * 10 + 20) * 0.76};
  bottom: 26;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`
