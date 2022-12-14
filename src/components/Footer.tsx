import { Box, Flex, Stack, Text, Link } from "@chakra-ui/react";

import Logo from "./Logo";

type ListHeaderProps = {
  children: JSX.Element;
};

function LargeWithAppLinksAndSocial() {
  return (
    <Box bg="white">
      <Flex
        p={10}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        justifyItems={"flex-start"}
      >
        <Stack w={{ base: "100%", lg: "25%" }} py={5}>
          <Logo />
        </Stack>
        <Flex flexDirection={"column"} w={{ base: "50%", lg: "25%" }}>
          <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            Links
          </Text>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Careers</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Blog</Link>
        </Flex>

        <Flex flexDirection={"column"} w={{ base: "50%", lg: "25%" }}>
          <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            Legal
          </Text>
          <Link href={"#"}>Terms of use</Link>
          <Link href={"#"}>Terms of conditions</Link>
          <Link href={"#"}>Privacy policy</Link>
          <Link href={"#"}>Cookie policy</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LargeWithAppLinksAndSocial;
