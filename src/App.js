/* eslint-disable react/react-in-jsx-scope */
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjecSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <Skills/>
          <ContactMeSection />
          <Footer />
          {/* <Alert /> */}
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
