/* moves cursor to the first space of the textarea */
const textarea = document.querySelector('#poem-input');
let hasRunOnce = false;

/*function handleClick() {
  if (!hasRunOnce) {
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    textarea.value = '';
    hasRunOnce = true;
  }
}
*/
function handleInput() {
  userInput = textarea.value;
}

textarea.addEventListener('input', handleInput);
/*textarea.addEventListener('click', handleClick);*/

const placeholders = [
  '"To be or not to be, that is the question." - William Shakespeare',
  "[I wandered lonely as a Cloud]\nby William Wordsmith\nI wandered lonely as a Cloud\n\tThat floats on high o'er Vales and Hills,\nWhen all at once I saw a crowd,\n\tA host of golden Daffodils;\nBeside the Lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nContinuous as the stars that shine\n\tAnd twinkle on the Milky Way,\nThey stretched in never-ending line\n\tAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.\n\nThe waves beside them danced, but they\n\tOut-did the sparkling waves in glee:—\nA Poet could not but be gay\n\tIn such a jocund company:\nI gazed—and gazed—but little thought\nWhat wealth the shew to me had brought:\nFor oft when on my couch I lie\n\tIn vacant or in pensive mood,\nThey flash upon that inward eye\n\tWhich is the bliss of solitude,\nAnd then my heart with pleasure fills,\nAnd dances with the Daffodils.",
  'Because I could not stop for Death - (497)\n by Emily Dickenson\n\nBecause I could not stop for Death –\nHe kindly stopped for me –\nThe Carriage held but just Ourselves –\nAnd Immortality.\n\nWe slowly drove – He knew no haste\nAnd I had put away\nMy labor and my leisure too,\nFor His Civility –\n\nWe passed the School, where Children strove\nAt Recess – in the Ring –\nWe passed the Fields of Gazing Grain –\nWe passed the Setting Sun –\n\nOr rather – He passed Us –\nThe Dews drew quivering and Chill –\nFor only Gossamer, my Gown –\nMy Tippet – only Tulle –\n\nWe paused before a House that seemed\nA Swelling of the Ground –\nThe Roof was scarcely visible –\nThe Cornice – in the Ground –\n\nSince then – \'tis Centuries – and yet\nFeels shorter than the Day\nI first surmised the Horses\' Heads\nWere toward Eternity –',
  'The Road Not Taken\nby Robert Frost\n\nTwo roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.',
  'And you,\nmy father,\nthere on the sad height\nCurse,\nbless me now with your fierce tears,\nI pray.\n' + 
  'Do not go gentle into that good night\nRage,\nrage against the dying of the light."\n\n- Dylan Thomas',
  '"I am the master of my fate, I am the captain of my soul." - William Ernest Henley',
  '"To see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour." - William Blake',
  '"Not all those who wander are lost." - J.R.R. Tolkien',
  '"When a person tells you\nyou hurt them,\nyou don\'t get to decide you didn\'t."',
  '"Finally he said, "you know I love you right?" \n\nAnd I said "yes."\n\n' +
  'And he said, "and you know that I would never want to hurt you?"\n\n' + 
  'And I braced myself,\n\nbecause nobody ever says that unless they\'re about to hurt you." \n\n- Sue Zhao',
  '"A life without regrets would be no life at all."',
  '"The only way of getting somewhere is to leave something behind." - Matthew Mcconaughey',
  '"Tread softly because you tread on my dreams." - W.B. Yeats, "Aedh Wishes for the Cloths of Heaven"',
  'How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height\nMy soul can reach, when feeling out of sight\nFor the ends of being and ideal grace.\nI love thee to the level of every day’s\nMost quiet need, by sun and candle-light.\nI love thee freely, as men strive for right.\nI love thee purely, as they turn from praise.\nI love thee with the passion put to use\nIn my old griefs, and with my childhood’s faith.\nI love thee with a love I seemed to lose\nWith my lost saints. I love thee with the breath,\nSmiles, tears, of all my life; and, if God choose,\nI shall but love thee better after death.\n\n- Elizabeth Barrett Browning, "Sonnet 43"',
  '"Beauty is truth, truth beauty,—that is all\nYe know on earth, and all ye need to know."\n\n- John Keats - "Ode to a Nightingale"',
  '"In the middle of the journey of our life\nI found myself within a dark woods\nwhere the straight way was lost."\n\n- Dante Alighieri',
  '"Out of the ash / I rise with my red hair / And I eat men like air."',
  '"We real cool. We\nLeft school. We\nLurk late. We\nStrike straight.We\nSing sin. We\nThin gin. We\nJazz June. We\nDie soon."\n\n- "We real cool\nby Gwendolyn Brooks',
  '"On Children"\nYour children are not your children.\nThey are the sons and daughters\nof Life\'s longing for itself.\n'
  + 'They come through you but not from you,\nAnd though they are with you\nyet\nthey belong not to you.',
  '"On Pain"\nYour pain is the breaking of the shell\nthat encloses your understanding.\nEven as the stone of the fruit must break,\n'
  + 'that its heart may stand in the sun,\nso must you know pain.',
  '"Your joy is your sorrow unmasked.\nAnd the selfsame well from which your laughter rises\nwas oftentimes filled with your tears.\n'
  +'And how else can it be?\nThe deeper that sorrow carves into your being,\nthe more joy you can contain."',
  '"For what is it to die but to stand naked in the wind and to melt into the sun?\n'
  +'And what is it to cease breathing but to free the breath from its restless tides,\n' + 
  'that it may rise and expand and seek God unencumbered?"',
  '"Let there be spaces in your togetherness,\nAnd let the winds of the heavens dance between you.\n' + 
  'Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls."',
  '"And forget not that the earth delights to feel your bare feet and the winds long to play with your hair."',
  '"Your friend is your needs answered.\nHe is your field which you sow with love and reap with thanksgiving.\n' + 
  'And he is your board and your fireside.\nFor you come to him with your hunger,\nand you seek him for peace."',
  '"in Just-\nspring when the world is mud-\nluscious the little\nlame balloonman\nwhistles far and wee"',
  '[anyone lived in a pretty how town]\n by E. E. Cummings\n\nanyone lived in a pretty how town\n(with up so floating many bells down)\nspring summer autumn winter\nhe sang his didn’t he danced his did.\n\nWomen and men(both little and small)\ncared for anyone not at all\nthey sowed their isn’t they reaped their same\nsun moon stars rain\n\nchildren guessed(but only a few\nand down they forgot as up they grew\nautumn winter spring summer)\nthat noone loved him more by more\n\nwhen by now and tree by leaf\nshe laughed his joy she cried his grief\nbird by snow and stir by still\nanyone’s any was all to her\n\nsomeones married their everyones\nlaughed their cryings and did their dance\n(sleep wake hope and then)they\nsaid their nevers they slept their dream\n\nstars rain sun moon\n(and only the snow can begin to explain\nhow children are apt to forget to remember\nwith up so floating many bells down)\none day anyone died i guess\n(and noone stooped to kiss his face)\nbusy folk buried them side by side\nlittle by little and was by was\n\nall by all and deep by deep\nand more by more they dream their sleep\nno one and anyone earth by april\nwish by spirit and if by yes.\n\nWomen and men(both dong and ding)\nsummer autumn winter spring\nreaped their sowing and went their came\nsun moon stars rain',
  '"somewhere i have never travelled, gladly beyond\nany experience, your eyes have their silence:\n' +
  'in your most frail gesture are things which enclose me,\nor which i cannot touch because they are too near"',
  '"i carry your heart with me(i carry it in\nmy heart)i am never without it(anywhere\ni go you go,my dear;and whatever is done\n' +
    'by only me is your doing,my darling)"',
    '"The whiskey on your breath\nCould make a small boy dizzy;\nbut I hung on like death:\nSuch waltzing was not easy.\n\n' +
    'We romped until the pans\nSlid from the kitchen shelf;\nMy mother\'s countenance\nCould not unfrown itself.\n\n' +
    'The hand that held my wrist\nWas battered on one knuckle;\nAt every step you missed\nMy right ear scraped a buckle.\n\n' +
    'You beat time on my head\nWith a palm caked hard by dirt.\nThen waltzed me off to bed\nStill clinging to your shirt."',
    '"The Sanskrit word for war means a desire for more cows."',
    '"Pride is not\nthe opposite of shame...\nbut its source\nTrue humility is the only antidote to shame."\n\n - Uncle Iroh',
    '"It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid and stale."',
    '"The true mind can weather all the lies and illusions without being lost. The true heart can touch the poison of hatred without being harmed."',
    '"It\'s easy to do nothing, but it\'s hard to forgive."',
    '"Sometimes,\nthe best way\nto solve your own problems\nis to help someone else."',
    '"The only way to experience true wellbeing is to turn inward. \nThis is what yoga means – not up, not out, but in."',
    '"Life happens wherever you are, whether you make it or not."',
    '"Protection and power are overrated. I think you are very wise to choose happiness and love."',
    "Many things that seem threatening in the dark become welcoming when we shine a light on them.",
    "It's time for you to look inward\nand begin asking yourself the big questions:\nWho are you? And what do you want?\n\n- Uncle Iroh",
    "\tPiece A Shit \n\n When I see a frog\n\n & it takes a hop away from me \n\n it's like \n\n what the fuck man.",
    "The voice of the intellect is a soft one, \n but it does not rest until it has gained hearing. \n\n -Sigmund Freud",
    "All truly great thoughts are conceived by walking \n\n Friendrich Nietzsche",
    "Trees are poems the earth writes upon the sky. \n\n\t\tKahlil Gibran",
    "Though we travel the \nworld over to\nfind the beautiful,\nwe must carry it with us\nor we find it not\n\n\t\t- Ralph Waldo Emerson",
    "Love takes off\nmasks that we fear\nwe cannot live\nwithout and know\nwe cannot live\nwithin.\n\nJames Baldwin",
    "Flow with whatever\nmay happen and let\nyour mind be free. Stay\n centerd by accepting\n whatever you are doing.\nThis is the ultimate\n\nZhuangzi",
    "Do not waste\nyour time\nlooking for an obstacle\n- maybe\nthere is none.\n\n Franz Kafka",
    "Only the heart\nknows how to find\nwhat is precious. \n\n Fyodor Dostoevsky",
    "A Candle never\nLoses any of its\nLight while Lighting\nup another candle.\n\n\t\tRumi",
    '"Let us live for the\nbeauty of our own\nreality." \n\n - Charles Lamb',
    "Everything that is\nmade beautiful and\nfair and lovely is\nmade for the eye of\none who sees.\n\n \t\tRumi",
    '"It\'s no virtue to gain\nthe whole world.\nJust gain the heart\nof one person."\n\n\t\t- Saadi',
    "The truth knocks on the door and you say,\n'Go away, I'm looking for the truth,'\nand so it goes away.\n\nZen and The Art of Motorcycle Maintenance",
    "You have to love somebody enough to hate them.\n\nThe Absolutely True Diary of a Part-Time Indian",
    '"I was a warrior who fought with his pen."\n\n - The Absolutely True Diary of a Part-Time Indian\nby Sherman Alexie',
    "I grabbed my book\nand opened it up.\nI wanted to smell it. Heck,\nI wanted to kiss it.\nYes, kiss it.\n\n- The Absolutely True Diary of a Part-Time Indian\nby Sherman Alexie",
    "Memory is a long-armed woman with dangerous nails.\n\n'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "Some stories are true that never happened.\n\n'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "The difference between a house and a home is like the difference between a body and a soul. \n\n - 'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "No matter how hard we try, we can never really know another person's experience. We Are All Completely Beside Ourselves'",
    "It's not about what you deserve. \nIt's about what you believe, and I believe in love. \n\n - 'We Are All Completely Beside Ourselves'",
    "We're all lonely for something\nwe don't know we're lonely for...\nHow else to explain the curious feeling\nthat goes around feeling\nlike missing somebody we've never even met?\n\n- 'The Goldfinch' by Donna Tartt",
    "The world is always changing brightness and hotness and soundness, and there are people in it—babies and old people and animals and the insane—and it's all going on and on, and it's all magnificent. 'The Goldfinch' by Donna Tartt",
    "Consciousness is not just a byproduct of the brain, it is the source of all existence. \n\n'Beyond Biocentrism' by Robert Lanza and Bob Berman",
    "The Red Wheelbarrow\nby William Carlos Williams\n\n so much depends\nupon\n\na red wheel\nbarrow\n\nglazed with rain\nwater\n\nbeside the white\nchickens",
    "The Road Not Taken\nby Robert Frost\nTwo roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    "One Art\nby Elizabeth Bishop\nThe art of losing isn’t hard to master;\nso many things seem filled with the intent\nto be lost that their loss is no disaster.\n\nLose something every day. Accept the fluster\nof lost door keys, the hour badly spent.\nThe art of losing isn’t hard to master.\n\nThen practice losing farther, losing faster:\nplaces, and names, and where it was you meant\nto travel. None of these will bring disaster.\n\nI lost my mother’s watch. And look! my last, or\nnext-to-last, of three loved houses went.\nThe art of losing isn’t hard to master.\n\nI lost two cities, lovely ones. And, vaster,\nsome realms I owned, two rivers, a continent.\nI miss them, but it wasn’t a disaster.\n\n—Even losing you (the joking voice, a gesture\nI love) I shan’t have lied. It’s evident\nthe art of losing’s not too hard to master\nthough it may look like (Write it!) like disaster.",
    "Harlem\nby Langston Hughes\nWhat happens to a dream deferred?\nDoes it dry up\nlike a raisin in the sun?\nOr fester like a sore—\nAnd then run?\nDoes it stink like rotten meat?\nOr crust and sugar over—\nlike a syrupy sweet?\n\nMaybe it just sags\nlike a heavy load.\n\nOr does it explode?",
    '"Hope" is the thing with feathers\nby Emily Dickenson\n\n“Hope” is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI’ve heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.',
    '"Until you make the unconscious conscious,\nit will direct your life\nand you will call it fate"',
    '"The secret of being miserable\nis to have leisure to bother about\nwhether you are happy or not.\n\nThe cure for it is occupation,\nbecause occupation means pre-occupation;\nand the pre-occupied person is neither happy nor unhappy,\nbut simply alive and active.\nThat is why it is necessary to happiness that one should be tired."\n\n - George Bernard Shaw, Misalliance',
    '"If one advances confidently\nin the direction of [their] dreams,\nand endeavors to live the life [they] have imagined,\n[they] will meet with success unexpeced\nin the common hours.',
    '"Words have the power\nto both destroy and heal."\n\n- Maya Angelou',
    '"The human voice\nis the most perfect instrument\nof music in the world."\n\n- Wolfgang Amadeus Mozart',
    '"The right word\nmay be the difference\nbetween life and death."\n\n- Jean-Paul Sartre',
    '"The tongue\nhas the power\nof life and death,\nand those who love it\nwill eat its fruit."\n\n- Proverbs 18:21',
    '"The pen\nis the tongue\nof the mind."\n\n- Miguel de Cervantes',
    '"The pen is the tongue of the mind."\n\n- Miguel de Cervantes',
    'Those who possess\nthe power to wield words\nhold within them\nthe ability to shape and control\nthe very narrative of humanity.\n\nFor it is through words that ideas are born,\ndreams are nurtured,\nand revolutions are ignited.\n\nWords possess the potential\nto build bridges or erect walls,\nto inspire unity\nor sow division,\nto ignite love\nor fuel hatred.\n\nThe storytellers of our world\nhold immense responsibility,\nfor in their hands lies the power\nto shape the destiny of civilizations."\n\n- ChatGPT'
];

