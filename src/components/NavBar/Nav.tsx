import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, MinusIcon } from "@chakra-ui/icons";
import NavLink, { Links } from "./NavLink";
import SearchBar from "./SearchBar";
import requests from "../../app/lib/requests";
import { useRouter } from "next/router";
import { RootState } from "../../app/redux";
import { useSelector } from "react-redux";
import Link from "next/link";

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const { cart } = useSelector((state: RootState) => ({ cart: state.cart }));

    return (
        <>
            <Box bg={useColorModeValue("white", "dark")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        border={"none"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>
                            <svg
                                width="32"
                                height="32"
                                className="hic6U"
                                viewBox="0 0 32 32"
                                version="1.1"
                                aria-labelledby="unsplash-home"
                                aria-hidden="false">
                                <title id="unsplash-home">Unsplash Home</title>
                                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                            </svg>
                        </Box>
                        <SearchBar />
                        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                            {Object.entries(requests).map(([key, { title, url }]) => (
                                <h2
                                    key={key}
                                    onClick={() => router.push(`/?category=${key}`)}
                                    className=" mr-2 last:pr-24 cursor-pointer trasition duration-200  text-black dark:text-white text-bold hover:text-black active:text-pink-500">
                                    {title}
                                </h2>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Link href={"/cart"}>
                            <button
                                aria-label="go to cart"
                                className="text-gray-800 dark:text-white focus:outline-none focus:ring-4 focus:ring-gray-800">
                                <span className="badge mb-3 mr-3 bg-gray-800 rounded-full px-2 py-1 text-center object-right-top text-white text-sm ">
                                    {cart.cartTotalQuanitity}
                                </span>
                                <svg
                                    className="fill-stroke mr-3"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 4.2002H17"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999"
                                        stroke="currentColor"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </Link>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>
                                    <Button onClick={toggleColorMode}>
                                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                                    </Button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Object.entries(requests).map(([key, { title, url }]) => (
                                <h2
                                    key={key}
                                    onClick={() => router.push(`/?category=${key}`)}
                                    className=" mr-2 last:pr-24 cursor-pointer trasition duration-200  text-black text-bold hover:text-black dark:text-white active:text-pink-500">
                                    {title}
                                </h2>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    );
}

export default Nav;
