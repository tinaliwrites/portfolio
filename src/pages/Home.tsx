import Header from "@/components/Header";
import FadeInSection from "@/components/FadeInSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
        <FadeInSection>
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
            <p>
              Hello! I’m Tina. I'm a writer, journalist, and poet. At Yale, I study English literature.
            </p>
            <p>
              This summer I'll be reporting on technology for The Wall Street Journal's SF bureau. I previously served as managing editor of <em>The New Journal</em>, a narrative longform magazine about Yale and New Haven. Last summer, I interned at <em>The Sacramento Bee</em>, where I wrote about transportation and business. I’ve covered town-gown relations for the <em>Yale Daily News</em> and contributed work to <em>The Yale Herald</em> and <em>The Frisc</em>.
            </p>
            <p>
              While you’re here, you can read my clips and <Link to="/more-about" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">learn even more about me.</Link>
            </p>
            <div className="flex gap-6 mt-4 text-lg">
              <a href="mailto:tina.jh.li@yale.edu" className="lowercase underline decoration-blue-500 underline-offset-4 hover:text-blue-600 transition-colors">email</a>
              <a href="https://www.linkedin.com/in/tinaliyale/" target="_blank" rel="noopener noreferrer" className="lowercase underline decoration-blue-500 underline-offset-4 hover:text-blue-600 transition-colors">linkedin</a>
              <a href="https://x.com/its_tinali" target="_blank" rel="noopener noreferrer" className="lowercase underline decoration-blue-500 underline-offset-4 hover:text-blue-600 transition-colors">twitter</a>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
};

export default Home;
