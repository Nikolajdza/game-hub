import { FC } from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
