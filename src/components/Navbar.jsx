import { Box, Flex, Link, Spacer, Button } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <Box bg="blue.500" px={5} py={3} color="white" position="fixed" width="100%" zIndex="banner">
      <Flex align="center">
        <Link href="/" px={2}>Home</Link>
        <Link href="/profile" px={2}>Profile</Link>
        <Link href="/sessions" px={2}>Sessions</Link>
        <Link href="/resources" px={2}>Resources</Link>
        <Link href="/support" px={2}>Support</Link>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<FaUserCircle />}>Login</Button>
        <Button colorScheme="blue" ml={2}>Sign Up</Button>
      </Flex>
    </Box>
  );
}

export default Navbar;