import React from 'react';
import { Flex } from '@chakra-ui/react';
import data from './linkData.json';
import ThemeToggleButton from '../../misc/ThemeToggleButton';
import SingleLink from './SingleLink';


const LinkElementHorizontal = () => {

    return (
        <>
            <Flex
                gap={30}
                display={{ lg: 'flex', md: 'none', sm: 'none', base: 'none' }}
                alignItems={"center"}
            >
                {data.linkData.map(({ Text, URL }, index) => (<SingleLink Text={Text} URL={URL} Key={index} />))}
                <ThemeToggleButton />
            </Flex>
        </>
    )
}

export default LinkElementHorizontal;