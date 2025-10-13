import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Scores = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
        <CardHeader className="p-0 mb-6">
          <h1 className="font-pacifico text-5xl text-pink-500">
            Tableau des Scores
          </h1>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-white/50 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-xl mb-4 text-gray-700">Tableau des Scores</h2>
            <p className="text-gray-500">Aucun score enregistré.</p>
          </div>
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg"
          >
            Menu Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scores;