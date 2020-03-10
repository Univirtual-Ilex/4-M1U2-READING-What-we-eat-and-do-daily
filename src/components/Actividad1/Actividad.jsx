import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'
import ButtonAudio from '../ButtonAudio'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import data from './Actividad_data'
import img from './Actividad_img'









const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={63}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the images to listen, drag and drop the corresponding word to each image' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    DRAG AND DROP THE CORRESPONDING WORD TO EACH IMAGE
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow>
                <ICol w={25} py={3}>
                    <IRow justify='center' align='center' w={100} gutters={0.5} className="food">
                        { data.map((item, index) => {
                            return(
        
                                    <div className="container" key={index}>{item.food}</div>  
                                  
                            ) 
                        }) }

                    </IRow>
                </ICol>
                <ICol w={75}>
                    <IRow justify='center' valign="flex-start" align='center' w={100} gutters={0.5} className="box">
                    { img.map((item, index) => {
                        return(
                        <div key={index}>
                            <ButtonAudio  srcImg={item.img} src={item.audio}></ButtonAudio>  
                            <div className="drag"></div>
                        </div>             
                        ) 
                    }) }

                </IRow>
                </ICol>
                <IRow >
                    <ButtonCheck className="check"></ButtonCheck>
                </IRow>
            </IRow>
            

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad