import styled from 'styled-components';

interface IToggleButtonProps {
    active: boolean
}

export const ToggleButton = styled.button`
    background-color: ${(props: IToggleButtonProps) => props.active ? 'grey' : 'transparent'};
    color: ${(props: IToggleButtonProps) => props.active ? '#eee' : 'grey'};
    transition: background-color 200ms ease, color 200ms ease;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
`;