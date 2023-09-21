import { FC } from 'react';
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector: FC<Props> = ({
                                         selectedPlatformId,
                                         onSelectPlatform,
                                     }) => {
    const {data, error} = usePlatforms();

    const selectedPlatform = data?.results.find((platform) => platform.id === selectedPlatformId);

    return (
        <>
            {error && <></>}
            {!error && (
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                            {selectedPlatform?.name ?? 'Platform'}
                        </MenuButton>
                        <MenuList>
                            {data?.results.map((platform) => (
                                <MenuItem
                                    key={platform.id}
                                    onClick={() => onSelectPlatform(platform)}
                                >
                                    {platform.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
            )}
        </>
    );
};

export default PlatformSelector;
