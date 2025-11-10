export interface CharacterSide {
  primary: string;
  descriptors: string[];
}

export interface CharacterPair {
  id: number;
  leftSide: CharacterSide;
  rightSide: CharacterSide;
  urlSlug: string;
  practicePrompt: string;
  landingHeadline: string;
}

export const characterPairs: CharacterPair[] = [
  {
    id: 1,
    leftSide: {
      primary: "Resentment",
      descriptors: ["anger", "bitterness", "grudges"]
    },
    rightSide: {
      primary: "Forgiveness",
      descriptors: ["letting go", "compassion", "understanding"]
    },
    urlSlug: "resentful",
    practicePrompt: "Think of one person you're angry with. For 30 seconds, imagine they're suffering too. Can you wish them peace?",
    landingHeadline: "Feeling Resentful?"
  },
  {
    id: 2,
    leftSide: {
      primary: "Fear",
      descriptors: ["anxiety", "worry", "panic"]
    },
    rightSide: {
      primary: "Courage",
      descriptors: ["bravery", "confidence", "faith"]
    },
    urlSlug: "anxious",
    practicePrompt: "Name the fear out loud. Then say: 'I can handle this one moment at a time.' Breathe slowly for 30 seconds.",
    landingHeadline: "Feeling Anxious?"
  },
  {
    id: 3,
    leftSide: {
      primary: "Dishonesty",
      descriptors: ["lying", "deception", "hiding"]
    },
    rightSide: {
      primary: "Honesty",
      descriptors: ["truthfulness", "transparency", "authenticity"]
    },
    urlSlug: "dishonest",
    practicePrompt: "What small truth could you tell right now? Practice saying it out loud, even if no one is listening.",
    landingHeadline: "Feeling Dishonest?"
  },
  {
    id: 4,
    leftSide: {
      primary: "Self-Pity",
      descriptors: ["victimhood", "helplessness", "woe is me"]
    },
    rightSide: {
      primary: "Gratitude",
      descriptors: ["thankfulness", "appreciation", "counting blessings"]
    },
    urlSlug: "self-pity",
    practicePrompt: "Name three things you have right now that you're grateful for. Say them out loud.",
    landingHeadline: "Feeling Sorry for Yourself?"
  },
  {
    id: 5,
    leftSide: {
      primary: "Selfishness",
      descriptors: ["self-centered", "greedy", "taking"]
    },
    rightSide: {
      primary: "Generosity",
      descriptors: ["giving", "sharing", "service"]
    },
    urlSlug: "selfish",
    practicePrompt: "Think of one small thing you could give to someone else today. Text them, offer help, or simply listen.",
    landingHeadline: "Feeling Selfish?"
  },
  {
    id: 6,
    leftSide: {
      primary: "Self-Justification",
      descriptors: ["excuses", "blame-shifting", "rationalizing"]
    },
    rightSide: {
      primary: "Accountability",
      descriptors: ["owning it", "responsibility", "amends"]
    },
    urlSlug: "defensive",
    practicePrompt: "Complete this sentence out loud: 'My part in this situation was...' Don't explain. Just own it.",
    landingHeadline: "Feeling Defensive?"
  },
  {
    id: 7,
    leftSide: {
      primary: "Pride",
      descriptors: ["arrogance", "ego", "superiority"]
    },
    rightSide: {
      primary: "Humility",
      descriptors: ["modesty", "openness", "right-sizing"]
    },
    urlSlug: "prideful",
    practicePrompt: "Think of someone who knows something you don't. Imagine asking them for help. How does that feel?",
    landingHeadline: "Feeling Prideful?"
  },
  {
    id: 8,
    leftSide: {
      primary: "Impatience",
      descriptors: ["restlessness", "irritation", "rushing"]
    },
    rightSide: {
      primary: "Patience",
      descriptors: ["tolerance", "calm", "acceptance"]
    },
    urlSlug: "impatient",
    practicePrompt: "Set a 30-second timer. Just wait. Notice the urge to move or check your phone. Let it be.",
    landingHeadline: "Feeling Impatient?"
  },
  {
    id: 9,
    leftSide: {
      primary: "Hatred",
      descriptors: ["contempt", "loathing", "spite"]
    },
    rightSide: {
      primary: "Love",
      descriptors: ["compassion", "kindness", "goodwill"]
    },
    urlSlug: "hateful",
    practicePrompt: "Think of someone you dislike. For 30 seconds, try to see them as a scared child. What changes?",
    landingHeadline: "Feeling Hateful?"
  },
  {
    id: 10,
    leftSide: {
      primary: "Envy",
      descriptors: ["jealousy", "comparison", "wanting what others have"]
    },
    rightSide: {
      primary: "Contentment",
      descriptors: ["satisfaction", "acceptance", "enough"]
    },
    urlSlug: "envious",
    practicePrompt: "Think of someone you envy. Now wish them well. Say it out loud: 'I'm happy for their success.'",
    landingHeadline: "Feeling Envious?"
  },
  {
    id: 11,
    leftSide: {
      primary: "Judgment",
      descriptors: ["criticism", "condemnation", "labeling"]
    },
    rightSide: {
      primary: "Acceptance",
      descriptors: ["tolerance", "non-judgment", "letting be"]
    },
    urlSlug: "judgmental",
    practicePrompt: "Think of someone you judged today. Imagine you don't know their whole story. What might they be going through?",
    landingHeadline: "Feeling Judgmental?"
  },
  {
    id: 12,
    leftSide: {
      primary: "Laziness",
      descriptors: ["procrastination", "avoidance", "sloth"]
    },
    rightSide: {
      primary: "Action",
      descriptors: ["initiative", "effort", "follow-through"]
    },
    urlSlug: "lazy",
    practicePrompt: "Pick the smallest task you've been avoiding. Do just the first step. Right now. 30 seconds.",
    landingHeadline: "Feeling Lazy?"
  },
  {
    id: 13,
    leftSide: {
      primary: "Gluttony",
      descriptors: ["excess", "overindulgence", "bingeing"]
    },
    rightSide: {
      primary: "Moderation",
      descriptors: ["balance", "restraint", "enough"]
    },
    urlSlug: "gluttonous",
    practicePrompt: "Before you reach for more, pause for 30 seconds. Ask: 'Do I need this, or do I just want it?'",
    landingHeadline: "Feeling Gluttonous?"
  },
  {
    id: 14,
    leftSide: {
      primary: "Lust",
      descriptors: ["craving", "obsession", "using others"]
    },
    rightSide: {
      primary: "Respect",
      descriptors: ["dignity", "boundaries", "honoring others"]
    },
    urlSlug: "lustful",
    practicePrompt: "Think of the person or thing you're craving. Ask: 'What am I really looking for?' Sit with that for 30 seconds.",
    landingHeadline: "Feeling Lustful?"
  },
  {
    id: 15,
    leftSide: {
      primary: "Greed",
      descriptors: ["hoarding", "never enough", "taking"]
    },
    rightSide: {
      primary: "Sharing",
      descriptors: ["abundance", "generosity", "giving"]
    },
    urlSlug: "greedy",
    practicePrompt: "Look at something you own that you don't really need. Imagine giving it away. How does that feel?",
    landingHeadline: "Feeling Greedy?"
  },
  {
    id: 16,
    leftSide: {
      primary: "Control",
      descriptors: ["manipulation", "dominating", "forcing"]
    },
    rightSide: {
      primary: "Trust",
      descriptors: ["letting go", "faith", "allowing"]
    },
    urlSlug: "controlling",
    practicePrompt: "Think of a situation you're trying to control. Say out loud: 'I can't control this, and that's okay.' Breathe.",
    landingHeadline: "Feeling Controlling?"
  }
];