/* random placeholder */
function setRandomPlaceholder() {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    const textarea = document.querySelector("#poem-input");
    textarea.placeholder = placeholders[randomIndex];
  }
  window.onload = setRandomPlaceholder;

  /* random prompt */
    // Define an array of all prompts, including those that are displayed for the week
    const allPrompts = [
      /* Monday */ "If you could say how high the bees knees bees, how high would you please to sees?",
      /* Tuesday */ "Speak to me about your flow - describe its ebbs and bumps.",
      /* Wednesday */ "Imagine you live in the future. What is your past?",
      /* Thursday */ "Get out a 30 second timer, run it, and write your exact thoughts for that time. Ready? Go.",
      /* Friday */ "Working overtime at a space aquarium be like...",
      /* Saturday */ "Patronize yourself.",
      /* Sunday */ "Windy mountain-top thoughts.",
      "Describe your safe place through senses.",
      "What thoughts bubble up when you're running, meditating,\n yoga-ing, working-out, laying in bed trying to go to sleep, etc.?",
      "Choose one of the following animals and describe your surroundings from that perspective: butterfly, ant, cat, flower, budding sprout, bird, cloud, fish, whale, coral polyp, plankton, or other (If you're feeling original).",
      "What has shaped you into who you are?",
      "Pick a location and a sense. Write using only those two things as reference.",
      "Write a poem about the beauty of a mundane object.",
      "Explore the concept of time and its effect on human emotions.",
      "Describe a vivid memory from your childhood using sensory language.",
      "Write a poem inspired by the changing seasons.",
      "Create a poem that captures the essence of a specific color.",
      "Imagine a conversation between two inanimate objects and write a poem about it.",
      "Write a poem that expresses the feeling of being lost in a crowd.",
      "Explore the concept of dreams and their significance in our lives.",
      "Write a poem inspired by a piece of artwork or a painting.",
      "Describe a moment of stillness in nature and the emotions it evokes.",
      "Create a poem about the relationship between light and darkness.",
      "Write a poem that celebrates the beauty of imperfections.",
      "Explore the concept of identity and its connection to personal experiences.",
      "Write a poem that captures the essence of a specific place or location.",
      "Create a poem inspired by a favorite book or literary character.",
      "Describe a personal struggle and the strength it has given you.",
      "Write a poem about the power of words and their ability to shape reality.",
      "Explore the concept of love in all its different forms.",
      "Create a poem that reflects on the passage of time and the inevitability of change.",
      "Write a poem that celebrates the beauty of the natural world."
    ];

    const elementarySchoolPrompts = [
      "Write a poem about your favorite animal.",
      "Describe a rainy day using your five senses.",
      "Create a poem about a magical adventure.",
      "Write a poem about friendship.",
      "Imagine you are a superhero. Write a poem about your superpowers.",
      "Describe your favorite place in nature.",
      "Write a poem about a funny or silly moment.",
      "Create a poem about your favorite food.",
      "Imagine you are a tiny insect. Write a poem about your day.",
      "Write a poem about your favorite season.",
      "Describe the colors of a beautiful sunset.",
      "Create a poem about the sound of laughter.",
      "Write a poem about a day at the beach.",
      "Imagine you are a flower. Write a poem about your growth.",
      "Describe the feeling of being scared or nervous.",
      "Create a poem about a special family tradition.",
      "Write a poem about a dream you had last night.",
      "Imagine you can fly. Write a poem about where you would go.",
      "Describe a peaceful moment in your day.",
      "Create a poem about the sound of raindrops.",
      "Write a poem about your favorite hobby.",
      "Imagine you are a detective. Write a poem about solving a mystery.",
      "Describe the taste of your favorite ice cream flavor.",
      "Create a poem about a beautiful sunrise.",
      "Write a poem about a place you would love to visit.",
      "Imagine you are a bird. Write a poem about flying high in the sky.",
      "Describe the feeling of happiness.",
      "Create a poem about your favorite sports activity.",
      "Write a poem about a funny animal you've seen.",
      "Imagine you are a pirate. Write a poem about your pirate ship.",
      "Describe the smell of fresh flowers.",
      "Create a poem about a rainy day indoor activity.",
      "Write a poem about something you are grateful for.",
      "Imagine you are a character in your favorite story. Write a poem about your adventure.",
      "Describe the feeling of excitement.",
      "Create a poem about your favorite holiday.",
      "Write a poem about a secret hiding place.",
      "Imagine you are a superhero sidekick. Write a poem about your teamwork.",
      "Describe the sound of waves crashing on the shore.",
      "Create a poem about your favorite animal at the zoo.",
      "Write a poem about a time when you felt proud of yourself.",
      "Imagine you are a magical creature. Write a poem about your magical powers.",
      "Describe the feeling of love."
    ]

    const middleSchoolPrompts = [
      "Write a poem about a place that makes you feel peaceful.",
      "Describe a character from a book or movie using vivid imagery.",
      "Create a poem that explores the concept of identity.",
      "Write a poem about a personal struggle and how you overcame it.",
      "Imagine you are a time traveler. Write a poem about your journey.",
      "Describe a memorable moment with a friend using sensory language.",
      "Create a poem about a social issue that is important to you.",
      "Write a poem that captures the essence of a favorite song.",
      "Imagine you are a poet in ancient times. Write a poem inspired by the past.",
      "Describe the feeling of anticipation before a special event.",
      "Create a poem about the beauty of nature and its importance.",
      "Write a poem about a dream or goal you have for the future.",
      "Imagine you are an object in outer space. Write a poem about your perspective.",
      "Describe a place you have never been to but would love to visit someday.",
      "Create a poem about the power of kindness and compassion.",
      "Write a poem that reflects on the meaning of success.",
      "Imagine you are a raindrop. Write a poem about your journey from the sky to the ground.",
      "Describe a moment when you felt inspired by someone you admire.",
      "Create a poem about the impact of technology in our lives.",
      "Write a poem about a significant historical event.",
      "Imagine you are a painter. Write a poem that describes the colors on your palette.",
      "Describe the feeling of being caught in a storm, both literally and metaphorically.",
      "Create a poem that explores the concept of courage.",
      "Write a poem about a personal discovery or realization.",
      "Imagine you are a scientist. Write a poem about a fascinating scientific concept.",
      "Describe the taste of your favorite food in detail.",
      "Create a poem about the importance of preserving the environment.",
      "Write a poem that reflects on the meaning of true friendship.",
      "Imagine you are an animal in the wild. Write a poem about your daily life.",
      "Describe a moment when you felt proud of a personal accomplishment.",
      "Create a poem about the power of words to bring about change.",
      "Write a poem that explores the concept of love in all its forms.",
      "Imagine you are a traveler exploring a foreign land. Write a poem about your experiences.",
      "Describe the sound of a bustling city street.",
      "Create a poem about a lesson you have learned from a difficult experience.",
      "Write a poem that reflects on the passage of time and the inevitability of change.",
      "Imagine you are a photographer. Write a poem inspired by a favorite photograph.",
      "Describe a moment of quiet introspection and the thoughts it evokes.",
      "Create a poem about the beauty and power of imagination.",
      "Write a poem about a historical figure who inspires you.",
      "Imagine you are a dancer. Write a poem that captures the movement and emotion of a dance.",
      "Describe the feeling of standing up for something you believe in.",
      "Create a poem about the importance of empathy and understanding.",
      "Write a poem that reflects on the meaning of home."
    ];
    
   
