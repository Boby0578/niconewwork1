import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Volume2, X, Pencil } from 'lucide-react';
import { verbs, pronouns, getTensePreposition, getPronounText, getPronounHint, Verb, Tense, Pronoun } from '@/data/verbs';
import { cn } from '@/lib/utils';
import ConjugationTable from '@/components/ConjugationTable';

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
  const [isListening, setIsListening] = useState(false);
  const [showConjugation, setShowConjugation] = useState(false);

  const generateQuestion = () => {
    setShowConjugation(false);
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const availableTenses = Object.keys(randomVerb.conjugations) as Tense[];
    const randomTense = availableTenses[Math.floor(Math.random() * availableTenses.length)];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    setCurrentQuestion({ verb: randomVerb, tense: randomTense, pronoun: randomPronoun });
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  const { verb, tense, pronoun } = currentQuestion;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 p-4 text-gray-700">
        <div className={cn("w-full mx-auto transition-all duration-300", isMobileView ? "max-w-sm" : "max-w-4xl")}>
            <Card className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
                <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-8">
                        <Button variant="destructive" size="sm" onClick={() => navigate('/')}>
                            <X className="mr-1 h-4 w-4" /> Quitter
                        </Button>
                        <div className="text-center text-2xl font-bold text-gray-600">Score: {score}</div>
                        <div className="w-24 text-right">
                           {/* Timer placeholder */}
                        </div>
                    </div>

                    <div className="text-center my-12 min-h-[120px] flex items-center justify-center">
                        <p className="text-2xl md:text-4xl font-bold leading-tight">
                            Conjugue le verbe <span className="text-orange-600">{verb.name}</span> {getTensePreposition(tense)}<span className="text-green-600">{tense}</span>, à la <span className="text-blue-600">{getPronounText(pronoun)}</span> {getPronounHint(pronoun)}
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center my-16">
                        <div className="absolute left-0">
                            <Button variant="outline" size="icon" className="rounded-full h-14 w-14 bg-white/50 shadow-md">
                                <Volume2 className="h-7 w-7 text-gray-600" />
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button 
                                size="icon" 
                                className={cn(
                                    "rounded-full h-24 w-24 shadow-lg transition-all duration-300 flex items-center justify-center",
                                    isListening 
                                    ? "bg-gradient-to-br from-red-500 to-red-600 scale-110"
                                    : "bg-gradient-to-br from-yellow-400 to-orange-500"
                                )}
                                onClick={() => setIsListening(!isListening)}
                            >
                                <Mic className="h-16 w-16 text-white" />
                            </Button>
                            <p className="mt-4 text-lg font-semibold">Appuyez pour parler</p>
                        </div>
                        <div className="absolute right-0">
                            <Button variant="outline" size="icon" className="rounded-full h-14 w-14 bg-white/50 shadow-md">
                                <Pencil className="h-7 w-7 text-gray-600" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center flex-wrap gap-4 mt-12">
                        <Button className="bg-green-400 hover:bg-green-500 text-white rounded-full text-lg py-3 px-8">Révéler la réponse</Button>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-lg py-3 px-8" onClick={generateQuestion}>Question suivante</Button>
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full text-lg py-3 px-8" onClick={() => setShowConjugation(!showConjugation)}>
                            {showConjugation ? "Cacher" : "Voir"} la conjugaison
                        </Button>
                    </div>

                    {showConjugation && <ConjugationTable verb={verb} />}
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Game;