export const nouns = [
    { noun: "Haus", english: "House", nominative: "Das Haus", accusative: "Das Haus", genitive: "Des Hauses", dative: "Dem Haus" },
    { noun: "Auto", english: "Car", nominative: "Das Auto", accusative: "Das Auto", genitive: "Des Autos", dative: "Dem Auto" },
    { noun: "Buch", english: "Book", nominative: "Das Buch", accusative: "Das Buch", genitive: "Des Buches", dative: "Dem Buch" },
    { noun: "Mann", english: "Man", nominative: "Der Mann", accusative: "Den Mann", genitive: "Des Mannes", dative: "Dem Mann" },
    { noun: "Frau", english: "Woman", nominative: "Die Frau", accusative: "Die Frau", genitive: "Der Frau", dative: "Der Frau" },
    { noun: "Kind", english: "Child", nominative: "Das Kind", accusative: "Das Kind", genitive: "Des Kindes", dative: "Dem Kind" },
    { noun: "Hund", english: "Dog", nominative: "Der Hund", accusative: "Den Hund", genitive: "Des Hundes", dative: "Dem Hund" },
    { noun: "Katze", english: "Cat", nominative: "Die Katze", accusative: "Die Katze", genitive: "Der Katze", dative: "Der Katze" },
    { noun: "Stuhl", english: "Chair", nominative: "Der Stuhl", accusative: "Den Stuhl", genitive: "Des Stuhls", dative: "Dem Stuhl" },
    { noun: "Tisch", english: "Table", nominative: "Der Tisch", accusative: "Den Tisch", genitive: "Des Tisches", dative: "Dem Tisch" },
    { noun: "Lampe", english: "Lamp", nominative: "Die Lampe", accusative: "Die Lampe", genitive: "Der Lampe", dative: "Der Lampe" },
    { noun: "Stadt", english: "City", nominative: "Die Stadt", accusative: "Die Stadt", genitive: "Der Stadt", dative: "Der Stadt" },
    { noun: "Baum", english: "Tree", nominative: "Der Baum", accusative: "Den Baum", genitive: "Des Baumes", dative: "Dem Baum" },
    { noun: "Freund", english: "Friend (male)", nominative: "Der Freund", accusative: "Den Freund", genitive: "Des Freundes", dative: "Dem Freund" },
    { noun: "Freundin", english: "Friend (female)", nominative: "Die Freundin", accusative: "Die Freundin", genitive: "Der Freundin", dative: "Der Freundin" },
    { noun: "Lehrer", english: "Teacher (male)", nominative: "Der Lehrer", accusative: "Den Lehrer", genitive: "Des Lehrers", dative: "Dem Lehrer" },
    { noun: "Schule", english: "School", nominative: "Die Schule", accusative: "Die Schule", genitive: "Der Schule", dative: "Der Schule" },
    { noun: "Fenster", english: "Window", nominative: "Das Fenster", accusative: "Das Fenster", genitive: "Des Fensters", dative: "Dem Fenster" },
    { noun: "Computer", english: "Computer", nominative: "Der Computer", accusative: "Den Computer", genitive: "Des Computers", dative: "Dem Computer" },
    { noun: "Apfel", english: "Apple", nominative: "Der Apfel", accusative: "Den Apfel", genitive: "Des Apfels", dative: "Dem Apfel" },
    { noun: "Blume", english: "Flower", nominative: "Die Blume", accusative: "Die Blume", genitive: "Der Blume", dative: "Der Blume" }
];

function getRandomNoun () {
    // Validate input
    if (!Array.isArray(nouns) || nouns.length === 0) {
        console.error("Invalid input: Please provide a non-empty array.");
        return null;
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * nouns.length);

    // Return the element at the random index
    return nouns[randomIndex];
}

export function getNonRepeatingRandomNoun(lastNoun) {
    let noun = getRandomNoun()
    while (noun === lastNoun) {
        noun = getRandomNoun();
    }

    return noun;
}

export async function getImageForNoun(noun) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        noun
      )}&per_page=1&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.small; // returns a small image URL
    } else {
      return null; // no image found
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}