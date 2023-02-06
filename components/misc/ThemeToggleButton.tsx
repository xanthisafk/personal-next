import React from 'react'
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggleButton = (props) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Button 
            id="themeToggle"
            size={!props.size ? "md" : props.size}
            onClick={() => toggleColorMode()}
        >
            {
                colorMode === 'dark'
                ? props.LightModeIcon ?? <SunIcon color="#FF0049" />
                : props.DarkModeIcon ?? <MoonIcon color="#FF0049" />
            }
        </Button>
    )
}

export default ThemeToggleButton;