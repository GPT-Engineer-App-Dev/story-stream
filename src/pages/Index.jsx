import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Text, VStack, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Blog Post Title 1", content: "This is a summary of the blog post content. It gives a brief overview of what the post is about." },
    { id: 2, title: "Blog Post Title 2", content: "This is a summary of the blog post content. It gives a brief overview of what the post is about." }
  ]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const openDeleteDialog = (post) => {
    setPostToDelete(post);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setPostToDelete(null);
  };

  const deletePost = () => {
    setPosts(posts.filter(post => post.id !== postToDelete.id));
    closeDeleteDialog();
  };

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
            {posts.map(post => (
              <Box key={post.id} p={5} shadow="md" borderWidth="1px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Button colorScheme="red" onClick={() => openDeleteDialog(post)}>Delete</Button>
                </Flex>
                <Text mt={4}>{post.content}</Text>
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

      <AlertDialog isOpen={isDeleteDialogOpen} leastDestructiveRef={undefined} onClose={closeDeleteDialog}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Blog Post
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this blog post? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeDeleteDialog}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deletePost} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Index;