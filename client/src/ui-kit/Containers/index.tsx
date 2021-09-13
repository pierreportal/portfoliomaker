import styled from 'styled-components';
import { Column, fontBlack } from '../';

interface IFullPageSectionProps {
    backgroundColor?: string,
    color?: string,
    portion?: number
}

export const FullPageSection = styled(Column)`
    background-color: ${(props: IFullPageSectionProps) => props.backgroundColor || '#eee'};
    color: ${(props: IFullPageSectionProps) => props.color || fontBlack};
    width: ${(props: IFullPageSectionProps) => props.portion ? 100 / props.portion + '%' :  '100%'};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
`;