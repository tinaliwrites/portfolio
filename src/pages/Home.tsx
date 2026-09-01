import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90">
            <p>
              Hi! I'm a writer interested in technology, policy, and culture.
            </p>
            <p>
              I covered the AI race and tech culture in San Francisco for <em>The Wall Street Journal</em> as a summer reporting intern. Previously I served as managing editor of <em>The New Journal</em>, reported for <em>The Sacramento Bee</em> and the <em>Yale Daily News</em>, and freelanced elsewhere.
            </p>
            <p>
              I'm a senior at Yale, where I study English literature and am writing a collection of poetry for my thesis. I also edit for campus literary magazines and help coordinate the Yale Journalism Initiative.
            </p>
            <p>
              Please reach out at tinany721 [at] gmail [dot] com or on Signal at tina.415. You can also check out my <a href="https://www.linkedin.com/in/tinaliyale/" target="_blank" rel="noopener noreferrer" className="underline">resume</a> or <a href="https://x.com/tinalignment" target="_blank" rel="noopener noreferrer" className="underline">tweets</a>, and while you’re here, learn even more <a href="https://www.tinalignment.com/more-about" target="_blank" rel="noopener noreferrer" className="underline">about me</a>.
            </p>
          </div>
      </main>
    </div>
  );
};

export default Home;
