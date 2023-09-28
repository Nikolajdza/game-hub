import { Box, Button, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';
import useGameQueryStore from '../store';

const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'},
];

const SortSelector = () => {
    const sortOrder = useGameQueryStore(state => state.gameQuery.sortOrder);
    const setSortOrder = useGameQueryStore(state => state.setSortOrder);
    const currentSortOrder = sortOrders.find(
        (order) => order.value === sortOrder
    );

    return (
        <>
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                        Order by: {currentSortOrder?.label ?? 'Relevance'}
                    </MenuButton>
                    <MenuList>
                        {sortOrders.map((order) => (
                            <MenuItem
                                key={order.value}
                                onClick={() => setSortOrder(order.value)}
                            >
                                {order.label}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        </>
    );
};

export default SortSelector;
