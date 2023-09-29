import { FC } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Platform } from '../entities/Platform';

interface Props {
    platforms: Platform[];
}

const PlatofmIconList: FC<Props> = ({ platforms }) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
        sega: SiSega,
        atari: SiAtari,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    );
};

export default PlatofmIconList;
