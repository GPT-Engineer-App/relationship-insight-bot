import { Box, Button, Container, FormControl, FormLabel, Input, Text, Textarea, VStack, useToast, Image } from "@chakra-ui/react";
import { FaUpload, FaHeart, FaBookOpen, FaPenFancy } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [communication, setCommunication] = useState("");
  const [profileInfo, setProfileInfo] = useState("");
  const toast = useToast();

  const handleAnalysis = () => {
    // Placeholder for communication analysis logic
    toast({
      title: "Analysis Complete",
      description: "Insights have been generated based on the communication provided.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleProfileUpdate = () => {
    // Placeholder for profile update logic
    toast({
      title: "Profile Updated",
      description: "The partner profile has been updated with new information.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" pt="75px" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" color="brand.700">
            EmoConnect
          </Text>
          <Text mt={2} fontSize="xl" color="brand.600">
            Navigate Your Relationships with Insight and Empathy
          </Text>
          <Image src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBhdGhldGljJTIwQUl8ZW58MHx8fHwxNzEzOTc3MDA1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" mt={4} borderRadius="full" />
        </Box>

        <FormControl>
          <FormLabel>Upload Communication Logs</FormLabel>
          <Input type="file" accept=".txt,.pdf" placeholder="Upload text messages, emails, etc." />
          <Button leftIcon={<FaUpload />} colorScheme="purple" mt={4} onClick={handleAnalysis}>
            Analyze Communication
          </Button>
        </FormControl>

        <FormControl>
          <FormLabel>Partner's Profile Information</FormLabel>
          <Textarea placeholder="Describe your partner's personality, behaviors, and key moments in the relationship." value={profileInfo} onChange={(e) => setProfileInfo(e.target.value)} />
          <Button leftIcon={<FaHeart />} colorScheme="pink" mt={4} onClick={handleProfileUpdate}>
            Update Profile
          </Button>
        </FormControl>

        <Box textAlign="center" w="full">
          <Button leftIcon={<FaBookOpen />} colorScheme="teal" size="lg" mt={4}>
            Access Resource Library
          </Button>
          <Button leftIcon={<FaPenFancy />} colorScheme="orange" size="lg" mt={4} ml={4}>
            Start Creative Expression
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
