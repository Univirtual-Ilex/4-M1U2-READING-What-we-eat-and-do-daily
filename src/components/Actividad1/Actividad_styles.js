import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`

.label{
    font-weight:bold;
    margin-right:1em;
}
.to{
    margin-top:3.5em;
    .mail{
        color: ${Ilex.violeta2};
        font-weight:medium;
    }
}
.container{
    width: 8.5em;
    height: 2.5em;
    background: ${Ilex.violeta2};
    color: #FFF;
    font-family: ${Ilex.font};
    padding: 0.8em;
    font-size: 10px;
    margin-bottom: 0.8em;
    text-align: center;
    border-radius: 0.4em;
    font-weight: bold;
    box-shadow: 0 0.4em 0 0 rgba(0, 0, 0, 0.2);

}
.food{
    margin-top:0em;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    position:relative;
}
.box{
   width:100%;
   height: auto;
   display: flex;
   flex-wrap: wrap;
   margin-top: 1.5em;
  

}
.drag{
    background: #DDD;
    border-radius: 0.3em;
    height: 1.8em;
    width: 7.8em;
    margin-left: 0.1em;
    margin-top: -0.5em;
    

}
.items{
    margin: 1 auto;
    display: flex;
    flex-wrap: wrap;
    
}
.check{
    margin-top: 4em;
    margin-left: 68.8em;
}
`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}