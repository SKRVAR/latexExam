// Configuración de la aplicación
const CONFIG = {
    // Reemplaza esta URL con la URL de tu Google Apps Script Web App (obtenida al implementar)
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwmpBYMMLQ2it2MeY14S1ABTPJqZ8bXyqZqy_T6PtwIoYRGqWzJNlenUz2Q63F-Fdwa/exec',
};

// Preguntas del examen sobre LaTeX - Nivel Básico a Intermedio
// Tipos: opción múltiple, verdadero/falso, completar comandos
const QUESTIONS = [
    {
        id: 1,
        question: '¿Cuál es la estructura mínima correcta para un documento LaTeX?',
        type: 'multiple',
        timeLimit: 45,
        options: [
            '\\documentclass{article}\\begin{document}texto\\end{document}',
            '\\begin{document}texto\\end{document}',
            '\\documentclass{article}texto',
            '\\start{document}texto\\end{document}'
        ],
        correct: 0
    },
    {
        id: 2,
        question: 'El comando \\textbf{} sirve para poner texto en cursiva.',
        type: 'boolean',
        timeLimit: 30,
        options: ['Verdadero', 'Falso'],
        correct: 1
    },
    {
        id: 3,
        question: '¿Qué símbolo se usa para escribir comentarios en LaTeX?',
        type: 'multiple',
        timeLimit: 30,
        options: [
            '//',
            '#',
            '%',
            '/*'
        ],
        correct: 2
    },
    {
        id: 4,
        question: 'Para crear una sección en LaTeX se usa el comando _____',
        type: 'multiple',
        timeLimit: 35,
        options: [
            '\\chapter{título}',
            '\\section{título}',
            '\\part{título}',
            '\\header{título}'
        ],
        correct: 1
    },
    {
        id: 5,
        question: 'El entorno "enumerate" crea listas con viñetas (bullets).',
        type: 'boolean',
        timeLimit: 30,
        options: ['Verdadero', 'Falso'],
        correct: 1
    },
    {
        id: 6,
        question: '¿Cuál es la forma correcta de insertar una ecuación en línea con el texto?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '$$a^2 + b^2 = c^2$$',
            '$a^2 + b^2 = c^2$',
            '\\[a^2 + b^2 = c^2\\]',
            '\\equation{a^2 + b^2 = c^2}'
        ],
        correct: 1
    },
    {
        id: 7,
        question: '¿Qué paquete es necesario para incluir imágenes en un documento LaTeX?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '\\usepackage{images}',
            '\\usepackage{graphics}',
            '\\usepackage{graphicx}',
            '\\usepackage{figure}'
        ],
        correct: 2
    },
    {
        id: 8,
        question: 'Para escribir texto en cursiva se puede usar tanto \\textit{} como \\emph{}.',
        type: 'boolean',
        timeLimit: 35,
        options: ['Verdadero', 'Falso'],
        correct: 0
    },
    {
        id: 9,
        question: '¿Cuál comando se usa para crear una nueva página en LaTeX?',
        type: 'multiple',
        timeLimit: 35,
        options: [
            '\\newpage',
            '\\nextpage',
            '\\pagebreak',
            'Tanto A como C son correctos'
        ],
        correct: 3
    },
    {
        id: 10,
        question: '¿Qué entorno se utiliza para centrar texto en LaTeX?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '\\begin{centered}',
            '\\begin{center}',
            '\\begin{middle}',
            '\\centering'
        ],
        correct: 1
    },
    {
        id: 11,
        question: 'El comando \\maketitle genera automáticamente la portada con título, autor y fecha.',
        type: 'boolean',
        timeLimit: 35,
        options: ['Verdadero', 'Falso'],
        correct: 0
    },
    {
        id: 12,
        question: '¿Cuál es el entorno correcto para crear una tabla de datos en LaTeX?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '\\begin{table}',
            '\\begin{tabular}',
            '\\begin{grid}',
            '\\begin{data}'
        ],
        correct: 1
    },
    {
        id: 13,
        question: '¿Qué comando se usa para incluir un archivo de imagen?',
        type: 'multiple',
        timeLimit: 45,
        options: [
            '\\insertimage{archivo.png}',
            '\\includegraphics{archivo.png}',
            '\\image{archivo.png}',
            '\\addimage{archivo.png}'
        ],
        correct: 1
    },
    {
        id: 14,
        question: 'En LaTeX, los espacios múltiples en el código fuente se respetan en el documento final.',
        type: 'boolean',
        timeLimit: 35,
        options: ['Verdadero', 'Falso'],
        correct: 1
    },
    {
        id: 15,
        question: '¿Qué paquete se recomienda para escribir ecuaciones matemáticas complejas?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            'mathtools',
            'amsmath',
            'mathtype',
            'equations'
        ],
        correct: 1
    },
    {
        id: 16,
        question: '¿Cómo se crea una lista con viñetas (bullets) en LaTeX?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '\\begin{bullets}',
            '\\begin{itemize}',
            '\\begin{list}',
            '\\begin{enumerate}'
        ],
        correct: 1
    },
    {
        id: 17,
        question: 'El entorno "verbatim" permite escribir código o texto literal sin que LaTeX lo interprete.',
        type: 'boolean',
        timeLimit: 35,
        options: ['Verdadero', 'Falso'],
        correct: 0
    },
    {
        id: 18,
        question: '¿Qué comando se usa para crear una referencia cruzada a una sección o figura?',
        type: 'multiple',
        timeLimit: 45,
        options: [
            '\\reference{etiqueta}',
            '\\ref{etiqueta}',
            '\\link{etiqueta}',
            '\\crossref{etiqueta}'
        ],
        correct: 1
    },
    {
        id: 19,
        question: '¿Cuál es la forma correcta de insertar un espacio vertical de 2cm?',
        type: 'multiple',
        timeLimit: 40,
        options: [
            '\\verticalspace{2cm}',
            '\\vspace{2cm}',
            '\\addspace{2cm}',
            '\\space{2cm}'
        ],
        correct: 1
    },
    {
        id: 20,
        question: 'El comando \\tableofcontents genera automáticamente la tabla de contenidos.',
        type: 'boolean',
        timeLimit: 30,
        options: ['Verdadero', 'Falso'],
        correct: 0
    }
];

