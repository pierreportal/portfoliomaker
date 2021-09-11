import React from 'react';
import { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { StyledColorPicker } from "./styles"
import { SimpleButton } from '../ActionUI/Buttons'

export const ColorPickerTest = () => {

  const [color, setColor] = useColor("hex", "#121212");
  const [showPalette, setShowPalette] = React.useState<boolean>(false);

  const palette = <div style={{position: "absolute", zIndex: 30}}> <StyledColorPicker width={250} height={100} color={color} onChange={setColor} hideHSV alpha/> </div>;

  return <div style={{position: "relative"}}><SimpleButton label={'text color'} onClickCallback={() => setShowPalette(!showPalette)}/>{showPalette && palette}</div>
};