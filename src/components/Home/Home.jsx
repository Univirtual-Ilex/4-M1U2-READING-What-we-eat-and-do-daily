import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import ButtonX from '../ButtonX'
import estilos_home from './Home_styles'



const Home_base = function ({...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo'>
                        <div className='bloque-izquierdo-container'>
                            <h1> What we eat and do daily</h1>
                            <p>
                            Tap on each picture to listen to the pronunciation of the food item. Later, darg and drop each word from the box below the food images. 
                            <span className='negrilla'> <br/> <br/> ¡Time to practice your reading skill!</span></p>
                            <ButtonX>Start</ButtonX>
                        </div>
                    </div>
                    <div className='bloque-derecho'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home