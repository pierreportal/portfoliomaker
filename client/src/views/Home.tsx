import React from 'react';
import { FullPageCenterContent, FullPageSection, Row, deepBlue, fontBlack, oldPink } from '../ui-kit'

interface IHomeProps {
    changeColor?: () => void;
}

export const Home: React.FunctionComponent<IHomeProps> = ({ changeColor }) => {

    React.useEffect(() => {
        changeColor && changeColor()
    }, []);

    return <FullPageCenterContent margin={30}>

        <FullPageSection portion={1} backgroundColor={deepBlue} color={'#eee'}>
            <h1>The simplest and fastest</h1>
            <p>this is awesome</p>
        </FullPageSection>

        <Row margin={20}>
        <FullPageSection portion={2}>
                <h2>The simplest and fastest</h2>
                <p>this is awesome</p>
            </FullPageSection>
            <FullPageSection portion={2} backgroundColor={oldPink} color={deepBlue}>
                <h2>The simplest and fastest</h2>
                <p>this is awesome</p>
            </FullPageSection>
        </Row>

        <h2>Features</h2>

        <FullPageSection portion={1} backgroundColor={'#ddd'} color={fontBlack}>
            <h3>Some pretty cool stuff</h3>
            <p>this is awesome</p>
        </FullPageSection>

        <h2>Templates</h2>

        <FullPageSection portion={1} backgroundColor={'#ddd'} color={fontBlack}>
            <h3>Some pretty cool stuff</h3>
            <p>this is awesome</p>
        </FullPageSection>
    </FullPageCenterContent>;
}