// Estado de la aplicación
let appState = {
    studentInfo: {},
    currentQuestion: 0,
    answers: new Array(QUESTIONS.length).fill(null),
    startTime: null,
    endTime: null,
    score: 0,
    questionStartTime: null,
    timeRemaining: 0,
    timerInterval: null,
    globalTimeRemaining: 1200, // 20 minutos = 1200 segundos
    globalTimerInterval: null,
    isInPreview: false,
    previewTimerInterval: null
};

// Elementos del DOM
const elements = {
    welcomeScreen: document.getElementById('welcome-screen'),
    examScreen: document.getElementById('exam-screen'),
    previewScreen: document.getElementById('preview-screen'),
    resultsScreen: document.getElementById('results-screen'),
    reviewScreen: document.getElementById('review-screen'),
    loading: document.getElementById('loading'),
    
    // Welcome screen
    studentLastname: document.getElementById('student-lastname'),
    studentFirstname: document.getElementById('student-firstname'),
    studentEmail: document.getElementById('student-email'),
    studentCode: document.getElementById('student-code'),
    startBtn: document.getElementById('start-btn'),
    
    // Exam screen
    progressFill: document.getElementById('progress-fill'),
    questionNumber: document.getElementById('question-number'),
    timer: document.getElementById('timer'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    
    // Preview screen
    previewTimer: document.getElementById('preview-timer'),
    previewAnsweredCount: document.getElementById('preview-answered-count'),
    previewContainer: document.getElementById('preview-container'),
    finalSubmitBtn: document.getElementById('final-submit-btn'),
    
    // Results screen
    finalScore: document.getElementById('final-score'),
    resultName: document.getElementById('result-name'),
    resultCode: document.getElementById('result-code'),
    correctAnswers: document.getElementById('correct-answers'),
    percentage: document.getElementById('percentage'),
    examDate: document.getElementById('exam-date'),
    feedbackMessage: document.getElementById('feedback-message'),
    reviewBtn: document.getElementById('review-btn'),
    
    // Review screen
    reviewContainer: document.getElementById('review-container'),
    backToResultsBtn: document.getElementById('back-to-results-btn')
};

// Event Listeners
elements.startBtn.addEventListener('click', startExam);
elements.prevBtn.addEventListener('click', previousQuestion);
elements.nextBtn.addEventListener('click', nextQuestion);
elements.submitBtn.addEventListener('click', showPreview);
elements.finalSubmitBtn.addEventListener('click', submitExam);
elements.reviewBtn.addEventListener('click', showReview);
elements.backToResultsBtn.addEventListener('click', backToResults);

// Inicializar la aplicación
function init() {
    showScreen('welcome');
}

// Mostrar pantalla
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    switch(screenName) {
        case 'welcome':
            elements.welcomeScreen.classList.add('active');
            break;
        case 'exam':
            elements.examScreen.classList.add('active');
            break;
        case 'preview':
            elements.previewScreen.classList.add('active');
            break;
        case 'results':
            elements.resultsScreen.classList.add('active');
            break;
        case 'review':
            elements.reviewScreen.classList.add('active');
            break;
    }
}

