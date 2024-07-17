import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Freeze from "./components/base/FreezeUI/index.jsx";
import Welcome from "./components/base/Welcome/index.jsx";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import cn from "./utils/cn.jsx";

const App = () => {
  const [stage, setStage] = useState("loader");
  const [selectedCharacter, setSelectedCharacter] = useState("AeroBoy");
  const backgroundRef = useRef();

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setStage("greetings");
    }, 500);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    gsap.to(backgroundRef.current, {
      backgroundColor: backgroundClass,
      duration: 0.7,
      ease: "power2.inOut",
    });
  }, [selectedCharacter]);

  const handleGreetingsComplete = () => {
    setStage("mainApp");
  };

  const backgroundClass = cn("transition-all duration-700", {
    "bg-blue-400": selectedCharacter === "Ranger",
    "bg-green-400": selectedCharacter === "AeroBoy",
    "bg-purple-400": selectedCharacter === "Women",
    "bg-yellow-400": selectedCharacter === "ArcherKick",
  });

  useEffect(() => {
    gsap.fromTo(
      ".character-button",
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <>
      {/*<GSAPBasics />*/}

      {stage === "loader" && <Freeze />}
      {stage === "greetings" && (
        <Welcome
          onComplete={handleGreetingsComplete}
          title={"Transforming Reality with 3D Magic"}
        />
      )}
      {stage === "mainApp" && (
        <>
          <div className="relative h-screen">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-lg z-10">
              <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border border-gray-200 rotate-45" />
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Choose Your Character
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCharacter("Ranger")}
                  className={cn(
                    "px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium flex items-center justify-center transition-all duration-300 character-button",
                    {
                      "bg-blue-600 text-white": selectedCharacter === "Ranger",
                      "bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white":
                        selectedCharacter !== "Ranger",
                    }
                  )}
                >
                  <span className="text-base">🗡️</span> Ranger
                </button>
                <button
                  onClick={() => setSelectedCharacter("AeroBoy")}
                  className={cn(
                    "px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium flex items-center justify-center transition-all duration-300 character-button",
                    {
                      "bg-green-600 text-white":
                        selectedCharacter === "AeroBoy",
                      "bg-transparent text-gray-700 hover:bg-green-500 hover:text-white":
                        selectedCharacter !== "AeroBoy",
                    }
                  )}
                >
                  <span className="text-base">🪂</span> AeroBoy
                </button>
                <button
                  onClick={() => setSelectedCharacter("Women")}
                  className={cn(
                    "px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium flex items-center justify-center transition-all duration-300 character-button",
                    {
                      "bg-purple-600 text-white": selectedCharacter === "Women",
                      "bg-transparent text-gray-700 hover:bg-purple-500 hover:text-white":
                        selectedCharacter !== "Women",
                    }
                  )}
                >
                  <span className="text-base">👩‍🎤</span> Women
                </button>
                <button
                  onClick={() => setSelectedCharacter("ArcherKick")}
                  className={cn(
                    "px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium flex items-center justify-center transition-all duration-300 character-button",
                    {
                      "bg-yellow-600 text-white":
                        selectedCharacter === "ArcherKick",
                      "bg-transparent text-gray-700 hover:bg-yellow-500 hover:text-white":
                        selectedCharacter !== "ArcherKick",
                    }
                  )}
                >
                  <span className="text-base">🏹</span> ArcherKick
                </button>
              </div>
              <Interface />
            </div>
            <div
              className={cn("absolute inset-0", backgroundClass)}
              ref={backgroundRef}
            >
              <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
                <Experience character={selectedCharacter} />
              </Canvas>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
