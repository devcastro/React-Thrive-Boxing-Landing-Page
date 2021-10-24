import React from 'react'

import { HeroContainer, HeroItems, HeroContent, HeroH1, HeroP, HeroBtn } from './HeroElements'


const Hero = () => {
    

    return (
        <HeroContainer> 
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
