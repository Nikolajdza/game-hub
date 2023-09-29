import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
}

const GameCardContainer: FC<Props> = ({ children }) => {
    return (
        <Box borderRadius={10} overflow="hidden" _hover={{
            transform: 'scale(1.03)',
            transition: 'transform 0.15s ease-in-out'
        }}>
            {children}
        </Box>
    );
};

export default GameCardContainer;
