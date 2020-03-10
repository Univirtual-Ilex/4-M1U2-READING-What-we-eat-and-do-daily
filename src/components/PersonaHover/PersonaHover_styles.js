import { css } from 'styled-components'
// import Ilex from '../../App/variables'

const area = 100
const cols = 4 // Celdas horizontales son 10 items
const rows = 5 // Celdas verticales son 2 filas
const spriteX = area * cols
const styles = css`
width:${area}px;
height:${area}px;
margin:0.6em 0;
position: relative;

.person{
    width:${area}px;
    height:${area}px;
    margin:0.2em 0;
    background-image: url(./src/sprite.png);
    background-size: ${ area * cols}px ${ area * rows}px;
    background-position: 0 0;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;
    &.hairdresser{
        background-position-x: 0;
        
    }
    &.musician{
        background-position-x:-${spriteX * 0.1}px;
       
    }
    &.cook{
        background-position-x:-${spriteX * 0.2}px;
      
    }
    &.fireman{
        background-position-x: -${spriteX * 0.3}px;
        
    }
    &.teacher{
        background-position-x: -${spriteX * 0.4}px;
       
    }
    &.businessman{
        background-position-x: -${spriteX * 0.5}px;
        
    }
    &.waitress{
        background-position-x: -${spriteX * 0.6}px;
      
    }
    &.repairman{
        background-position-x: -${spriteX * 0.7}px;
      
    }
    &.doctor{
        background-position-x: -${spriteX * 0.8}px;
       
    }
    &.police-office{
        background-position-x: -${spriteX * 0.9}px;
       
    }
}

.recorder {
    position: relative;
    z-index:4;
    display: flex;
    justify-content:center;
    align-items:flex-start;


    button {
        width:2em;
        height:2em;
        display: inline-block;
        cursor:pointer;
        position: relative;
        top:-1em;
        margin: 0 0.3em;
    }
}
`

export default styles
    