import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
