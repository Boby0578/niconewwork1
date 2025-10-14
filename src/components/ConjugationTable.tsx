import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Verb } from '@/data/verbs';
import { Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { speak } from '@/utils/speech';

interface ConjugationTableProps {
  verb: Verb;
}

const ConjugationTable: React.FC<ConjugationTableProps> = ({ verb }) => {
  const handleSpeak = (pronoun: string, value: string) => {
    let textToSpeak = '';
    if (pronoun === 'il/elle') {
      textToSpeak = `il ${value}, elle ${value}`;
    } else if (pronoun === 'ils/elles') {
      textToSpeak = `ils ${value}, elles ${value}`;
    } else {
      textToSpeak = `${pronoun} ${value}`;
    }
    speak(textToSpeak);
  };

  return (
    <div className="mt-8">
        <Card className="bg-white/80 border-t-4 border-yellow-400 rounded-xl">
        <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-pink-500">
            Conjugaison du verbe "{verb.name}"
            </CardTitle>
        </CardHeader>
        <CardContent>
            {Object.entries(verb.conjugations).map(([tense, conjugation]) => (
            <div key={tense} className="mb-6">
                <h4 className="font-bold text-xl text-gray-800 mb-3 capitalize bg-green-100 rounded-md p-2">{tense}</h4>
                {typeof conjugation === 'string' ? (
                    <div className="flex justify-between items-center py-2 text-lg">
                        <span>{conjugation}</span>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => speak(conjugation)}>
                            <Volume2 className="h-5 w-5 text-cyan-600" />
                        </Button>
                    </div>
                ) : (
                    <ul>
                    {conjugation && Object.entries(conjugation).map(([pronoun, value]) => (
                        <li key={pronoun} className="flex justify-between items-center py-2 border-b border-gray-200/80 last:border-b-0 text-lg">
                        <span className="w-1/4 font-semibold">{pronoun}</span>
                        <span className="flex-grow text-left">{value}</span>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleSpeak(pronoun, value as string)}>
                            <Volume2 className="h-5 w-5 text-cyan-600" />
                        </Button>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            ))}
        </CardContent>
        </Card>
    </div>
  );
};

export default ConjugationTable;