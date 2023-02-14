import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import HackerEffect from '../../../lib/hackerEffect';

function SingleLink({ Text, URL, Key }) {
    const router = useRouter();

    return (
        <Link
            key={`nav-${Key}`}
            fontFamily={'"Fira Code", monospaced'}
            fontSize={'1rem'}
            color={'#FF0049'}
            data-text={Text}
            fontWeight={700}
            onMouseEnter={HackerEffect}
            className={"navbar-link"}
            onClick={() => router.push(URL)}
        >
            {"// " + Text}
        </Link>
    )
}

export default SingleLink