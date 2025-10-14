import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Mic, Volume2, VolumeX } from 'lucide-react';
import { verbs, pronouns, getTensePreposition, getPronounText, getPronounHint, Verb, Tense, Pronoun } from '@/data/verbs';
import { cn } from '@/lib/utils';
import ConjugationTable from '@/components/ConjugationTable';
import { speak } from '@/utils/speech';

interface Question {
  verb: Verb;
  tense: Tense;
  pronoun: Pronoun;
}

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { level, time, name, isMobileView } = location.state || { level: 1, time: 0, name: 'Joueur', isMobileView: false };

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showConjugation, setShowConjugation] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const generateQuestion = () => {
    setShowConjugation(false);
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const availableTenses = Object.keys(randomVerb.conjugations) as Tense[];
    const randomTense = availableTenses[Math.floor(Math.random() * availableTenses.length)];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    setCurrentQuestion({ verb: randomVerb, tense: randomTense, pronoun: randomPronoun });
  };

  useEffect(() => {
    const savedMute = localStorage.getItem('conjugaison-mute') === 'true';
    setIsMuted(savedMute);
    generateQuestion();
  }, []);

  useEffect(() => {
    if (currentQuestion) {
      const { verb, tense, pronoun } = currentQuestion;
      const questionText = `Conjugue le verbe ${verb.name} ${getTensePreposition(tense)}${tense}, à la ${getPronounText(pronoun)}.`;
      speak(questionText);
    }
  }, [currentQuestion]);

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem('conjugaison-mute', String(newMuteState));
    if (!newMuteState && currentQuestion) {
      // If unmuting, speak the current question again
      const { verb, tense, pronoun } = currentQuestion;
      const questionText = `Conjugue le verbe ${verb.name} ${getTensePreposition(tense)}${tense}, à la ${getPronounText(pronoun)}.`;
      speak(questionText);
    }
  };

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  const { verb, tense, pronoun } = currentQuestion;

  return (
    <div className="min-h-screen flex flex-col items-stretch p-4 sm:p-6 text-gray-700">
        <div className={cn("w-full flex-grow flex flex-col mx-auto transition-all duration-300", isMobileView ? "max-w-sm" : "max-w-4xl")}>
            <Card className="w-full flex-grow flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
                <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <Button variant="destructive" size="sm" onClick={() => navigate('/')}>
                            <X className="mr-1 h-4 w-4" /> Quitter
                        </Button>
                        <div className="text-center text-2xl font-bold text-gray-600">Score: {score}</div>
                        <div className="w-24 text-right">
                           <Button onClick={toggleMute} variant="outline" size="icon" className="bg-white/60 backdrop-blur-sm rounded-full shadow-md border-gray-300 hover:bg-white/80">
                               {isMuted ? <VolumeX className="h-5 w-5 text-gray-700" /> : <Volume2 className="h-5 w-5 text-gray-700" />}
                           </Button>
                        </div>
                    </div>

                    <div className="text-center pt-4 md:pt-8">
                        <p className="text-2xl md:text-4xl font-bold leading-tight">
                            Conjugue le verbe <span className="text-orange-600">{verb.name}</span> {getTensePreposition(tense)}<span className="text-green-600">{tense}</span>, à la <span className="text-blue-600">{getPronounText(pronoun)}</span> {getPronounHint(pronoun)}
                        </p>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center py-6">
                        <div
                            className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-orange-400 hover:bg-orange-500 active:bg-red-600 shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
                        >
                            <Mic className="h-24 w-24 sm:h-32 sm:w-32 text-white" />
                        </div>
                        <p className="mt-4 text-xl font-semibold text-gray-600">
                            Appuyez pour parler
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <Button className="bg-green-400 hover:bg-green-500 text-white rounded-full text-lg py-3 px-8">Révéler la réponse</Button>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg py-3 px-8" onClick={generateQuestion}>Question suivante</Button>
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg py-3 px-8" onClick={() => setShowConjugation(!showConjugation)}>
                            {showConjugation ? "Cacher" : "Voir"} la conjugaison
                        </Button>
                    </div>

                    {showConjugation && (
                        <div className="overflow-y-auto flex-shrink-0">
                            <ConjugationTable verb={verb} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Game;