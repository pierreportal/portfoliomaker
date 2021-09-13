import styled from 'styled-components';

interface IBgSwitchButtonStyledProps {
    direction: string,
    margin: number
}

interface IBgSwitchButtonItemProps {
    selected: boolean
}

export const BgSwitchButtonStyled = styled.div`
    display: flex;
    flex-direction: ${(props: IBgSwitchButtonStyledProps) => props.direction};
    & > *:not(:last-child) {
        margin-right: ${(props:IBgSwitchButtonStyledProps) => props.margin + 'px'}
    }
`;

export const BgSwitchButtonItem = styled.div`
    background-color: ${(props: IBgSwitchButtonItemProps) => props.selected ? '#000' : 'none'};
    color: ${(props: IBgSwitchButtonItemProps) => props.selected ? '#eee' : 'grey'};
    transition: background-color 200ms ease, color 200ms ease;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
`;