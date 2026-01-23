/**
 * Practice mode logic
 */

const Practice = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: 0,
  hasAnswered: false,

  async init() {
    const examData = await App.loadExamData();
    if (!examData) {
      document.getElementById('question-container').innerHTML =
        '<p>Error loading questions. Please try again.</p>';
      return;
    }

    this.questions = App.shuffleArray(examData.questions);
    this.currentIndex = 0;
    this.score = 0;
    this.answered = 0;
    this.hasAnswered = false;

    // Show exam name
    document.getElementById('current-exam-name').textContent = examData.name;

    this.render();
    this.bindEvents();
  },

  render() {
    const question = this.questions[this.currentIndex];
    renderQuestion(question, this.currentIndex, this.questions.length);
    this.updateScore();
    this.hasAnswered = false;

    document.getElementById('next-btn').disabled = true;
    document.getElementById('skip-btn').disabled = false;
  },

  updateScore() {
    document.getElementById('score').textContent = this.score;
    document.getElementById('total').textContent = this.answered;
  },

  bindEvents() {
    // Option click handlers
    document.getElementById('question-container').addEventListener('click', (e) => {
      // Ignore clicks on vocab terms
      if (e.target.closest('.vocab-term')) return;

      const option = e.target.closest('.option');
      if (!option || this.hasAnswered) return;

      const selectedIndex = parseInt(option.dataset.index, 10);
      this.selectAnswer(selectedIndex);
    });

    // Next button
    document.getElementById('next-btn').addEventListener('click', () => {
      this.nextQuestion();
    });

    // Skip button
    document.getElementById('skip-btn').addEventListener('click', () => {
      this.skipQuestion();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.hasAnswered && e.key === 'Enter') {
        e.preventDefault();
        this.nextQuestion();
        return;
      }

      if (this.hasAnswered) return;

      const key = e.key.toUpperCase();
      const letterIndex = LETTERS.indexOf(key);
      if (letterIndex !== -1 && letterIndex < this.questions[this.currentIndex].options.length) {
        e.preventDefault();
        this.selectAnswer(letterIndex);
      }
    });
  },

  selectAnswer(selectedIndex) {
    if (this.hasAnswered) return;
    this.hasAnswered = true;

    const question = this.questions[this.currentIndex];
    const isCorrect = selectedIndex === question.correct;

    // Update visual state
    const options = document.querySelectorAll('.option');
    options[selectedIndex].classList.add('selected');

    // Show feedback
    showFeedback(isCorrect, question, selectedIndex);

    // Update score
    this.answered++;
    if (isCorrect) this.score++;
    this.updateScore();

    // Record progress
    Progress.recordAnswer(App.currentExamId, question.id, isCorrect);

    // Enable next button
    document.getElementById('next-btn').disabled = false;
    document.getElementById('skip-btn').disabled = true;

    // Focus next button for keyboard users
    document.getElementById('next-btn').focus();
  },

  nextQuestion() {
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.showSummary();
      return;
    }

    this.render();
  },

  skipQuestion() {
    // Move current question to end
    const skipped = this.questions.splice(this.currentIndex, 1)[0];
    this.questions.push(skipped);

    // Re-render (currentIndex stays the same, but points to next question now)
    this.render();
  },

  showSummary() {
    const percentage = Math.round((this.score / this.answered) * 100);

    // Record session
    Progress.recordPracticeSession(App.currentExamId, this.score, this.answered);

    document.getElementById('question-container').innerHTML = `
      <div class="results-summary">
        <div class="score-circle ${percentage >= 70 ? 'pass' : 'fail'}">
          <span class="score-value">${percentage}%</span>
          <span class="score-label">Score</span>
        </div>
        <h2>Practice Complete!</h2>
        <p class="text-muted">You got ${this.score} out of ${this.answered} questions correct.</p>
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="location.reload()">Practice Again</button>
          <a href="exam.html" class="btn btn-secondary">Take Mock Exam</a>
          <a href="index.html" class="btn btn-secondary">Back to Home</a>
        </div>
      </div>
    `;

    document.querySelector('.question-actions').classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initVocabHandlers();
  Practice.init();
});
