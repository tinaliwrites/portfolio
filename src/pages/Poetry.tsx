import { Link } from "react-router-dom";

const Poetry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <Link 
        to="/more-about" 
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit font-serif text-lg mb-12 underline decoration-primary/30 hover:decoration-primary underline-offset-4"
      >
        <span>&larr; go back</span>
      </Link>
      
      <div className="flex-1 flex items-center justify-center pt-10 pb-20">
        <div className="flex flex-col items-start w-full max-w-lg mx-auto font-serif">
          <h1 className="text-3xl font-medium mb-8">poetry</h1>
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
            <p>
              "Impressions (at the Equinox)" <a href="https://thenewjournalatyale.com/2026/02/impressions-at-the-equinox/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">The New Journal</a>, February 2026.
            </p>
            <p className="text-muted-foreground">
              more forthcoming... or <a href="mailto:tina.jh.li@yale.edu" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">email me!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
