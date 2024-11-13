//Setting random word arrays
const group1 = ["pop group of", "family of", "pack of", "herd of", "high council of", "regiment of",
  "bunch of", "school of", "army of", "assembly of", "mass of", "collective of", "union of", "nation of",
  "gathering of", "association of", "forces of", "cooperation of", "class of", "alliance of",
  "cluster of", "ensemble of", "circle of", "league of", "faction of", "society of", "club of", 
  "partnership of", "guild of", "consortium of"];

const subject1 = ["heathens", "cows", "stormtroopers", "dogs", "cats", "generals", "tigers", 
   "farmers", "gamers", "shepherds", "basketball players", "guardians", "cops", "giraffes",
"frogs", "heretics", "robots", "whales", "knights", "gladiators", "chinchillas", 
"gorillas", "hedgehogs", "crocodiles", "ninjas", "dwarfs", "beavers", "pandas", "Daves", "sharks"];

const adverbs = ["quietly", "loudly", "quickly", "nicely", "painstakingly", "happily", "boldly",
  "carefully", "accidentally", "unexpectedly", "successfully", "often", "occasionally", "already", 
  "frequently", "seldom", "never", "rarely", "rudely", "neatly", "eagerly", "always", "rapidly", 
  "hungrily", "foolishly", "just", "exceptionally", "hardly ever", "sometimes", "proudly"];

const verbs = ["kicked", "attacked", "jumped", "ran over", "investigated", "stomped", "cooked",
  "threw", "argued", "bounced", "described", "dropped", "fought", "generated", "beamed up", "held", 
  "hid", "installed", "juggled", "lifted", "measured", "nudged", "owned", "painted", 
  "roasted", "scrubbed", "shook", "smelt", "unfolded", "warmed"];

const numbers = ["20", "400", "69", "77", "2,000", "3", "42", "100", "364", "700", "5,600", "27", 
  "34,000", "68", "83", "4", "22", "17", "10", "1,000,000", "73,000", "1,800", "33", "629", "403", 
  "892", "a shit load of", "a metric ton of", "33,000", "2"];

const adjectives = ["attractive", "stunning", "gorgeous", "radiant", "autistic", "intellectual", 
  "curious looking", "authentic", "extraverted", "angry looking", "lovely", "melancholic", "panicked", 
  "creative", "confused", "American", "chic", "classic", "Egyptian", "flawless", "gargantuan", 
  "handsome", "heavenly", "sensational", "illustrious", "jaded", "jumbo", "luxurious", "rustic", 
  "artisanal"];

const group2 = ["bowls of", "cans of ", "cartons of", "tubs of ", "pots of", "jugs of", "trays of", 
  "shipping crates of", "trunk fulls of", "six-packs of", "blister packs of", "packets of", 
  "barrels of", "boxes of", "hampers of", "flats of", "coffers of", "cases of", "chests of", 
  "safe deposit boxes full of", "urns of", "receptacles of", "donation bins of", "drums of", 
  "vessels of", "holders of", "bags of", "crock pots of", "reservoirs of", 
  "repositories of"];

const subject2 = ["spaghetti", "soup", "strippers", "melted chocolate", "feces", "plastic models", 
  "video games", "dice", "butter chicken", "bread", "mice", "celery stalks", "barnacles", 
  "balls", "frosted flakes", "hand cream", "vape juice", "pills", "Rubiks cubes", "tungsten", "stew", 
  "ribeye steaks", "goat cheese", "turtles", "plastic bottle caps", "coat hangers", "coleslaw", 
  "ranch dressing", "heavy metal bands", "chimmichurri"];

const randomSentenceGenerator = () => {

  //establish the array to hold the random sentence and its first value of "The"
  const randomSentence = ["The"];

  //creates a random number generator to be used later 
  let randomNumber = Math.floor(Math.random() * 30);

  //random word selector
  const randomWord = (arr) => {
    return arr[randomNumber];
  }

  randomSentence.push(randomWord(group1), randomWord(subject1));

  //50% chance to add more subjects to sentence
  let i = Math.floor(Math.random() * 2);
  let j = 0;
  while (i % 2 == 0 && j < 2) {
    randomSentence.push("and", `${subject1[Math.floor(Math.random() * 30)]}`);
    i = Math.floor(Math.random() * 2);
    j++;
  }

  randomSentence.push(randomWord(adverbs), randomWord(verbs), randomWord(numbers), randomWord(adjectives),
  randomWord(group2), randomWord(subject2));

  const finalRandomSentence = randomSentence.join(" ") + "."

  return finalRandomSentence;


}

console.log(randomSentenceGenerator());

