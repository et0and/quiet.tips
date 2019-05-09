// bigHead = 1 makes content a headline
//textSize and bubbleType only needed for small text
var data = [
  { "bigHead": 0,
    "textContent": [
    "Is anybody there?",
    "I'm here! Hi!",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "I need some peace and quiet right now",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "I need some peace and quiet now",
      "No worries, I'm here to help!",
      "I'm going to go over some resources that might help you.",
      "Is that okay with you?",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "Let's do it",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "Let's do it",
      "Awesome!",
      "Life today can be such a rush",
      "There are many things demanding of our time, and if we don't take some time out it can lead to a lot of stress",
      "It's important to be able to take time to reflect in quiet and inner stilness"
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bText": "Yeah I agree",
      "bImg": "thumbs-up"
    }
  },

  { "bigHead": 0,
    "textContent": [
      "Yeah I agree",
      "Right? Okay then",
      "Let's start with your tinana, your body",
      "How well do you look after your tinana?",
      "Your physical health is so important to your mental health",
      "You've probably heard this to death but make sure you",
      "Eat well 🍲",
      "Sleep well 💤",
      "Drink lots of water 💦",
      "Keep taking any prescribed medication so you stay consistent, this is very important!",
      "Stay active 🏃‍♀️ (you don't need to be an athlete, but even simple walks outside with some fresh air can be really good!",
      "And try to limit alcohol and drug use if you can"
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "Cool, what else do you recommend?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "Cool, what else do you recommend?",
      "Look after your hinengaro, your mind",
      "Your mind and your emotions are precious",
      "Try to be mindful of your whakaaro, your thoughts, as you go about your day",
      "Things like meditation can help here, but most importantly",
      "Keep talking to people, friends and whānau, especially if you are feeling down",
      "Don't let work take over your life. Try to keep a healthy balance between work-life if you can",
      "And know where to go if you do need help!",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "Where do I go if I need it?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "Where do I go if I need it?",
      "I'm glad you asked 😊",
      "The top right of your screen has a Help section",
      "There you will find a list of some great people you can talk to for help",
      "There's help out there if you need it, you only need to ask! 😃",
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "clap",
    }
  },

  { "bigHead": 1,
    "textContent": "screens screens screens... tap click tap click tap",
    "vidContent": "sun",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "*click*",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "*click*",
      "how many times a day do you tap, swipe, click, type and pinch?",
      "...to access a simple fact...",
      "that the brain could recall...",
      "instantly."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "maybe 100?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "maybe 100?",
      "More like 2,000.",
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "turnt",
    }
  },

  { "bigHead": 1,
    "textContent": "yeah...",
    "vidContent": "chickens2",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "am i dumb?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "am i dumb?",
      "No.",
      "You're an agent using a tool.",
      "A tool designed in a simpler time.",
      "With the principles of mass production in mind.",
      "A tool that references real objects.",
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "a metaphor?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "a metaphor?",
      "A metaphor.",
      "Screens supplant the printed book… household appliances… buttons, switches and knobs… the assembly line… one size fits all.",
      "You are not dumb.",
      "Quite the opposite…"
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "hands",
    }
  },


  { "bigHead": 1,
    "textContent": "your<br/> smart phone<br/> is dumb.",
    "vidContent": "dumb",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "that's mean",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "that's mean",
      "Really?",
      "When’s the last time Siri gave you information <i>before</i> you asked for it?"
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "...",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "...",
      "Our technology is stuck in the mechanized dream of the Industrial Age.",
      "It ignores the rich datascapes of the Information Age.",
      "It ignores reality."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "...it ignores me!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "...it ignores me!",
      "Precisely!"
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "sad",
    }
  },

  { "bigHead": 1,
    "textContent": "putting the user<br/>first again",
    "vidContent": "user",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "how?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "how?",
      "Understanding.",
      "Understanding you.",
      "Understanding reality.",
      "The interface must understand the user and conform to his needs.",
      "An intelligent tool for an intelligent agent."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "is this possible?",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "is this possible?",
      "The technology exists.",
      "And is awaiting application.",
      "Combining collected data with an intelligent system will bring about a fluid technological revolution."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "fist",
    }
  },

  { "bigHead": 1,
    "textContent": "THE MUTABLE INTERFACE",
    "vidContent": "mutable",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "one size fits none!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "one size fits none!",
      "The industrial paradigm of standard forms is no longer relevant.",
      "Combining real-time data with intelligent understanding can craft a unique experience.",
      "Unique to you.",
      "Unique to the moment."
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "I can almost see it…",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "I can almost see it…",
      "Imagine an interface that knows when you’re home, and surfaces social content…",
      "knows when you’re working and surfaces emails…",
      "knows when you’re traveling and surfaces navigation…"
    ],
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "yes!!!",
    }
  },

  { "bigHead": 0,
    "textContent": [
      "yes!!!",
      "Mutable interfaces.",
      "Fluid technology.",
      "This is the future."
    ],
    "buttonContent": {
      "isRoundButton": 1,
      "bImg": "man",
    }
  },

  { "bigHead": 1,
    "textContent": "<br/>REFLECT REALITY.",
    "vidContent": "mirror",
    "buttonContent": {
      "isRoundButton": 0,
      "bText": "xxxend",
    }
  },
];
