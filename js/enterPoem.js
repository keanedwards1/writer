/* moves cursor to the first space of the textarea */
const textarea = document.querySelector('#poem-input');
let hasRunOnce = false;

function handleClick() {
  if (!hasRunOnce) {
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
    textarea.value = '';
    hasRunOnce = true;
  }
}
textarea.addEventListener('click', handleClick);

const placeholders = [
  '"To be or not to be, that is the question." - William Shakespeare',
  'I wandered lonely as a cloud\nThat floats on high o\'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils."\n\n- William Wordsworth, "I Wandered Lonely as a Cloud"',
  '"Because I could not stop for Death, He kindly stopped for me." - Emily Dickenson',
  '"Two roads diverged in a wood, and I—I took the one less traveled by,' 
  + ' and that has made all the difference." - Robert Frost',
  'And you, my father, there on the sad height,\nCurse, bless me now with your fierce tears, I pray.\n' + 
  'Do not go gentle into that good night.\nRage, rage against the dying of the light."\n\n- Dylan Thomas',
  '"I am the master of my fate, I am the captain of my soul." - William Ernest Henley',
  '"To see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour." - William Blake',
  '"Not all those who wander are lost." - J.R.R. Tolkien',
  '"Who are you when you\'re not performing for everyone else."',
  '"When a person tells you\nyou hurt them,\nyou don\'t get to decide you didn\'t."',
  '"Finally he said, "you know I love you right?" \n\nAnd I said "yes."\n\n' +
  'And he said, "and you know that I would never want to hurt you?"\n\n' + 
  'And I braced myself,\n\nbecause nobody ever says that unless they\'re about to hurt you." \n\n- Sue Zhao',
  '"Nobody cares. Nobody cares! Worry about yourself, your family, and the people that are important to you."',
  '"We work jobs that we hate, to but things we don\'t need, to impress people we don\'t like." - Tyler Durden',
  '"A life without regrets would be no life at all."',
  '"Don\'t ever let someone tell you, you can\'t do something.\nNot even me. You got a dream? you got to protect it." - Will Smith',
  '"The worst thing about betrayal is that it never comes from the enemy."',
  '"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can\'t achieve it." - Leonardo Dicaprio',
  '"The only way of getting somewhere is to leave something behind." - Matthew Mcconaughey',
  '"There\'s a difference between knowing the path and walking the path." - Neo',
  '"Hard work beats talent everytime." - Leonardo DiCaprio',
  '"Tread softly because you tread on my dreams." - W.B. Yeats, "Aedh Wishes for the Cloths of Heaven"',
  '"How do I love thee? Let me count the ways.\n\nI love thee to the depth and breadth and height\n\nMy soul can reach." - Elizabeth Barrett Browning, "Sonnet 43"',
  '"Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all."\n\n- Emily Dickinson, "Hope is the Thing with Feathers"',
  '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson',
  '"Beauty is truth, truth beauty,—that is all\nYe know on earth, and all ye need to know."\n\n- John Keats - "Ode to a Nightingale"',
  '"In the middle of the journey of our life\nI found myself within a dark woods\nwhere the straight way was lost."\n\n- Dante Alighieri',
  '"Out of the ash / I rise with my red hair / And I eat men like air."',
  "So much depends\n\nupon\n\na red wheel\n\nbarrow\n\nglazed with rain\n\nwater\n\nbeside the white\n\nchickens.",
  '"We real cool. We\nLeft school. We\nLurk late. We\nStrike straight." - Gwendolyn Brooks',
  '"On Love"\nLove is a magic ray\nemitted from the burning core\nof the soul\n\and illuminating\nthe surrounding earth.' 
  + '\nIt enables us\nto perceive life\nas a beautiful dream\nbetween one awakening\nand another."',
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
  '"anyone lived in a pretty how town\n(with up so floating many bells down)\n' +
  'spring summer autumn winter\nhe sang his didn\'t he danced his did"',
  '"somewhere i have never travelled, gladly beyond\nany experience, your eyes have their silence:\n' +
  'in your most frail gesture are things which enclose me,\nor which i cannot touch because they are too near"',
  '"i carry your heart with me(i carry it in\nmy heart)i am never without it(anywhere\ni go you go,my dear;and whatever is done\n' +
    'by only me is your doing,my darling)"',
    '"The whiskey on your breath\nCould make a small boy dizzy;\nbut I hung on like death:\nSuch waltzing was not easy.\n\n' +
    'We romped until the pans\nSlid from the kitchen shelf;\nMy mother\'s countenance\nCould not unfrown itself.\n\n' +
    'The hand that held my wrist\nWas battered on one knuckle;\nAt every step you missed\nMy right ear scraped a buckle.\n\n' +
    'You beat time on my head\nWith a palm caked hard by dirt.\nThen waltzed me off to bed\nStill clinging to your shirt."',
    '"The Sanskrit word for war means a desire for more cows."',
    '"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."',
    '"It is important to draw wisdom from many different places. If we take it from only one place, it becomes rigid and stale."',
    '"The true mind can weather all the lies and illusions without being lost. The true heart can touch the poison of hatred without being harmed."',
    '"It\'s easy to do nothing, but it\'s hard to forgive."',
    '"Sometimes the best way to solve your own problems is to help someone else."',
    '"The only way to experience true wellbeing is to turn inward. This is what yoga means – not up, not out, but in."',
    '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."',
    '"Life happens wherever you are, whether you make it or not."',
    '"Protection and power are overrated. I think you are very wise to choose happiness and love."',
    "Many things that seem threatening in the dark become welcoming when we shine a light on them.",
    "It's time for you to look inward and begin asking yourself the big questions: Who are you? And what do you want?",
    "\t\t\tPiece A Shit \n\n When I see a frog\n\n & it takes a hop away from me \n\n it's like \n\n what the fuck man.",
    "The voice of the intellect is a soft one, \n but it does not rest until it has gained hearing. \n\n -Sigmund Freud",
    "All truly great thoughts are conceived by walking \n\n Friendrich Nietzsche",
    "Beauty is mysterious as well as terrible.\n God and devil are fighting there,\n and the battlefield is the heart of man. \n\n Fyodor Dostoevsky",
    "Trees are poems the earth writes upon the sky. \n\n\t\tKahlil Gibran",
    "Though we travel the world over to find the beautiful,\n we must carry it with us or we find it not \n\n\t\t Ralph Waldo Emerson",
    "Love takes off\nmasks that we fear\nwe cannot live\nwithout and know\nwe cannot live\nwithin.\n\nJames Baldwin",
    "Flow with whatever\nmay happen and let\nyour mind be free. Stay]n centerd by accepting\n whatever you are doing.\nThis is the ultimate\n\nZhuangzi",
    "Do not waste your\ntime looking for an\nobstacle - maybe\n there is none.\n\n Franz Kafka",
    "Only the heart\nknows how to find\nwhat is precious. \n\n Fyodor Dostoevsky",
    "A Candle never\nLoses any of its\nLight while Lighting\nup another candle.\n\n\t\tRumi",
    "Let us live for the\nbeauty of our own\nreality. \n\n Charles Lamb",
    "Everything that is\nmade beautiful and\nfair and lovely is\nmade for the eye of\none who sees.\n\n \t\tRumi",
    "It's no virtue to\ngain the whole\mworld. Just gain the\nheart of one\nperson.\\n\n\t\tSaadi",
    "The truth knocks on the door and you say,\n'Go away, I'm looking for the truth,'\nand so it goes away.\n\nZen and The Art of Motorcycle Maintenance",
    "You have to love somebody enough to hate them.\n\nThe Absolutely True Diary of a Part-Time Indian",
    "I was a warrior who fought with his pen.\n\n -The Absolutely True Diary of a Part-Time Indian",
    "I grabbed my book and opened it up.\nI wanted to smell it. Heck,\nI wanted to kiss it.\nYes, kiss it.\n\nThe Absolutely True Diary of a Part-Time Indian",
    "Memory is a long-armed woman with dangerous nails.'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "Some stories are true that never happened.'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "What if language itself is a virus? 'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "That's the trouble with fairy tales. In real life, people don't live happily ever after. 'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "The difference between a house and a home is like the difference between a body and a soul. 'We Are All Completely Beside Ourselves' by Karen Joy Fowler",
    "The past is always present, and the future is always uncertain. We Are All Completely Beside Ourselves'",
    "No matter how hard we try, we can never really know another person's experience. We Are All Completely Beside Ourselves'",
    "Guilt is a powerful motivator. We Are All Completely Beside Ourselves'",
    "We are all broken, that's how the light gets in. We Are All Completely Beside Ourselves'",
    "It's not about what you deserve. It's about what you believe. And I believe in love. We Are All Completely Beside Ourselves'",
    "We're all lonely for something we don't know we're lonely for. How else to explain the curious feeling that goes around feeling like missing somebody we've never even met? 'The Goldfinch' by Donna Tartt",
    "The world is always changing brightness and hotness and soundness, and there are people in it—babies and old people and animals and the insane—and it's all going on and on, and it's all magnificent. 'The Goldfinch' by Donna Tartt",
    "Consciousness is not just a byproduct of the brain, it is the source of all existence. 'Beyond Biocentrism' by Robert Lanza and Bob Berman"
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
      "What thoughts bubble up when you're running, meditating, yoga-ing, working-out, laying in bed trying to go to sleep, etc.?",
      "Choose one of the following animals and describe your surroundings from that perspective: butterfly, ant, cat, flower, budding sprout, bird, cloud, fish, whale, coral polyp, plankton, or other (If you're feeling original).",
      "What has shaped you into who you are?",
      "Pick a location and a sense. Write using only those two things as reference.",
    ];
    
    // function to get a new prompt.
    function getNewPrompt() {
      const container = document.getElementById("poem-prompt");
      const randomIndex = Math.floor(Math.random() * allPrompts.length);
      container.innerText = "Prompt:\n" + allPrompts[randomIndex];
    }
    
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
    enterPoem.textContent = '';
  });

  // hide the prompt text once it has been seen
  if (localStorage.getItem('seenPrompt')) {
    enterPoem.textContent = '';
  } else {
    localStorage.setItem('seenPrompt', true);
  }