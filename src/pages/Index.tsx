import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Smartphone, Tablet, Settings } from 'lucide-react';
import { speak } from "@/utils/speech";

const Index = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0); // 0 for unlimited
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("conjugaison-username");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleSaveName = () => {
    if (!name.trim()) {
      const message = "Veuillez entrer un nom à sauvegarder.";
      speak(message);
      return;
    }
    const message = "Nom sauvegardé !";
    localStorage.setItem("conjugaison-username", name);
    speak(message);
  };

  const startGame = () => {
    if (!name.trim()) {
      const message = "Veuillez entrer votre nom pour commencer.";
      speak(message);
      return;
    }
    localStorage.setItem("conjugaison-username", name);
    navigate("/game", { state: { level, time, name, isMobileView } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-6 p-4 text-gray-700">
      <div className={cn("w-full mx-auto flex justify-between items-center mb-4 px-2 md:px-0 transition-all duration-300", isMobileView ? "max-w-sm" : "max-w-3xl")}>
          <Button variant="outline" size="icon" onClick={() => setIsMobileView(!isMobileView)} className="bg-white/60 backdrop-blur-sm rounded-full shadow-md border-gray-300 hover:bg-white/80">
              {isMobileView 
                  ? <Tablet className="h-5 w-5 text-gray-700" /> 
                  : <Smartphone className="h-5 w-5 text-gray-700" />}
          </Button>
          <Button variant="outline" size="icon" className="bg-white/60 backdrop-blur-sm rounded-full shadow-md border-gray-300 hover:bg-white/80">
              <Settings className="h-5 w-5 text-gray-700" />
          </Button>
      </div>

      <div className={cn("w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center transition-all duration-300", isMobileView ? "max-w-sm" : "max-w-3xl")}>
        <h1 className="font-pacifico text-5xl md:text-6xl text-purple-600 mb-6">
          Maître de la Conjugaison
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Entrez votre nom</h2>
          <div className="flex justify-center items-center gap-2 max-w-sm mx-auto">
            <Input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg"
            />
            <Button onClick={handleSaveName} className="bg-green-500 hover:bg-green-600">
              Sauvegarder
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choisissez le mode de jeu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setLevel(1)}
              className={cn(
                "p-4 rounded-lg border-2 border-transparent transition-all duration-300",
                level === 1
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-white hover:border-yellow-400"
              )}
            >
              <h3 className="font-bold text-xl">Niveau 1</h3>
              <p className="text-sm">Présent, Futur, Imparfait, Passé Composé</p>
            </button>
            <button
              onClick={() => setLevel(2)}
              className={cn(
                "p-4 rounded-lg border-2 border-transparent transition-all duration-300",
                level === 2
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-white hover:border-yellow-400"
              )}
            >
              <h3 className="font-bold text-xl">Niveau 2</h3>
              <p className="text-sm">Niv. 1 + Impératif, Subjonctif Présent</p>
            </button>
            <button
              onClick={() => setLevel(3)}
              className={cn(
                "p-4 rounded-lg border-2 border-transparent transition-all duration-300",
                level === 3
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-white hover:border-yellow-400"
              )}
            >
              <h3 className="font-bold text-xl">Niveau 3</h3>
              <p className="text-sm">Les 21 temps de la langue française</p>
            </button>
            <button
              onClick={() => setLevel(4)}
              className={cn(
                "p-4 rounded-lg border-2 border-transparent transition-all duration-300",
                level === 4
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-white hover:border-yellow-400"
              )}
            >
              <h3 className="font-bold text-xl">Mode Contest</h3>
              <p className="text-sm">Survivez le plus longtemps possible !</p>
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choisissez le temps imparti</h2>
          <div className="flex justify-center items-center gap-4">
            {[5, 10, 15, 0].map((t) => (
              <Button
                key={t}
                onClick={() => setTime(t)}
                variant={time === t ? "default" : "outline"}
                className={cn(
                  "transition-all rounded-full px-6",
                  time === t ? "bg-gray-800 text-white scale-110" : "bg-white"
                )}
              >
                {t === 0 ? "Sans limite" : `${t} min`}
              </Button>
            ))}
          </div>
        </div>
        
        <Button onClick={startGame} size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-6 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Jouer !
        </Button>
      </div>
    </div>
  );
};

export default Index;