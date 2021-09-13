import styled from 'styled-components';
import { Row } from '../../ui-kit';

export const CarouselContainer = styled(Row)`
    position: relative;
    overflow-x: scroll;
    width: 100%;
    &>div {
        flex: none;
        width: 400px;
        height: 300px;
        background-color: white
    }
`;
interface ICarouselButtonProps {
    direction: string
}
export const CarouselButton = styled.div`
    position: absolute;
    top: calc(50% - 25px);
    left: ${(props:ICarouselButtonProps) => props.direction === 'left' ? '-35px' : 'calc(100% - 15px)'};
    width: 50px;
    height: 50px;
    z-index: 10;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`;