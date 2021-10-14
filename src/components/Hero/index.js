import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroItems, HeroContent, HeroH1, HeroP, HeroBtn } from './HeroElements'


function Hero() {
    return (
        <HeroContainer> 
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>The Fighter Essential</HeroH1>
                    <HeroP> Made of Authentic Materials </HeroP>
                    <HeroBtn> Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
