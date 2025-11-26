import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Writing = () => {
  const thematicSections = [
    {
      title: "On Creativity & Craft",
      description: "Essays exploring the nature of creative work, artistic practice, and the pursuit of excellence.",
      essays: [
        {
          title: "The Architecture of Thought",
          date: "March 15, 2024",
          excerpt: "On the physical spaces that shape how we think, from libraries to cafes to solitary walks.",
          slug: "architecture-of-thought"
        },
        {
          title: "Notes on Craftsmanship",
          date: "December 10, 2023",
          excerpt: "What old-world artisans can teach us about modern creative work.",
          slug: "notes-on-craftsmanship"
        }
      ]
    },
    {
      title: "Culture & Society",
      description: "Reflections on how we live, what we value, and the forces that shape our collective experience.",
      essays: [
        {
          title: "Reading as Resistance",
          date: "February 8, 2024",
          excerpt: "In an age of distraction, the act of sustained reading becomes a radical choice.",
          slug: "reading-as-resistance"
        },
        {
          title: "The Rhythm of Ideas",
          date: "January 22, 2024",
          excerpt: "How the tempo of our daily lives influences the quality of our thinking.",
          slug: "rhythm-of-ideas"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xl italic text-muted-foreground mb-2">
            Essays & Commentary
          </p>
        </div>

        <div className="space-y-16">
          {thematicSections.map((section) => (
            <section key={section.title} className="space-y-8">
              <div className="border-b-2 border-primary pb-3">
                <h2 className="text-2xl mb-2">{section.title}</h2>
                <p className="text-muted-foreground italic">
                  {section.description}
                </p>
              </div>
              
              <div className="space-y-8 pl-4">
                {section.essays.map((essay) => (
                  <article key={essay.slug} className="border-b border-border pb-6">
                    <p className="text-sm text-muted-foreground mb-2">{essay.date}</p>
                    <h3 className="text-xl mb-2 font-normal">
                      <Link 
                        to={`/writing/${essay.slug}`}
                        className="text-foreground no-underline hover:text-primary transition-colors"
                      >
                        {essay.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {essay.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Writing;
