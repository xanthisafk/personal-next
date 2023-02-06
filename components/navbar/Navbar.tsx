import { Box, Flex, HStack, Link, useColorMode } from '@chakra-ui/react';
import React from 'react';
import logo_light from '../../public/abhinav_logo_light.svg';
import logo_dark from '../../public/abhinav_logo_dark.svg';
import NextImage from 'next/image';
import ThemeToggleButton from '../misc/ThemeToggleButton';

function navbar() {
    const { colorMode } = useColorMode();
    return (
        <Flex
            minW={'100vw'}
            minH={'5vh'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box
                width={115}
                height={112}
                marginTop={{ base: 5, sm: '52px' }}
                marginLeft={{ base: 5, sm: '112px' }}
            >
                <NextImage
                    src={colorMode === 'dark' ? logo_dark : logo_light}
                    alt={"logo of this website"}
                />
            </Box>
            <HStack
                display={{ base: 'none', md: 'flex' }}
                paddingLeft={5}
                gap={{ base: 1, sm: 53 }}
                className={'nav-link-container'}
            >
                <Link>// home</Link>
                <Link>// blog</Link>
                <Link>// resume</Link>
                <Link>// project</Link>
                <Link>// contact</Link>
                <ThemeToggleButton />
            </HStack>
            <p></p>
        </Flex>
    )
}

export default navbar