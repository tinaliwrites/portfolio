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
              This summer I’m reporting on technology for <em>The Wall Street Journal</em> in San Francisco. I'm grateful to be supported by the Dow Jones News Fund business reporting fellowship.
            </p>
            <p>
              I previously served as managing editor of <em>The New Journal</em>, reported for <em>The Sacramento Bee</em> and the <em>Yale Daily News</em>, and freelanced elsewhere.
            </p>
            <p>
              In my fourth year in college, I'll be a Yale Journalism Initiative coordinating fellow; literary editor at the <em>Yale Literary Magazine</em> and verse editor for <em>The New Journal</em>; and managing editor for the <em>Elm City Echo</em>. I study English literature and will write a poetry thesis.
            </p>
            <p>
              You can email me at <a href="mailto:tina.jh.li@yale.edu" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">tina.jh.li@yale.edu</a>, and follow my <a href="https://www.linkedin.com/in/tinaliyale/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">LinkedIn</a> and <a href="https://x.com/its_tinali" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">X</a>. While you’re here, you can read my clips and learn even more <Link to="/more-about" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">about me.</Link>
            </p>
          </div>
      </main>
    </div>
  );
};

export default Home;
