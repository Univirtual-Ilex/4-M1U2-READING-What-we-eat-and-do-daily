import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {margin, padding } from '../Grid/Grid_styles'
// import Ilex from '../../App/variables'
const styles = css`
button{ 
    cursor:pointer;
}
img{
    width: 100%;
 
    margin-top: 3em;
}
`
export const buttonAudio2 = css`

button{

}
button.running{
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
}

`

export default styles
    