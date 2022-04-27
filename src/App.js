import { GlobalStyles } from "./components/Globalstyles";
import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/Layout/nav/NavBar";
import HeroSection from "./components/sections-hero/HeroSection";

const Container = styled.div`
  height: 100vh;
  padding: 0 100px;
  position: relative;
`;
const LightTheme = {
  background: "white",
  fontColor: "black",
};

const DarkTheme = {
  background: "black",
  fontColor: "white",
};

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeProvider theme={theme === "Light" ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
