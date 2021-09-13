import React from 'react';
import { IconContainer, LapTopScreen, LapTopKeys, IphoneScreen, IphoneHome } from './styles'

export const LaptopIcon = () => {
    return (
        <IconContainer>
            <LapTopScreen></LapTopScreen>
            <LapTopKeys></LapTopKeys>  
        </IconContainer>
    )
}

export const IphoneIcon = () => {
    return (
        <IconContainer>
            <IphoneScreen>
                <IphoneHome></IphoneHome>
            </IphoneScreen>
        </IconContainer>

    )
}



// <div class="icon-container">
//   <div class="iphone-screen">
//   <div class="iphone-home"></div>
//   </div>
// </div>