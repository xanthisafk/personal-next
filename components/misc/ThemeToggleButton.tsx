import React from 'react'
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggleButton = (props) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <IconButton
            aria-label={"Toggle color mode"} 
            id="themeToggle"
            size={props.size ?? "md"}
            padding={props.padding ?? 0}
            paddingX={props.paddingX ?? 0}
            paddingY={props.paddingY ?? 0}
            margin={props.margin ?? 0}
            marginX={props.marginX ?? 0}
            marginY={props.marginY ?? 0}
            bg={"transparent"}
            onClick={() => toggleColorMode()}
        >
            {
                colorMode === 'dark'
                ? props.LightModeIcon ?? <SunIcon color="#FF0049" />
                : props.DarkModeIcon ?? <MoonIcon color="#FF0049" />
            }
        </IconButton>
    )
}

export default ThemeToggleButton;