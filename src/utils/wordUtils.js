// Fallback word list in case API fails (structure matches API response)
const FALLBACK_WORDS = [
  { word: "PYTHON", hint: "A high-level programming language" },
  { word: "ELEPHANT", hint: "Large gray mammal with a trunk" },
  { word: "KALEIDOSCOPE", hint: "Optical instrument with rotating colored pieces" }
];

export async function getWordByDifficulty(difficulty) {
  try {
    // Step 1: Get random word from Random Word API
    const randomWord = await fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then(res => res.json())
      .then(data => data[0].toUpperCase());

    // Step 2: Filter by difficulty
    const wordLength = randomWord.replace(/\s+/g, '').length;
    let isValidDifficulty = false;

    switch (difficulty) {
      case 'easy':
        isValidDifficulty = wordLength >= 4 && wordLength <= 6;
        break;
      case 'medium':
        isValidDifficulty = wordLength >= 7 && wordLength <= 9;
        break;
      case 'hard':
        isValidDifficulty = wordLength >= 10;
        break;
      default:
        isValidDifficulty = true;
    }

    // If word doesn't match difficulty, try again recursively
    if (!isValidDifficulty) {
      return await getWordByDifficulty(difficulty);
    }

    // Step 3: Get hints from DictionaryAPI
    const hints = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord.toLowerCase()}`)
      .then(res => res.json())
      .then(data => {
        if (!data.title) { // Success response
          return [
            data[0]?.meanings[0]?.definitions[0]?.definition || "No definition available",
            data[0]?.meanings[0]?.partOfSpeech || "No part of speech available"
          ];
        }
        return null; // API error
      });

    if (hints) {
      return {
        word: randomWord,
        hints: [
          `Definition: ${hints[0]}`,
          `Part of speech: ${hints[1]}`
        ]
      };
    }

    throw new Error("Dictionary API failed");
    
  } catch (error) {
    // Fallback to local words if API fails
    const filteredFallback = FALLBACK_WORDS.filter(word => {
      const length = word.word.replace(/\s+/g, '').length;
      switch (difficulty) {
        case 'easy': return length >= 4 && length <= 6;
        case 'medium': return length >= 7 && length <= 9;
        case 'hard': return length >= 10;
        default: return true;
      }
    });
    
    const randomIndex = Math.floor(Math.random() * filteredFallback.length);
    return {
      word: filteredFallback[randomIndex].word,
      hints: [filteredFallback[randomIndex].hint, "Local backup word"]
    };
  }
}