import { FormEvent, useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/all';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(state => state.setSearchText);
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
