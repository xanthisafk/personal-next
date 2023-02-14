import { Box, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import logo_light from '../../../public/abhinav_logo_light.svg';
import logo_dark from '../../../public/abhinav_logo_dark.svg';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

function LogoImage() {
    const { colorMode } = useColorMode();
    const router = useRouter();
  return (
    <Box
        maxW={{lg: "75%", md: "50%", sm: "25%", base: "15%"}}
        padding={{base: "0.5rem", sm: "1rem"}}
    >
        <NextImage
            onClick={() => router.push("/")}
            src={colorMode === "light" 
                    ? logo_light
                    : logo_dark
            }
            alt={"logo of the website"}
        />
    </Box>
  )
}

export default LogoImage