import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
            <p>
              Hi! I’m a writer, journalist, and poet.
            </p>
            <p>
              This summer I’m reporting on technology for <em>The Wall Street Journal</em> in San Francisco.
            </p>
            <p>
              I previously served as managing editor of <em>The New Journal</em>, reported for <em>The Sacramento Bee</em> and the <em>Yale Daily News</em>, and freelanced elsewhere. You can read my clips <Link to="/writing" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">here</Link>!
            </p>
            <p>
              This fall, I'll be a senior at Yale. I study English literature and will write a poetry thesis. I'll also be freelancing on tech when I'm not editing for the <em>Yale Literary Magazine</em>, <em>Elm City Echo</em>, and <em>TNJ</em>.
            </p>
            <p>
              Please reach out at <a href="mailto:tina.jh.li@yale.edu" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">tina.jh.li@yale.edu</a> or on Signal at tina.415. You can also follow my <a href="https://www.linkedin.com/in/tinaliyale/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">LinkedIn</a> and <a href="https://x.com/tinajhli" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">X</a>, and while you’re here, learn even more <Link to="/more-about" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">about me.</Link>
            </p>
          </div>
      </main>
    </div>
  );
};

export default Home;
