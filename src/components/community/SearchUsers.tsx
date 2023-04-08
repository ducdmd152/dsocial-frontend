import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchUsers = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={(event) => {
            if (event.target) {
              onSearch(event.target.value);
            }
          }}
          borderRadius={20}
          placeholder="Search users..."
          variant="filled"
          fontSize="sm"
        />
      </InputGroup>
    </form>
  );
};

export default SearchUsers;
