import React, {useState, useRef} from 'react'
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
import Data from './Actividad_data'
import img from './Actividad_img'

import DraggableItem from '../Draggable'

import Modal from '../Generales/Modal'

const Actividad_base =  ({staticContext,...props}) => {


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    // Refs de las areas
    const area_0 = useRef()
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()
    const area_5 = useRef()
    const area_6 = useRef()
    const area_7 = useRef()
    const area_8 = useRef()
    const area_9 = useRef()
    const area_10 = useRef()
    const area_11 = useRef()
    const area_12 = useRef()
    const area_13 = useRef()
    const area_14 = useRef()
    const area_15 = useRef()
    const area_16 = useRef()
    const area_17 = useRef()
    const area_18 = useRef()
    const area_19 = useRef()
    const area_20 = useRef()
    const area_21 = useRef()
    const area_22 = useRef()
    const area_23 = useRef()
    const area_24 = useRef()


    const setStatusCheck = (id, status, target) => {
        var data = Data[id]
        data.status = status

        if(target){
            if(data.answer === target){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }
    }


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' id='area' {...props} h={57}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the images to listen, drag and drop the corresponding word to each image' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow py={3}>
                <ICol >
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    DRAG AND DROP THE CORRESPONDING WORD TO EACH IMAGE
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow>
                <ICol w={25} py={3}>
                    <IRow justify='center' align='center' w={100} gutters={0.5} className="food">
                        { Data.map((item, index) => {
                            return(
                                <DraggableItem 
                                elementId={index}
                                key={index} 
                                setStatus={setStatusCheck} 
                                draggable={'draggable_' + index} 
                                idArr={index} 
                                areaDrag={'#area'} 
                                target={item.belongsTo}  
                                ref={[area_0, area_1, area_2, area_3, area_4, area_5, area_6, area_7, area_8, area_9, area_10, area_11, area_12, area_13, area_14, area_15, area_16, area_17, area_18, area_19, area_20, area_21, area_22, area_23, area_24]}>
                                
                                    <div className="container" key={index}>{item.food}</div>  
                                </DraggableItem>
                                  
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
                            <div className="drag" data-selected={''} data-target={'area_' + index }   target={'area_' + index} id={'area_' + index} ref={eval('area_' + index)}></div>
                        </div>             
                        ) 
                    }) }

                </IRow>
                </ICol>
                <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} finished={ok} />
                <IRow >
                    <ButtonCheck onClick={checkActivity} className="check"></ButtonCheck>
                </IRow>
            </IRow>
            

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad