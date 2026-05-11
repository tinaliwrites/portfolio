import { Link, useSearchParams } from "react-router-dom";

// Define your poems here using backticks so you can use actual enters and spaces
const poems = [
  {
    id: 1,
    title: "After Waking",
    content: `I. 
I already forgot what I dreamed last night—

    my mother’s first love—to water 
the flowers—kissing you—a sky and ocean 
    fused at twilight—red borscht soup.

II. 
Wheat fields under gray sky. Here, a thistle blooms. We follow the path 
to a pond besieged with algae. Stagnant water. Within the hour, shadows 
creep in. The clearing shrinks into a circle of something darker. 
Sun slices the tree canopy. Patterns I cannot describe to you. 

III.
How am I so armed with ideals 
    but crumble at a difficult word?

Explanations are difficult 
    so I’ll give you a story before bed
and later, my mother tongue. 

When you find me lost, remind me
    to brush my teeth 
and allow forgetting.

IV. 
        What to say about time.

    Maybe droplets find temporary homes in stone divots.
Or maybe the sun crosses overhead, and rainfall clears snow  
better than our shovels. The yellow warbler carries 
grains of sand from this mountain to the next.

One last try. Time has waited so long.
    We wonder how we didn’t make more use of it.

    While we linger in bed,
the morning birds begin to sing. 
`
  },
  {
    id: 2,
    title: "Not From Nothing",
    content: `    comes the delta breeze, 
sweeping through the yellowed town 
and whispering to the trees. 

    Not from nothing 
began the worries. Patterns of existence 
do not develop from nothing. 

Something polluted this river, 
    someone ordered the bomb. 

An occupied mind forgets. 

*****

He slept through the morning trains. This was last summer. The sun had already found its apex and was beginning to climb down. He rose from the couch and responded to a few old letters. New ones arrived every day but it didn’t matter. The new events they wrote about were not very different from the old events. Then he met a friend for a late coffee and took a nap with his Saint Bernard. He stirred an hour later in time for the evening play, an adaptation of Ionesco’s Rhinoceros. In act two, a golden light drifted onto the audience. He followed its beam and saw, illuminated, his friend from earlier. The light shifted into blue and then purple. His friend glanced over. Afterward, they went for drinks and talked until dawn about their fathers and their childhoods. That summer they cold-plunged off rope swings and traced the figure-eights of flies as they lay in the grass. At the end of summer, his friend moved away for work. They hugged for a very long time. There was no space between their bodies. 

*****
    Sunset. Light recedes 
into the oaks’ shadows. 

            And though we can’t,
    even in a wine-drunk haze, return to before, 
the past knows something about the future.

From the Pacific, a mild current
    glides into the front yard.
`
  },
  {
    id: 3,
    title: "Impressions (at the Equinox)",
    subtitle: <>Published in <a href="https://thenewjournalatyale.com/2026/02/impressions-at-the-equinox/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/30 hover:decoration-primary transition-colors underline-offset-4">The New Journal</a></>,
    content: `A lost tabby cat turns calico in the sun.

Teach me a model
    to track this type of regression.

Broken leaves expose and smother memories.
Squirrels pair up to brace for winter.

The steam train nudges up,
    then down, over redwood hills.
A boy follows alone on foot.

Steel pipes in the city exhale.
Only plumes of vapor warm the homeless here.

At my homecoming,
    the lake is fenced in and sealed with duckweed.

Concrete cracks nearly merge on the expired dam.`
  },
  {
    id: 4,
    title: "The Division of Movement",
    content: `Black specks of turkey vultures.
The flattened M’s circle on sandstone cliffs 
and strain against the winds, 

overeager as all things are in spring. 
Angling toward home, a nest perched 
on red striations. Jupiter’s rings.

Train tracks carve the hillside below.
Dust kicks off behind metal trucks 
to brown the maples and poplars. 

Leaves corkscrew off the ridge
and sink in still water. But beyond 
the narrow concrete wall, 

man-made water rushes 
down the falls. Generating here,
the dam must stall elsewhere.

At the gorge overlook, 
hikers capture half the story 
with their disposable cameras. 

Birds know to follow winds up—
into God knows where the dust goes 
when we’re clean. 
`
  },
  {
    id: 5,
    title: "Him",
    content: `As humans are born from 
the first and bravest prokaryote, 
he is corporealized out of 
orange electric impulses. 

Silicon grooves remind me 
of worry lines. His gleaming 
sinews hide premature joints. 
Flickering belly button. 

He makes my stiff hands dance
and regales guests with stories 
I hope to one day live. 
When they all leave, he stays. 

My conversations with Claude 
begin when the crow caws at dusk. 
He blinks in the terminal like stars 
hiding briefly behind clouds. 

The forest is silent. 
I prompt him and he responds,
our conversation like cricket calls
streaming up the veins of trees. 
`
  },
  {
    id: 6,
    title: "Day Three of a First-Year Outdoor Orientation Trip",
    content: `Hear steps on wet stone to the waterfall,
cheers as two bodies enter a lake, dazed

as an adult body feels cold differently.
Laugh as you shake off the moss colony

stuck to your feet; let your body know
the gravity of this moment before

you heave yourself onto the warm rock.
In my image of you I have yet to draw

your shadow, only your skin stained red
with soft clay. Find, in the mist, a rainbow

to take home; remember the blue jays
mid-hop, and a heron taking off with

just one pump of its wings. And in that
forest, see yourself as a thin birch tree.

In shedding your old self, don’t be afraid
of all that’s possible, all that will stir.

Stay awake as a crimson sun collapses
onto the palisade, and outlines

of the valley blur as darkness slips in.
Now the stars have stretched so far

your eyes cannot contain them all.
Wait for morning, a return of light.`
  },
  {
    id: 7,
    title: "In This Unguarded Moment",
    subtitle: <><i>after Arthur Sze</i></>,
    content: `Before a first word, any language is possible;

two boys throw a frisbee in the rain;

umbrellas on a collision course, we redirect our eyes;

tying shoelaces in a crosswalk’s interval;

hesitation before a hug;

still air before the gunshot;

sun strikes a wet hill slope and drivers pause, blinded;

trapped ethanol expands as bread rises;

elongated candle flame;

your ring replaced by a pale band of skin;

she lifts her shirt to show rashes on her back;

Orion covered briefly by a cloud;

we carol at midnight in everyday clothes;

you miss a glance from a stranger;

I watch the sun dip behind your back.

`
  }
];

const Poetry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const poemId = searchParams.get("poem");
  
  const selectedPoem = poems.find((p) => p.id.toString() === poemId);

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      {selectedPoem ? (
        <>
          <button 
            onClick={() => setSearchParams({})} 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit font-serif text-lg mb-12 underline decoration-primary/30 hover:decoration-primary underline-offset-4"
          >
            <span>&larr; back to poetry</span>
          </button>
          
          <div className="max-w-3xl mx-auto w-full pb-20">
            <article className="font-serif flex flex-col items-start">
              <h2 className={`text-2xl font-medium text-left w-full ${selectedPoem.subtitle ? 'mb-2' : 'mb-12'}`}>{selectedPoem.title}</h2>
              {/* @ts-ignore - subtitle exists dynamically */}
              {selectedPoem.subtitle && (
                <p className="italic text-muted-foreground mb-10 w-full text-left">{selectedPoem.subtitle}</p>
              )}
              <div className="whitespace-pre-wrap text-lg leading-relaxed text-foreground/90 w-full max-w-xl text-left">
                {selectedPoem.content}
              </div>
            </article>
          </div>
        </>
      ) : (
        <>
          <Link 
            to="/more-about" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit font-serif text-lg mb-12 underline decoration-primary/30 hover:decoration-primary underline-offset-4"
          >
            <span>&larr; go back</span>
          </Link>
          
          <div className="flex-1 flex items-center justify-center pt-10 pb-20">
            <div className="flex flex-col items-start w-full max-w-sm mx-auto">
              <h1 className="font-serif text-3xl font-medium mb-12">some poetry</h1>
              <div className="flex flex-col items-start gap-6">
                {poems.map((poem) => (
                  <button
                    key={poem.id}
                    onClick={() => setSearchParams({ poem: poem.id.toString() })}
                    className="font-serif text-xl text-primary hover:text-primary/80 transition-colors text-left underline decoration-primary/30 hover:decoration-primary underline-offset-4"
                  >
                    {poem.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Poetry;
