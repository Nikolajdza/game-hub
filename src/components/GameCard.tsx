import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatofmIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    game: Game;
}

const GameCard: FC<Props> = ({ game }) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatofmIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">
                    <Link to={`/games/${game.slug}`}>
                        {game.name}
                    </Link>
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
