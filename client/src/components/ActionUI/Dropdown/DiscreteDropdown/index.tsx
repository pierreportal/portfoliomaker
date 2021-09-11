import React from 'react';
import { DropDownContainer, DropDownList, SelectedOption, DropDownItem } from './styles';

interface IDiscreteDropdownProps {
    selected: any,
    options: any[],
    onChange: (value: string) => void
}

export const DiscreteDropdown: React.FunctionComponent<IDiscreteDropdownProps> = ({ selected, options, onChange }) => {

    const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);

    
    const items = options.filter((item:string) => item !== selected).map((option:string) => <DropDownItem key={option} onClick={() => onChange(option)}>{option}</DropDownItem> )

    return <DropDownContainer onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
        <SelectedOption>
            {selected}
        </SelectedOption>
        {openDropdown && <DropDownList>
            {items}
        </DropDownList>}
    </DropDownContainer>;
}