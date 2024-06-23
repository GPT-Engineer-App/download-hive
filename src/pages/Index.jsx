import { Container, VStack, Text, Button, Box, Heading, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const handleDownload = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to download.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Simulate a download action
    toast({
      title: "Download Started",
      description: `Starting download for ${url}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset the URL input
    setUrl("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Download Your Files</Heading>
        <Text fontSize="lg" mb={6}>Enter the URL of the file you want to download.</Text>
        <Box width="100%">
          <Input
            placeholder="Enter URL"
            size="lg"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            mb={4}
          />
          <Button
            leftIcon={<FaDownload />}
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={handleDownload}
          >
            Download
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;