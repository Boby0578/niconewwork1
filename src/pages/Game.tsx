import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Lightbulb, BookOpen } from 'lucide-react';
import { verbs, pronouns, tenses, getTensePreposition, getPronounText, Verb, Tense, Pronoun } from '@/data/verbs';

interface Question {
  verb: Verb;
  tense: Tense;
  pronoun: Pronoun;
}

const Game = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const generateQuestion = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const availableTenses = Object.keys(randomVerb.conjugations) as Tense[];
    const randomTense = availableTenses[Math.floor(Math.random() * availableTenses.length)];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    
    setCurrentQuestion({ verb: randomVerb, tense: randomTense, pronoun: randomPronoun });
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion) return;

    const correctAnswer = currentQuestion.verb.conjugations[currentQuestion.tense]?.[currentQuestion.pronoun];
    
    // Simple check, will need to be smarter for il/elle, etc.
    if (userAnswer.trim().toLowerCase() === correctAnswer?.toLowerCase()) {
      setScore(score + 5);
      setFeedback('Bonne réponse !');
      setTimeout(generateQuestion, 1500);
    } else {
      setScore(score - 5);
      setFeedback('Mauvaise réponse.');
    }
  };

  if (!currentQuestion) {
    return <div>Chargement...</div>;
  }

  const correctAnswer = currentQuestion.verb.conjugations[currentQuestion.tense]?.[currentQuestion.pronoun];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-700">Maître de la Conjugaison</CardTitle>
          <div className="text-2xl font-bold text-violet-600">Score: {score}</div>
        </CardHeader>
        <CardContent>
          <div className="text-center my-8">
            <p className="text-xl md:text-2xl text-gray-800">
              Conjugue le verbe <span className="font-bold text-red-600">{currentQuestion.verb.name}</span> {getTensePreposition(currentQuestion.tense)}<span className="font-bold text-purple-600">{currentQuestion.tense}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
                ({getPronounText(currentQuestion.pronoun)})
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <Input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Votre réponse..."
              className="flex-grow text-lg"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600 active:bg-green-700">Vérifier</Button>
            <Button type="button" size="icon" variant="outline" className="bg-blue-100 hover:bg-blue-200 active:bg-blue-300">
              <Mic className="h-5 w-5 text-blue-600" />
            </Button>
          </form>

          {feedback && <p className="text-center font-semibold my-2">{feedback}</p>}
          {showAnswer && <p className="text-center font-bold text-green-600 my-2">Réponse : {correctAnswer}</p>}

          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)} className="active:bg-yellow-200">
              <Lightbulb className="mr-2 h-4 w-4" /> Révéler la réponse
            </Button>
            <Button variant="outline" className="active:bg-indigo-200">
              <BookOpen className="mr-2 h-4 w-4" /> Tableau de conjugaison
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Game;