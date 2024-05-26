import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>

        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Search</Heading>
              <Input placeholder="Search..." mt={2} />
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <VStack align="stretch" mt={2}>
                <Link href="#">Blog Post Title 1</Link>
                <Link href="#">Blog Post Title 2</Link>
              </VStack>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Categories</Heading>
              <VStack align="stretch" mt={2}>
                <Link href="#">Category 1</Link>
                <Link href="#">Category 2</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 My Blog. All rights reserved.</Text>
        <HStack spacing={4}>
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;