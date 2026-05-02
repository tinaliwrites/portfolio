import { Link } from "react-router-dom";

const Poetry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <Link 
        to="/more-about" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit font-serif text-lg"
      >
        <span>&larr; go back</span>
      </Link>
      
      <div className="flex-1 flex items-center justify-center">
        <p className="font-serif text-xl text-foreground/80">
          poetry here soon...
        </p>
      </div>
    </div>
  );
};

export default Poetry;