// Iniciar examen
function startExam() {
    const lastname = elements.studentLastname.value.trim();
    const firstname = elements.studentFirstname.value.trim();
    const email = elements.studentEmail.value.trim();
    const code = elements.studentCode.value.trim();
    
    if (!lastname || !firstname || !email || !code) {
        alert('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        return;
    }
    
    appState.studentInfo = { lastname, firstname, email, code };
    appState.startTime = new Date();
    appState.currentQuestion = 0;
    appState.answers = new Array(QUESTIONS.length).fill(null);
    appState.globalTimeRemaining = 1200; // Reset 20 minutos
    
    showScreen('exam');
    renderQuestion();
    startQuestionTimer();
    startGlobalTimer();
}

// Validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Renderizar pregunta
function renderQuestion() {
    const question = QUESTIONS[appState.currentQuestion];
    const progress = ((appState.currentQuestion + 1) / QUESTIONS.length) * 100;
    
    elements.progressFill.style.width = `${progress}%`;
    elements.questionNumber.textContent = `Pregunta ${appState.currentQuestion + 1} de ${QUESTIONS.length}`;
    elements.questionText.textContent = question.question;
    
    // Renderizar opciones
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (appState.answers[appState.currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option-${index}" value="${index}" 
                ${appState.answers[appState.currentQuestion] === index ? 'checked' : ''}>
            <label class="option-text" for="option-${index}">${option}</label>
        `;
        
        optionDiv.addEventListener('click', () => selectOption(index));
        elements.optionsContainer.appendChild(optionDiv);
    });
    
    updateNavigationButtons();
    startQuestionTimer();
}

// Seleccionar opción
function selectOption(index) {
    appState.answers[appState.currentQuestion] = index;
    
    // Actualizar UI
    document.querySelectorAll('.option').forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
        } else {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
        }
    });
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    // Deshabilitar botón anterior siempre (no se puede retroceder)
    elements.prevBtn.disabled = true;
    elements.prevBtn.style.display = 'none';
    
    if (appState.currentQuestion === QUESTIONS.length - 1) {
        elements.nextBtn.style.display = 'none';
        elements.submitBtn.style.display = 'block';
        elements.submitBtn.textContent = 'Ver Resumen';
    } else {
        elements.nextBtn.style.display = 'block';
        elements.submitBtn.style.display = 'none';
    }
}

// Pregunta anterior
function previousQuestion() {
    // Ya no se permite retroceder durante el examen
    // Esta función solo se usa desde la pantalla de preview
    if (appState.isInPreview && appState.globalTimeRemaining > 0) {
        if (appState.currentQuestion > 0) {
            appState.currentQuestion--;
            renderQuestionInPreview();
        }
    }
}

// Pregunta siguiente
function nextQuestion() {
    if (appState.currentQuestion < QUESTIONS.length - 1) {
        stopQuestionTimer();
        appState.currentQuestion++;
        renderQuestion();
    }
}

// Iniciar temporizador global (20 minutos)
function startGlobalTimer() {
    stopGlobalTimer();
    
    appState.globalTimerInterval = setInterval(() => {
        appState.globalTimeRemaining--;
        
        // Actualizar display si estamos en preview
        if (appState.isInPreview) {
            updatePreviewTimer();
        }
        
        if (appState.globalTimeRemaining <= 0) {
            stopGlobalTimer();
            if (appState.isInPreview) {
                // Auto-enviar si se acaba el tiempo en preview
                submitExam();
            } else {
                // Si se acaba durante el examen, ir directo a preview y luego enviar
                showPreview();
                setTimeout(() => submitExam(), 1000);
            }
        }
    }, 1000);
}

// Detener temporizador global
function stopGlobalTimer() {
    if (appState.globalTimerInterval) {
        clearInterval(appState.globalTimerInterval);
        appState.globalTimerInterval = null;
    }
}

// Iniciar temporizador de pregunta
function startQuestionTimer() {
    stopQuestionTimer();
    
    const question = QUESTIONS[appState.currentQuestion];
    appState.timeRemaining = question.timeLimit;
    appState.questionStartTime = new Date();
    
    updateTimerDisplay();
    
    appState.timerInterval = setInterval(() => {
        appState.timeRemaining--;
        updateTimerDisplay();
        
        if (appState.timeRemaining <= 0) {
            stopQuestionTimer();
            autoAdvance();
        }
    }, 1000);
}

// Detener temporizador de pregunta
function stopQuestionTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
    }
}

// Actualizar visualización del temporizador
function updateTimerDisplay() {
    const minutes = Math.floor(appState.timeRemaining / 60);
    const seconds = appState.timeRemaining % 60;
    elements.timer.textContent = `⏱️ ${seconds}s`;
    
    // Cambiar color y animación según el tiempo restante
    elements.timer.classList.remove('warning', 'danger');
    
    if (appState.timeRemaining <= 10) {
        elements.timer.classList.add('danger');
        elements.timer.style.color = '#e74c3c';
    } else if (appState.timeRemaining <= 20) {
        elements.timer.classList.add('warning');
        elements.timer.style.color = '#f39c12';
    } else {
        elements.timer.style.color = '#27ae60';
    }
}

// Avanzar automáticamente cuando se acaba el tiempo
function autoAdvance() {
    if (appState.currentQuestion < QUESTIONS.length - 1) {
        appState.currentQuestion++;
        renderQuestion();
    } else {
        // Última pregunta - ir a preview
        showPreview();
    }
}

// Mostrar pantalla de preview/resumen
function showPreview() {
    stopQuestionTimer();
    appState.isInPreview = true;
    
    showScreen('preview');
    renderPreview();
    updatePreviewTimer();
}

// Renderizar pantalla de preview
function renderPreview() {
    const answeredCount = appState.answers.filter(a => a !== null).length;
    elements.previewAnsweredCount.textContent = answeredCount;
    
    elements.previewContainer.innerHTML = '';
    
    QUESTIONS.forEach((question, index) => {
        const previewItem = document.createElement('div');
        const isAnswered = appState.answers[index] !== null;
        
        previewItem.className = `preview-item ${isAnswered ? 'answered' : 'unanswered'}`;
        
        const answerText = isAnswered 
            ? question.options[appState.answers[index]]
            : 'Sin responder';
        
        previewItem.innerHTML = `
            <div class="preview-question-num">Pregunta ${index + 1}</div>
            <div class="preview-question-text">${question.question}</div>
            <div class="preview-answer ${!isAnswered ? 'no-answer' : ''}">
                <strong>Respuesta:</strong> ${answerText}
            </div>
        `;
        
        // Permitir editar solo si hay tiempo
        if (appState.globalTimeRemaining > 0) {
            previewItem.addEventListener('click', () => editQuestionFromPreview(index));
        }
        
        elements.previewContainer.appendChild(previewItem);
    });
}

// Editar pregunta desde preview
function editQuestionFromPreview(questionIndex) {
    if (appState.globalTimeRemaining <= 0) {
        alert('Se ha agotado el tiempo. No puedes modificar tus respuestas.');
        return;
    }
    
    appState.currentQuestion = questionIndex;
    appState.isInPreview = false;
    
    showScreen('exam');
    renderQuestionInEdit();
}

// Renderizar pregunta en modo edición (desde preview)
function renderQuestionInEdit() {
    const question = QUESTIONS[appState.currentQuestion];
    const progress = ((appState.currentQuestion + 1) / QUESTIONS.length) * 100;
    
    elements.progressFill.style.width = `${progress}%`;
    elements.questionNumber.textContent = `Editando Pregunta ${appState.currentQuestion + 1} de ${QUESTIONS.length}`;
    elements.questionText.textContent = question.question;
    
    // Mostrar tiempo global restante
    const minutes = Math.floor(appState.globalTimeRemaining / 60);
    const seconds = appState.globalTimeRemaining % 60;
    elements.timer.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Renderizar opciones
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (appState.answers[appState.currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option-${index}" value="${index}" 
                ${appState.answers[appState.currentQuestion] === index ? 'checked' : ''}>
            <label class="option-text" for="option-${index}">${option}</label>
        `;
        
        optionDiv.addEventListener('click', () => selectOption(index));
        elements.optionsContainer.appendChild(optionDiv);
    });
    
    // Cambiar botones para volver a preview
    elements.prevBtn.style.display = 'none';
    elements.nextBtn.style.display = 'none';
    elements.submitBtn.style.display = 'block';
    elements.submitBtn.textContent = 'Volver al Resumen';
    elements.submitBtn.onclick = () => {
        showPreview();
    };
}

// Actualizar temporizador de preview
function updatePreviewTimer() {
    const minutes = Math.floor(appState.globalTimeRemaining / 60);
    const seconds = appState.globalTimeRemaining % 60;
    elements.previewTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Cambiar colores según tiempo restante
    elements.previewTimer.classList.remove('warning', 'danger');
    
    if (appState.globalTimeRemaining <= 60) {
        elements.previewTimer.classList.add('danger');
    } else if (appState.globalTimeRemaining <= 180) {
        elements.previewTimer.classList.add('warning');
    }
    
    // Deshabilitar edición si no hay tiempo
    if (appState.globalTimeRemaining <= 0) {
        const previewItems = document.querySelectorAll('.preview-item');
        previewItems.forEach(item => {
            item.style.cursor = 'not-allowed';
            item.style.opacity = '0.7';
        });
    }
}

// Actualizar temporizador (función antigua - ahora solo para compatibilidad)
function updateTimer() {
    // Esta función ya no se usa, pero la mantenemos por si acaso
}

// Enviar examen
async function submitExam() {
    stopQuestionTimer();
    stopGlobalTimer();
    
    // Verificar que todas las preguntas estén respondidas
    const unanswered = appState.answers.findIndex(answer => answer === null);
    if (unanswered !== -1) {
        const confirm = window.confirm(
            `Aún no has respondido ${appState.answers.filter(a => a === null).length} pregunta(s). ¿Deseas enviar el examen de todas formas?`
        );
        if (!confirm) {
            // Volver a preview si no confirma
            if (appState.globalTimeRemaining > 0) {
                showPreview();
            }
            return;
        }
    }
    
    appState.endTime = new Date();
    
    // Calcular puntuación
    calculateScore();
    
    // Mostrar loading
    elements.loading.style.display = 'flex';
    
    // Enviar resultados a Google Sheets
    try {
        await sendResultsToGoogleSheets();
        showResults();
    } catch (error) {
        console.error('Error al enviar resultados:', error);
        alert('Hubo un error al enviar tus resultados. Por favor, inténtalo de nuevo.');
    } finally {
        elements.loading.style.display = 'none';
    }
}

// Calcular puntuación
function calculateScore() {
    let correct = 0;
    appState.answers.forEach((answer, index) => {
        if (answer === QUESTIONS[index].correct) {
            correct++;
        }
    });
    
    // Sistema vigesimal (0-20)
    appState.score = (correct / QUESTIONS.length) * 20;
    appState.correctCount = correct;
}

// Enviar resultados a Google Sheets
async function sendResultsToGoogleSheets() {
    const duration = Math.floor((appState.endTime - appState.startTime) / 1000);
    
    const data = {
        timestamp: appState.endTime.toISOString(),
        lastname: appState.studentInfo.lastname,
        firstname: appState.studentInfo.firstname,
        email: appState.studentInfo.email,
        code: appState.studentInfo.code,
        score: appState.score.toFixed(2),
        correctAnswers: appState.correctCount,
        totalQuestions: QUESTIONS.length,
        percentage: ((appState.correctCount / QUESTIONS.length) * 100).toFixed(2),
        duration: duration,
        answers: appState.answers.map((answer, index) => ({
            questionId: QUESTIONS[index].id,
            question: QUESTIONS[index].question,
            questionType: QUESTIONS[index].type,
            timeLimit: QUESTIONS[index].timeLimit,
            userAnswer: answer !== null ? QUESTIONS[index].options[answer] : 'Sin respuesta',
            correctAnswer: QUESTIONS[index].options[QUESTIONS[index].correct],
            isCorrect: answer === QUESTIONS[index].correct
        }))
    };
    
    const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    // Note: Con mode: 'no-cors', no podemos leer la respuesta
    // pero la petición se enviará correctamente
    return true;
}

// Mostrar resultados
function showResults() {
    const fullName = `${appState.studentInfo.lastname}, ${appState.studentInfo.firstname}`;
    
    elements.finalScore.textContent = appState.score.toFixed(1);
    elements.resultName.textContent = fullName;
    elements.resultCode.textContent = appState.studentInfo.code;
    elements.correctAnswers.textContent = appState.correctCount;
    elements.percentage.textContent = ((appState.correctCount / QUESTIONS.length) * 100).toFixed(1);
    elements.examDate.textContent = appState.endTime.toLocaleString('es-ES');
    
    // Mensaje de retroalimentación
    let feedback = '';
    if (appState.score >= 18) {
        feedback = '¡Excelente! Tienes un dominio sobresaliente de LaTeX.';
    } else if (appState.score >= 14) {
        feedback = '¡Muy bien! Demuestras un buen conocimiento de LaTeX.';
    } else if (appState.score >= 11) {
        feedback = 'Aprobado. Tienes conocimientos básicos de LaTeX, pero hay margen de mejora.';
    } else {
        feedback = 'Necesitas reforzar tus conocimientos de LaTeX. Te recomendamos revisar el material del curso.';
    }
    elements.feedbackMessage.textContent = feedback;
    
    showScreen('results');
}

// Mostrar revisión de respuestas
function showReview() {
    elements.reviewContainer.innerHTML = '';
    
    QUESTIONS.forEach((question, index) => {
        const userAnswer = appState.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                ${index + 1}. ${question.question}
            </div>
            <div class="review-answer user-answer">
                <span class="answer-label">Tu respuesta:</span>
                ${userAnswer !== null ? question.options[userAnswer] : 'Sin respuesta'}
                ${isCorrect ? '✓' : '✗'}
            </div>
            ${!isCorrect ? `
                <div class="review-answer correct-answer">
                    <span class="answer-label">Respuesta correcta:</span>
                    ${question.options[question.correct]}
                </div>
            ` : ''}
        `;
        
        elements.reviewContainer.appendChild(reviewItem);
    });
    
    showScreen('review');
}

// Volver a resultados
function backToResults() {
    showScreen('results');
}

// Iniciar la aplicación
init();
