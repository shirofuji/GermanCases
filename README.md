# German Cases Flashcards

A React CRA app to help learners practice German noun cases. The app has two modes:

**Learning Mode**: View a noun, its English translation, image, and all four cases.

**Test Mode**: Practice by entering the correct case form of a random noun.

## Features

Flashcards for 20+ German nouns with nominative, accusative, dative, genitive forms.
Shows English translations and images for each noun.
Learning mode displays all cases for easy reference.
Test mode quizzes the user on random nouns and random cases.
Next Card button to move through nouns without repetition.
Responsive layout with Tailwind CSS styling.

## Screenshots

**Learning Mode**

![Learning Mode View](https://i.imgur.com/5GdfZKU.png)

**Test Mode**

![Test Mode View](https://i.imgur.com/6DTEiEY.png)

## Getting Started

**Prerequisites**

Node.js >= 18
npm or yarn
Unsplash API key (get it here)

**Installation**

1. Clone the repository:
```bash
git clone https://github.com/shirofuji/GermanCases.git
cd GermanCases
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```


3. Create a .env file in the project root:

REACT_APP_UNSPLASH_KEY=your_unsplash_access_key_here


4. Start the development server:
```bash
npm start
# or
yarn start
```

The app will run on http://localhost:3000


## Usage

- **Learning Mode**: View the noun, English translation, image, and all four cases. Click Next Card to move to the next noun.
- **Test Mode**: Enter the correct German case form in the input field. Submit your answer to check if it's correct. Click Next Card to continue.
- Toggle between modes with the Switch Mode button.

## Project Structure
```
src/
  App.js          # Main React component
  nouns.js        # Nouns array and helper functions
  App.css         # Styling
```

- `nouns.js` contains the nouns array with cases and English translations.
- `getImageForNoun` fetches an image from Unsplash for each noun.
- `getNonRepeatingRandomNoun` ensures no immediate repetition of nouns.

## Dependencies

- React
- Tailwind CSS (for styling)

## Customization

- Add more nouns by updating `nouns.js` with the proper cases and English equivalents.
- Adjust styling via `App.css` or Tailwind classes.
- You can replace Unsplash with another image API if desired.

## License

**MIT © 2026**