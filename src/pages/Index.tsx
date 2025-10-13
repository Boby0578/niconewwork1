import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-green-300 to-yellow-200 p-4">
      <div className="text-center">
        <h1 
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Maître de la Conjugaison
        </h1>
        <Link to="/game">
          <Button 
            size="lg" 
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold text-2xl py-8 px-12 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Commencer
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;