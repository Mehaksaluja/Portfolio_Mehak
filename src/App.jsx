import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ActiveCallDetails from "./call/ActiveCallDetails";
import { vapi, startAssistant, stopAssistant } from "./ai";

function App() {
  const [started, setStarted] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [loading, setLoading] = useState(false);
  const [callId, setCallId] = useState();

  useEffect(() => {
    vapi
      .on("call-start", () => {
        setLoading(false);
        setStarted(true);
      })
      .on("call-end", () => {
        setStarted(false);
        setLoading(false);
      })
      .on("speech-start", () => {
        setAssistantIsSpeaking(true);
      })
      .on("speech-end", () => {
        setAssistantIsSpeaking(false);
      })
      .on("volume-level", (level) => {
        setVolumeLevel(level);
      });
  }, []);

  const handleStartAssistant = async () => {
    setLoading(true);
    const data = await startAssistant(
      "Mehak",
      "Saluja",
      "mehak@example.com",
      "1234567890"
    );
    setCallId(data.id);
  };

  const handleStopAssistant = () => {
    stopAssistant();
    setStarted(false);
  };

  return (
    <>
      <Header />
      <Hero
        startAssistant={handleStartAssistant}
        stopAssistant={handleStopAssistant}
        isAssistantActive={started}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {started && (
        <ActiveCallDetails
          assistantIsSpeaking={assistantIsSpeaking}
          volumeLevel={volumeLevel}
          endCallCallback={handleStopAssistant}
        />
      )}
    </>
  );
}

export default App;
