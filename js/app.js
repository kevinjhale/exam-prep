/**
 * Shared utilities and data loading for exam prep app
 */

// Embedded exam data (works without a server)
const EXAM_DATA = {
  'journeyman-electrical': {
    "exam": "Journeyman Electrician",
    "version": "1.0",
    "passingScore": 70,
    "timeLimit": 3600,
    "questions": [
      {
        "id": "je-001",
        "question": "What is the minimum burial depth for direct burial UF cable without additional protection?",
        "options": ["6 inches", "12 inches", "18 inches", "24 inches"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 300.5, direct burial cables must be buried at least 24 inches when installed without additional protection such as concrete or RMC."
      },
      {
        "id": "je-002",
        "question": "What is the maximum number of #12 AWG THHN conductors allowed in a 1/2\" EMT conduit?",
        "options": ["5", "7", "9", "12"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Chapter 9, Table C1",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "According to NEC Chapter 9, Table C1, a 1/2\" EMT can contain a maximum of 9 #12 AWG THHN conductors based on 40% fill capacity."
      },
      {
        "id": "je-003",
        "question": "What is the ampacity of a #6 AWG copper conductor with THWN insulation at 75°C?",
        "options": ["40 amps", "55 amps", "65 amps", "75 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #6 AWG copper with THWN insulation (75°C column) has an ampacity of 65 amps."
      },
      {
        "id": "je-004",
        "question": "What is the minimum working space depth in front of a 480V electrical panel?",
        "options": ["2 feet", "3 feet", "3.5 feet", "4 feet"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(1)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 110.26(A)(1), Table 110.26(A)(1), for 301-600V (Condition 1), the minimum depth of clear working space is 3.5 feet (1.0m)."
      },
      {
        "id": "je-005",
        "question": "What color must the grounded conductor (neutral) be?",
        "options": ["Green", "White or gray", "Red", "Any color with white tape"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 200.6",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 200.6, the grounded conductor must be identified by white or gray color, or three continuous white or gray stripes on other than green insulation."
      },
      {
        "id": "je-006",
        "question": "What is the maximum voltage drop recommended for branch circuits?",
        "options": ["2%", "3%", "5%", "8%"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.19(A) Informational Note",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.19(A) Informational Note No. 4, branch circuit conductors should be sized to prevent voltage drop exceeding 3% at the farthest outlet."
      },
      {
        "id": "je-007",
        "question": "A 120V circuit has a load of 1800 watts. What is the current draw?",
        "options": ["12 amps", "15 amps", "18 amps", "20 amps"],
        "correct": 1,
        "source": {
          "name": "Ohm's Law / Power Formula",
          "url": ""
        },
        "explanation": "Using P = V × I, we get I = P/V = 1800W / 120V = 15 amps."
      },
      {
        "id": "je-008",
        "question": "What is the minimum height for receptacles in a dwelling unit?",
        "options": ["No minimum", "6 inches", "12 inches", "15 inches"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "The NEC does not specify a minimum mounting height for receptacles in dwelling units. However, local codes may have requirements, and ADA guidelines suggest 15 inches minimum for accessibility."
      },
      {
        "id": "je-009",
        "question": "What is the maximum length of a flexible cord used as a fixed wiring method?",
        "options": ["Not permitted", "6 feet", "10 feet", "25 feet"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 400.12",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 400.12, flexible cords shall not be used as a substitute for fixed wiring of a structure. They are only permitted for specific uses listed in 400.10."
      },
      {
        "id": "je-010",
        "question": "What size ground wire is required for a 60-amp circuit?",
        "options": ["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 250.122, a circuit protected by a 60-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-011",
        "question": "What is the maximum distance between receptacle outlets along a wall in a dwelling unit?",
        "options": ["6 feet", "8 feet", "10 feet", "12 feet"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 210.52(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(A), receptacles must be installed so that no point along the floor line is more than 6 feet from an outlet, meaning outlets can be up to 12 feet apart."
      },
      {
        "id": "je-012",
        "question": "What is the standard voltage for a single-phase, three-wire residential service?",
        "options": ["120V", "208V", "240V", "120/240V"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 220",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "A standard single-phase, three-wire residential service provides 120/240V - 120V between each hot leg and neutral, and 240V between the two hot legs."
      },
      {
        "id": "je-013",
        "question": "GFCI protection is required for 125V, 15 and 20-amp receptacles in which location?",
        "options": ["Bedrooms", "Living rooms", "Kitchens serving countertop surfaces", "Hallways"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.8(A)(6)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.8(A)(6), GFCI protection is required for all 125V, 15 and 20-amp receptacles in kitchens that serve countertop surfaces."
      },
      {
        "id": "je-014",
        "question": "What is the total resistance of three 30-ohm resistors connected in parallel?",
        "options": ["10 ohms", "30 ohms", "60 ohms", "90 ohms"],
        "correct": 0,
        "source": {
          "name": "Electrical Theory - Parallel Circuits",
          "url": ""
        },
        "explanation": "For parallel resistors: 1/Rt = 1/R1 + 1/R2 + 1/R3 = 1/30 + 1/30 + 1/30 = 3/30 = 1/10, so Rt = 10 ohms."
      },
      {
        "id": "je-015",
        "question": "What type of circuit breaker is required for a spa or hot tub?",
        "options": ["Standard breaker", "GFCI breaker", "AFCI breaker", "Dual function AFCI/GFCI breaker"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.44",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 680.44, all outlets supplying a spa or hot tub must be protected by a Class A GFCI."
      }
    ]
  }
};

const App = {
  examData: null,
  currentExamId: 'journeyman-electrical',

  async loadExamData(examId = 'journeyman-electrical') {
    // Check localStorage first (admin edits), fall back to embedded data
    const stored = localStorage.getItem('exam_prep_questions');
    if (stored && examId === 'journeyman-electrical') {
      this.examData = {
        ...EXAM_DATA[examId],
        questions: JSON.parse(stored)
      };
    } else {
      this.examData = EXAM_DATA[examId] || null;
    }
    this.currentExamId = examId;
    return this.examData;
  },

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  setUrlParam(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
};

// Letter mapping for options
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Render a question to the DOM
function renderQuestion(question, questionIndex, totalQuestions, containerId = 'question-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="question-header">
      <span class="question-number">Question ${questionIndex + 1} of ${totalQuestions}</span>
      <span class="question-id">${question.id}</span>
    </div>
    <p class="question-text">${question.question}</p>
    <div class="options" role="radiogroup" aria-label="Answer options">
      ${question.options.map((option, i) => `
        <button class="option" data-index="${i}" role="radio" aria-checked="false" tabindex="0">
          <span class="option-letter">${LETTERS[i]}</span>
          <span class="option-text">${option}</span>
        </button>
      `).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
  `;
}

// Show feedback after answering
function showFeedback(isCorrect, question, selectedIndex) {
  const feedback = document.getElementById('feedback');
  if (!feedback) return;

  feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

  const sourceLink = question.source?.url
    ? `<a href="${question.source.url}" target="_blank" rel="noopener">${question.source.name}</a>`
    : question.source?.name || 'General knowledge';

  feedback.innerHTML = `
    <div class="feedback-header">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
    <p class="feedback-explanation">${question.explanation}</p>
    <p class="feedback-source">Source: ${sourceLink}</p>
  `;

  // Mark options
  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    opt.setAttribute('aria-disabled', 'true');
    if (i === question.correct) {
      opt.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });
}

// Initialize keyboard navigation for options
function initOptionKeyboardNav(onSelect) {
  document.addEventListener('keydown', (e) => {
    const options = document.querySelectorAll('.option:not(.disabled)');
    if (options.length === 0) return;

    // Letter keys A-D to select options
    const key = e.key.toUpperCase();
    const letterIndex = LETTERS.indexOf(key);
    if (letterIndex !== -1 && letterIndex < options.length) {
      e.preventDefault();
      onSelect(letterIndex);
    }
  });
}
