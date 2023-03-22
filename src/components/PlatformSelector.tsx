import { FC } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector: FC<Props> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const { data, error } = usePlatforms();

  return (
    <>
      {error && <></>}
      {!error && (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name ?? "Platform"}
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
