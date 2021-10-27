import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer> 
            <h1> The Art of Eight Limbs </h1>
            <p> Directly from Thailand, these gloves were crafted with safety and performance in mind. 
                It took decades of design to finally launch this product and we're looking to inspire all fighters. 
                That is why we're donating 10% of every purchase to a local mental health awareness non-profit.</p>
            <FeatureButton> Learn More </FeatureButton>
        </FeatureContainer>
            
        
    )
}

export default Feature;
