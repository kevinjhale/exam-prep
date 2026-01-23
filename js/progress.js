/**
 * Progress tracking using localStorage
 */

const Progress = {
  STORAGE_KEY: 'exam_prep_progress',

  getAll() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : this.getDefaultData();
    } catch (e) {
      console.error('Error reading progress:', e);
      return this.getDefaultData();
    }
  },

  getDefaultData() {
    return {
      exams: {},
      lastSession: null
    };
  },

  save(data) {
    try {
      data.lastSession = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  },

  getExamProgress(examId) {
    const data = this.getAll();
    if (!data.exams[examId]) {
      data.exams[examId] = {
        questionsAnswered: {},
        practiceHistory: [],
        examHistory: [],
        bestScore: null
      };
      this.save(data);
    }
    return data.exams[examId];
  },

  recordAnswer(examId, questionId, isCorrect) {
    const data = this.getAll();
    const exam = this.getExamProgress(examId);

    if (!exam.questionsAnswered[questionId]) {
      exam.questionsAnswered[questionId] = { correct: 0, incorrect: 0 };
    }

    if (isCorrect) {
      exam.questionsAnswered[questionId].correct++;
    } else {
      exam.questionsAnswered[questionId].incorrect++;
    }

    data.exams[examId] = exam;
    this.save(data);
  },

  recordPracticeSession(examId, correct, total) {
    const data = this.getAll();
    const exam = this.getExamProgress(examId);

    exam.practiceHistory.push({
      date: new Date().toISOString(),
      correct,
      total,
      percentage: Math.round((correct / total) * 100)
    });

    // Keep only last 20 sessions
    if (exam.practiceHistory.length > 20) {
      exam.practiceHistory = exam.practiceHistory.slice(-20);
    }

    data.exams[examId] = exam;
    this.save(data);
  },

  recordExamResult(examId, result) {
    const data = this.getAll();
    const exam = this.getExamProgress(examId);

    const examResult = {
      date: new Date().toISOString(),
      score: result.score,
      correct: result.correct,
      total: result.total,
      timeUsed: result.timeUsed,
      passed: result.passed,
      answers: result.answers
    };

    exam.examHistory.push(examResult);

    // Update best score
    if (!exam.bestScore || result.score > exam.bestScore) {
      exam.bestScore = result.score;
    }

    // Keep only last 10 exams
    if (exam.examHistory.length > 10) {
      exam.examHistory = exam.examHistory.slice(-10);
    }

    data.exams[examId] = exam;
    this.save(data);

    return examResult;
  },

  getStats(examId, totalQuestions) {
    const exam = this.getExamProgress(examId);
    const answered = Object.keys(exam.questionsAnswered).length;

    let totalCorrect = 0;
    let totalAttempts = 0;

    Object.values(exam.questionsAnswered).forEach(q => {
      totalCorrect += q.correct;
      totalAttempts += q.correct + q.incorrect;
    });

    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
      questionsAttempted: answered,
      totalQuestions,
      percentComplete: Math.round((answered / totalQuestions) * 100),
      accuracy,
      bestScore: exam.bestScore,
      examsTaken: exam.examHistory.length,
      lastExam: exam.examHistory.length > 0 ? exam.examHistory[exam.examHistory.length - 1] : null
    };
  },

  getLastExamResult(examId) {
    const exam = this.getExamProgress(examId);
    return exam.examHistory.length > 0 ? exam.examHistory[exam.examHistory.length - 1] : null;
  },

  reset(examId = null) {
    if (examId) {
      const data = this.getAll();
      delete data.exams[examId];
      this.save(data);
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
};
