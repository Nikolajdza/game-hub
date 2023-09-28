import { Box, Button, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
    const {data, error} = usePlatforms();
    const selectedPlatformId = useGameQueryStore((state) => state.gameQuery.platformId);
    const setSelectedPlatform = useGameQueryStore((state) => state.setPlatformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

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
                                    onClick={() => setSelectedPlatform(platform.id)}
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
