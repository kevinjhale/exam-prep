/**
 * Timed mock exam mode logic
 */

const Exam = {
  questions: [],
  answers: [],
  flagged: new Set(),
  currentIndex: 0,
  timeLimit: 3600,
  timeRemaining: 3600,
  timerInterval: null,
  startTime: null,

  async init() {
    document.getElementById('start-btn').addEventListener('click', () => this.start());
  },

  async start() {
    const examData = await App.loadExamData();
    if (!examData) {
      alert('Error loading exam data. Please try again.');
      return;
    }

    // Get settings
    this.timeLimit = parseInt(document.getElementById('time-select').value, 10);
    this.timeRemaining = this.timeLimit;

    const questionCount = document.getElementById('question-count').value;
    let allQuestions = App.shuffleArray(examData.questions);

    if (questionCount !== 'all') {
      const count = parseInt(questionCount, 10);
      allQuestions = allQuestions.slice(0, Math.min(count, allQuestions.length));
    }

    this.questions = allQuestions;
    this.answers = new Array(this.questions.length).fill(null);
    this.flagged = new Set();
    this.currentIndex = 0;
    this.startTime = Date.now();

    // Show exam screen
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');

    this.renderNav();
    this.renderQuestion();
    this.startTimer();
    this.bindEvents();
  },

  renderNav() {
    const nav = document.getElementById('question-nav');
    nav.innerHTML = this.questions.map((_, i) => `
      <button class="question-nav-btn ${i === this.currentIndex ? 'current' : ''}"
              data-index="${i}"
              aria-label="Question ${i + 1}">
        ${i + 1}
      </button>
    `).join('');
  },

  updateNav() {
    const buttons = document.querySelectorAll('.question-nav-btn');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('current', i === this.currentIndex);
      btn.classList.toggle('answered', this.answers[i] !== null);
      btn.classList.toggle('flagged', this.flagged.has(i));
    });
  },

  renderQuestion() {
    const question = this.questions[this.currentIndex];

    document.getElementById('question-container').innerHTML = `
      <div class="question-header">
        <span class="question-number">Question ${this.currentIndex + 1} of ${this.questions.length}</span>
      </div>
      <p class="question-text">${question.question}</p>
      <div class="options" role="radiogroup" aria-label="Answer options">
        ${question.options.map((option, i) => `
          <button class="option ${this.answers[this.currentIndex] === i ? 'selected' : ''}"
                  data-index="${i}"
                  role="radio"
                  aria-checked="${this.answers[this.currentIndex] === i}">
            <span class="option-letter">${LETTERS[i]}</span>
            <span class="option-text">${option}</span>
          </button>
        `).join('')}
      </div>
    `;

    // Update flag button
    const flagBtn = document.getElementById('flag-btn');
    flagBtn.classList.toggle('flagged', this.flagged.has(this.currentIndex));

    // Update nav buttons state
    document.getElementById('prev-btn').disabled = this.currentIndex === 0;
    document.getElementById('next-exam-btn').textContent =
      this.currentIndex === this.questions.length - 1 ? 'Review' : 'Next';

    this.updateNav();
  },

  bindEvents() {
    // Option selection
    document.getElementById('question-container').addEventListener('click', (e) => {
      const option = e.target.closest('.option');
      if (!option) return;

      const selectedIndex = parseInt(option.dataset.index, 10);
      this.selectAnswer(selectedIndex);
    });

    // Navigation buttons
    document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
    document.getElementById('next-exam-btn').addEventListener('click', () => this.nextQuestion());

    // Question nav
    document.getElementById('question-nav').addEventListener('click', (e) => {
      const btn = e.target.closest('.question-nav-btn');
      if (!btn) return;
      this.goToQuestion(parseInt(btn.dataset.index, 10));
    });

    // Flag button
    document.getElementById('flag-btn').addEventListener('click', () => this.toggleFlag());

    // Submit button
    document.getElementById('submit-btn').addEventListener('click', () => this.showSubmitModal());
    document.getElementById('cancel-submit').addEventListener('click', () => this.hideSubmitModal());
    document.getElementById('confirm-submit').addEventListener('click', () => this.submit());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();
      const letterIndex = LETTERS.indexOf(key);

      if (letterIndex !== -1 && letterIndex < this.questions[this.currentIndex].options.length) {
        e.preventDefault();
        this.selectAnswer(letterIndex);
      } else if (e.key === 'ArrowLeft' && this.currentIndex > 0) {
        e.preventDefault();
        this.prevQuestion();
      } else if (e.key === 'ArrowRight' && this.currentIndex < this.questions.length - 1) {
        e.preventDefault();
        this.nextQuestion();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this.toggleFlag();
      }
    });
  },

  selectAnswer(index) {
    this.answers[this.currentIndex] = index;

    // Update option visuals
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
      opt.classList.toggle('selected', i === index);
      opt.setAttribute('aria-checked', i === index);
    });

    this.updateNav();
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    }
  },

  goToQuestion(index) {
    this.currentIndex = index;
    this.renderQuestion();
  },

  toggleFlag() {
    if (this.flagged.has(this.currentIndex)) {
      this.flagged.delete(this.currentIndex);
    } else {
      this.flagged.add(this.currentIndex);
    }

    document.getElementById('flag-btn').classList.toggle('flagged', this.flagged.has(this.currentIndex));
    this.updateNav();
  },

  startTimer() {
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.submit();
        return;
      }

      this.updateTimerDisplay();
    }, 1000);
  },

  updateTimerDisplay() {
    const display = document.getElementById('timer-display');
    const timer = document.getElementById('timer');

    display.textContent = App.formatTime(this.timeRemaining);

    // Warning colors
    timer.classList.remove('warning', 'danger');
    if (this.timeRemaining <= 60) {
      timer.classList.add('danger');
    } else if (this.timeRemaining <= 300) {
      timer.classList.add('warning');
    }
  },

  showSubmitModal() {
    const answered = this.answers.filter(a => a !== null).length;
    const total = this.questions.length;
    const unanswered = total - answered;

    let message = `You have answered ${answered} of ${total} questions.`;
    if (unanswered > 0) {
      message += ` ${unanswered} question${unanswered > 1 ? 's' : ''} will be marked incorrect.`;
    }
    message += ' Are you sure you want to submit?';

    document.getElementById('submit-modal-text').textContent = message;
    document.getElementById('submit-modal').classList.add('show');
  },

  hideSubmitModal() {
    document.getElementById('submit-modal').classList.remove('show');
  },

  submit() {
    clearInterval(this.timerInterval);
    this.hideSubmitModal();

    const timeUsed = this.timeLimit - this.timeRemaining;

    // Calculate results
    let correct = 0;
    const results = this.questions.map((q, i) => {
      const isCorrect = this.answers[i] === q.correct;
      if (isCorrect) correct++;

      return {
        question: q,
        selectedAnswer: this.answers[i],
        isCorrect,
        flagged: this.flagged.has(i)
      };
    });

    const score = Math.round((correct / this.questions.length) * 100);
    const passed = score >= 70;

    // Save to progress
    const examResult = Progress.recordExamResult(App.currentExamId, {
      score,
      correct,
      total: this.questions.length,
      timeUsed,
      passed,
      answers: results
    });

    // Store for results page
    sessionStorage.setItem('lastExamResult', JSON.stringify(examResult));

    // Redirect to results
    window.location.href = 'results.html';
  }
};

document.addEventListener('DOMContentLoaded', () => Exam.init());