// Initialize the last prompt index as -1 to indicate no previous prompt
let lastPromptIndex = -1;

// Function to get a new prompt
function getNewPrompt() {
  const container = document.getElementById("poem-prompt");
  let randomIndex;

  // Generate a new random index until it's different from the last prompt index
  do {
    randomIndex = Math.floor(Math.random() * allPrompts.length);
  } while (randomIndex === lastPromptIndex);

  lastPromptIndex = randomIndex;
  container.innerText = allPrompts[randomIndex];
}

    /*function getNewPrompt() {
      const container = document.getElementById("poem-prompt");
      const randomIndex = Math.floor(Math.random() * allPrompts.length);
      container.innerText = allPrompts[randomIndex];
    }*/
    
    // Function to handle the click event on the new prompt button
    function handleButtonClick() {
      getNewPrompt();
    }
    
    // Function to handle the click event on the prompt of the day button
    function handlePoemOfDayButtonClick() {
      const container = document.getElementById("poem-prompt");
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay();
      container.innerText = "Prompt of the Day:\n" + allPrompts[dayOfWeek];
    }

     // function to get a new poem.
    function getNewPoem() {
      /*const container = document.getElementById("poem-div");
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      container.innerText = placeholders[randomIndex]; */
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      const textarea = document.querySelector("#poem-input");
      textarea.placeholder = placeholders[randomIndex];
    }
    
    // Function to handle the click event on the new poem button
    function handleNewPoemButtonClick() {
      getNewPoem();
    }
    
    // Add event listener to the new prompt button
    const newPromptButton = document.getElementById("new-prompt-button");
    newPromptButton.addEventListener("click", handleButtonClick);
    
    // Add event listener to the prompt of the day button
    const poemOfDayButton = document.getElementById("poem-of-the-day-button");
    poemOfDayButton.addEventListener("click", handlePoemOfDayButtonClick);

    // Add event listener to the new poem button
    const newPoemButton = document.getElementById("new-poem-button");
     newPoemButton.addEventListener("click", handleNewPoemButtonClick);
    
    // When the page loads, get the current prompt
    document.addEventListener("DOMContentLoaded", function () {
      getNewPrompt();
    });

  /* make the enter prompt here disappear when user starts typing */
  const input = document.getElementById('poem-input');
  const enterPoem = document.getElementById('enter-poem');

  // Hide the prompt text when the input field changes
  input.addEventListener('input', () => {
    if (enterPoem) {
      enterPoem.textContent = '';
    }
  });

  // hide the prompt text once it has been seen
  if (localStorage.getItem('seenPrompt')) {
    if (enterPoem) {
      enterPoem.textContent = '';
    }
  } else {
    localStorage.setItem('seenPrompt', true);
  }