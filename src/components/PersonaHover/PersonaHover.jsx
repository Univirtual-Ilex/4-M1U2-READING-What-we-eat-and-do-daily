//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PersonaHover_styles'
// components
import Tooltip from '../Tooltip'
import { useState } from 'react'


// Componente base
const PersonaHover_base = ({profession, tooltip, ...props}) => {
    const [visible, mostrarTooltip] = useState(false)

    return (
        <div {...props}>
                <div className={'person ' + profession } onClick={() => mostrarTooltip(!visible)}>
                </div>
                <div className='recorder'>
                 
                </div>
        </div>
    )
}
const PersonaHover = styled(PersonaHover_base)`${ styles }`
export default PersonaHover
