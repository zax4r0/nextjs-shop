import { SearchIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

// { children }: { children: ReactNode }
const SearchBar = () => (
    <Stack spacing={4}>
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
                focusBorderColor={"gray.200"}
                // variant="filled"
                type="search"
                fontWeight={"bold"}
                placeholder="Search...."
                border={"olive"}
                bg={useColorModeValue("gray.50", "gray.900")}
                rounded={"lg"}
            />
        </InputGroup>
    </Stack>
);

export default SearchBar;
