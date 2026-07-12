import Header from "@/components/Header";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const Writing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
        <div className="space-y-10">
          
          {/* Intro Section */}
          <FadeInSection>
            <p className="text-xl leading-relaxed text-foreground/90">
              I'm currently reporting for <em>The Wall Street Journal</em> and you can keep up with my clips{" "}
              <a
                href="https://www.wsj.com/news/author/tina-li"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4"
              >
                here
              </a>.
            </p>
          </FadeInSection>

          {/* Features Section */}
          <FadeInSection>
            <section className="space-y-4">
              <div className="relative inline-block mb-1">
                <h3 className="text-3xl font-serif italic relative z-10">
                  Features
                </h3>
                <svg className="absolute w-[110%] h-6 -bottom-1 -left-[5%] text-primary/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </div>

              <div className="space-y-4">
                {/* Story 1 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2025/02/the-long-ride-home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      The Long Ride Home
                    </a>{" "}
                    for <em>The New Journal</em>, February 2025
                  </h4>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed text-base">
                    About the bikers and pedestrians fighting New Haven’s urban renewal history and the bureaucracy slowing traffic safety progress
                  </p>
                </div>

                {/* Story 2 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2025/09/unforced-error/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      Unforced Error
                    </a>{" "}
                    for <em>The New Journal</em>, September 2025
                  </h4>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed text-base">
                    On STEM researchers reconsidering academia after federal funding cuts
                  </p>
                </div>

                {/* Story 3 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://www.newhavenindependent.org/2026/02/02/the-most-important-tool-the-most-dangerous-tool-how-nhps-is-adapting-to-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      How New Haven public schools are adapting to AI
                    </a>{" "}
                    for <em>The New Haven Independent</em>, February 2026
                  </h4>
                </div>

                {/* Story 4 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thefrisc.com/trump-snap-cuts-risk-business-at-this-historic-sf-farmers-market/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      Trump’s SNAP cuts threaten this historic SF Market
                    </a>{" "}
                    for <em>The Frisc</em>, July 2025
                  </h4>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Culture Section */}
          <FadeInSection>
            <section className="space-y-4">
              <div className="relative inline-block mb-1">
                <h3 className="text-3xl font-serif italic relative z-10">
                  Culture
                </h3>
                <svg className="absolute w-[110%] h-6 -bottom-1 -left-[5%] text-primary/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </div>

              <div className="space-y-4">
                {/* Story 1 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://yale-herald.com/2024/11/17/restaurant-days/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      Restaurant Days
                    </a>{" "}
                    for <em>The Yale Herald</em>, November 2024
                  </h4>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed text-base">
                    Automation, Chinese-American takeout and my family’s business
                  </p>
                </div>

                {/* Story 2 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2024/09/independent-declarations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      Independent Declarations
                    </a>{" "}
                    for <em>The New Journal</em>, September 2024
                  </h4>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed text-base">
                    Meet the stars of the <em>New Haven Independent</em>’s comments section
                  </p>
                </div>

                {/* Story 3 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2024/02/striking-a-chord/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary underline-offset-4"
                    >
                      Striking a Chord
                    </a>{" "}
                    for <em>The New Journal</em>, February 2024
                  </h4>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed text-base">
                    Keeping tempo with the Yale student band scene
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Legacy Footer Section */}
          <FadeInSection>
            <div className="pt-8 mt-8 flex justify-center">
              <Link
                to="/writing-archive"
                className="text-muted-foreground hover:text-primary transition-colors font-serif italic text-base decoration-primary/30 hover:underline underline-offset-4"
              >
                legacy
              </Link>
            </div>
          </FadeInSection>

        </div>
      </main>
    </div>
  );
};

export default Writing;
