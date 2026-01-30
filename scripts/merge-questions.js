/**
 * Script to merge expanded questions and glossary into app.js
 */

const fs = require('fs');
const path = require('path');

// Read all expanded question files
const dataDir = path.join(__dirname, '..', 'data');
const questionFiles = [
  'expanded-questions.json',
  'expanded-questions-2.json',
  'expanded-questions-3.json',
  'expanded-questions-4.json',
  'expanded-questions-5.json',
  'expanded-questions-6.json'
];

// Collect all new questions
let newQuestions = [];
let newGlossary = {};

questionFiles.forEach(file => {
  try {
    const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
    if (content.questions) {
      newQuestions = newQuestions.concat(content.questions);
    }
    if (content.glossary) {
      Object.assign(newGlossary, content.glossary);
    }
  } catch (e) {
    console.log(`Skipping ${file}: ${e.message}`);
  }
});

console.log(`Loaded ${newQuestions.length} new questions`);
console.log(`Loaded ${Object.keys(newGlossary).length} new glossary terms`);

// Read current app.js
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Find the journeyman-electrical exam questions array
const examStartMatch = appJs.match(/'journeyman-electrical':\s*\{/);
if (!examStartMatch) {
  console.error('Could not find journeyman-electrical exam in app.js');
  process.exit(1);
}

// Find the questions array end (just before "glossary":)
const glossaryMatch = appJs.match(/(\s*]\s*,\s*)"glossary":\s*\{/);
if (!glossaryMatch) {
  console.error('Could not find glossary section in app.js');
  process.exit(1);
}

// Find position to insert new questions (before the closing ] of questions array)
const glossaryIndex = appJs.indexOf('"glossary":');
const questionsEndIndex = appJs.lastIndexOf(']', glossaryIndex);

// Create new questions JSON string
const newQuestionsJson = newQuestions.map(q =>
  `      ${JSON.stringify(q, null, 0).replace(/,"/g, ', "')}`
).join(',\n');

// Insert new questions before the ] that ends the questions array
const beforeQuestions = appJs.substring(0, questionsEndIndex);
const afterQuestionsEnd = appJs.substring(questionsEndIndex);

appJs = beforeQuestions + ',\n' + newQuestionsJson + '\n    ' + afterQuestionsEnd;

// Now add new glossary terms
// Find the end of the glossary object
const glossaryEndMatch = appJs.match(/"glossary":\s*\{[\s\S]*?\n\s{4}\}/);
if (glossaryEndMatch) {
  // Find position of the closing } of glossary
  const glossaryStartIndex = appJs.indexOf('"glossary":');
  let braceCount = 0;
  let glossaryEndIndex = glossaryStartIndex;
  let inGlossary = false;

  for (let i = glossaryStartIndex; i < appJs.length; i++) {
    if (appJs[i] === '{') {
      braceCount++;
      inGlossary = true;
    } else if (appJs[i] === '}') {
      braceCount--;
      if (inGlossary && braceCount === 0) {
        glossaryEndIndex = i;
        break;
      }
    }
  }

  // Create glossary entries JSON
  const glossaryEntries = Object.entries(newGlossary).map(([key, value]) =>
    `      "${key}": ${JSON.stringify(value, null, 0).replace(/,"/g, ', "')}`
  ).join(',\n');

  // Insert before the closing } of glossary
  const beforeGlossaryEnd = appJs.substring(0, glossaryEndIndex);
  const afterGlossaryEnd = appJs.substring(glossaryEndIndex);

  appJs = beforeGlossaryEnd + ',\n' + glossaryEntries + '\n    ' + afterGlossaryEnd;
}

// Write updated app.js
fs.writeFileSync(appJsPath, appJs);
console.log('Successfully updated app.js with expanded questions and glossary!');
console.log(`Total new questions added: ${newQuestions.length}`);
console.log(`Total new glossary terms added: ${Object.keys(newGlossary).length}`);
