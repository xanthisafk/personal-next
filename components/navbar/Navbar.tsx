import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';

import LinkElementHorizontal from './components/LinkElementHorizontal';
import LogoImage from './components/LogoImage';

import data from './components/linkData.json';
import ThemeToggleButton from '../misc/ThemeToggleButton';
import SingleLink from './components/SingleLink';


function Navbar() {
    const [display, changeDisplay] = useState("none");
    return (
        <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            role={"navigation"}
        >
            <LogoImage />
            <Flex
                align={"center"}
            >
                <LinkElementHorizontal />
            </Flex>
            <Box display={{ lg: 'flex', md: 'none', sm: 'none' }} />
            <IconButton
                icon={<HamburgerIcon />}
                minH={"100%"}
                background={"transparent"}
                aria-label={"open menu"}
                display={{ lg: 'none', md: 'flex', sm: 'flex' }}
                onClick={() => changeDisplay("flex")}
                marginRight={5}
            />
            <Flex
                display={display}
                w={"100vw"}
                h={"100vh"}
                zIndex={99999}
                position={"fixed"}
                top={0}
                left={0}
                overflow={"auto"}
                background={"var(--chakra-colors-chakra-body-bg)"}
                flexDirection={"column"}
            >
                <Flex alignItems={"center"} justify={'space-between'} flexDirection={"row"}>
                    <LogoImage />
                    <Flex justify={"flex-end"} flexDirection={"row"} marginRight={"6px"}>
                        <ThemeToggleButton size={"lg"} marginY={2} padding={2} />
                        <IconButton
                            icon={<CloseIcon />}
                            aria-label={"Close menu"}
                            mt={2}
                            mr={2}
                            background={"transparent"}
                            size={"lg"}
                            onClick={() => changeDisplay("none")}
                        />
                    </Flex>
                </Flex>
                <Flex
                    flexDirection={"column"}
                    align={"left"}
                    gap={5}
                    paddingX={5}
                    marginY={10}
                >
                    {data.linkData.map(({ Text, URL }, index) => (<SingleLink Text={Text} URL={URL} Key={index} />))}
                </Flex>
            </Flex>
        </Flex>

    )
}

export default Navbar;