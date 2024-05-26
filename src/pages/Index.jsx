import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="#" color="white">About</Link>
          <Link as={RouterLink} to="#" color="white">Blog</Link>
          <Link as={RouterLink} to="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>

        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>Add New Post</Button>
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                <HStack mt={4} spacing={2}>
                  {post.tags.map((tag, idx) => (
                    <Text key={idx} fontSize="sm" color="gray.500">#{tag}</Text>
                  ))}
                </HStack>
              </Box>
            ))}
            
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
                {posts.slice(0, 5).map((post, index) => (
                  <Link key={index} href="#">{post.title}</Link>
                ))}
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