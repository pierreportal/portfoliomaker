import React from 'react';
import { CarouselContainer, CarouselButton } from './styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ICarouselProps {
    children: React.ReactNode[]
}

export const Carousel: React.FunctionComponent<ICarouselProps> = ({ children }) => {
    
    return <div style={{position:'relative'}}> 
        <CarouselButton direction={'right'}>
            <FaArrowRight/>
        </CarouselButton>
        <CarouselContainer margin={20}>
            { children }
        </CarouselContainer>
        <CarouselButton direction={'left'}>
            <FaArrowLeft />
        </CarouselButton>
    </div>
}
