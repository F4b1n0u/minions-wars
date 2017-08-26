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
      <Master
       {...master}
       {...rest}
      />
    )
  }
}

const Master = CreatureComponent.extend`
  position:absolute;
  height: 115;
  width: 87;
  top: 175;
  ${props => (props.left) ? `left: ${props.left};` : ''}
  ${props => (props.right) ? `right: ${props.right};` : ''}
`
