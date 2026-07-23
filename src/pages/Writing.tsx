import Header from "@/components/Header";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const Writing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16 font-serif">
        <div className="space-y-10">
          


          {/* Features Section */}
          <FadeInSection>
            <section className="space-y-4">
              <div className="relative inline-block mb-1">
                <h3 className="text-xl font-bold uppercase relative z-10">
                  FEATURE
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
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      The Long Ride Home
                    </a> <span className="text-gray-500">—</span> <em>The New Journal</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    the fight for traffic safety in New Haven
                  </p>
                </div>

                {/* Story 2 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2025/09/unforced-error/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Unforced Error
                    </a> — <em>The New Journal</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    on STEM researchers reconsidering academia due to 2025 funding cuts
                  </p>
                </div>

                {/* Story 3 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://www.newhavenindependent.org/2026/02/02/the-most-important-tool-the-most-dangerous-tool-how-nhps-is-adapting-to-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      How New Haven public schools are adapting to AI
                    </a> <span className="text-gray-500">—</span> <em>The New Haven Independent</em>
                  </h4>
                </div>

                {/* Story 4 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thefrisc.com/trump-snap-cuts-risk-business-at-this-historic-sf-farmers-market/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Trump’s SNAP cuts threaten this historic SF Market
                    </a> <span className="text-gray-500">—</span> <em>The Frisc</em>
                  </h4>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Culture Section */}
          <FadeInSection>
            <section className="space-y-4">
              <div className="relative inline-block mb-1">
                <h3 className="text-xl font-bold uppercase relative z-10">
                  CULTURE
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
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Restaurant Days
                    </a> — <em>The Yale Herald</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    on automation, Chinese-American takeout, and my family’s business
                  </p>
                </div>

                {/* Story 2 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2024/09/independent-declarations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Independent Declarations
                    </a> <span className="text-gray-500">—</span> <em>The New Journal</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    meet the stars of the <em>New Haven Independent</em>’s comments section
                  </p>
                </div>

                {/* Story 3 */}
                <div className="group relative">
                  <h4 className="text-xl font-medium text-foreground">
                    <a
                      href="https://thenewjournalatyale.com/2024/02/striking-a-chord/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Striking a Chord
                    </a> — <em>The New Journal</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    keeping tempo with the Yale student band scene
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Essays Section */}
          <FadeInSection>
            <section className="space-y-4">
              <div className="relative inline-block mb-1">
                <h3 className="text-xl font-bold uppercase relative z-10">
                  ESSAY
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
                      href="https://www.brinkatyale.com/issue-sixteen-1/live-the-questions-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors decoration-primary/20 hover:decoration-primary"
                    >
                      Live The Questions Now
                    </a> <span className="text-gray-500">—</span> <em>BRINK</em>
                  </h4>
                  <p className="text-foreground mt-0.5 leading-relaxed text-base">
                    on Arthur Sze, poetry translation, and AI
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Backlog Section */}
          <FadeInSection>
            <div className="pt-8 mt-8 text-foreground text-left text-xl font-medium leading-relaxed">
              read my archive:<br />
              <a
                href="https://www.sacbee.com/profile/307677236/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4"
              >
                Sacramento Bee
              </a> - transportation and business<br />
              <a
                href="https://yaledailynews.com/author/tina-li"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4"
              >
                Yale Daily News
              </a> - town-gown relations and local news<br />
              <a
                href="https://www.wsj.com/news/author/tina-li"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4"
              >
                Wall Street Journal
              </a> - technology
            </div>
          </FadeInSection>

          {/* Legacy Footer Section */}
          <FadeInSection>
            <div className="pt-4 flex justify-center">
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
