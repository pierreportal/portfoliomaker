import styled from 'styled-components';

interface IWidthIndicatorProps {
    width: number;
}
export const WidthIndicator = styled.div`
    width: ${(props: IWidthIndicatorProps) => props.width ? props.width + 'px' : '100%'};
    height: 15px;
    text-align: center;
    border-top: solid 1px grey;
    border-left: solid 1px grey;
    border-right: solid 1px grey;
    margin-bottom: 5px;
    
    &>* {
        transform: translateY(-11px);
        background-color: #eee;
        color: grey;
        display: inline-block;
        padding: 0 5px
    }
`;