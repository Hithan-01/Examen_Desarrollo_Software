        const examData = [
            {
                "question": "¿Qué es la computación en la nube?",
                "options": [
                    "Un modelo de red local",
                    "Un modelo tecnológico que permite acceso a recursos informáticos a través de Internet",
                    "Un tipo de software de escritorio",
                    "Una red privada de servidores físicos"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué empresa tiene la mayor cuota de mercado en servicios en la nube en 2025?",
                "options": [
                    "Google Cloud Platform",
                    "Microsoft Azure",
                    "Amazon Web Services (AWS)",
                    "Oracle Cloud"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Cuál de los siguientes es un modelo de servicio en la nube?",
                "options": [
                    "IaaS",
                    "VPN",
                    "HTTP",
                    "LAN"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué significa SaaS?",
                "options": [
                    "Software as a Service",
                    "Storage as a Service",
                    "System as a Service",
                    "Security as a Service"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué tipo de proveedor de nube ofrece servicios exclusivamente a una sola empresa?",
                "options": [
                    "Proveedor de nube pública",
                    "Proveedor de nube híbrida",
                    "Proveedor de nube privada",
                    "Proveedor de nube compartida"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Cuál es una ventaja clave de la computación en la nube?",
                "options": [
                    "Mayor consumo energético",
                    "Acceso bajo demanda a recursos informáticos",
                    "Mayor necesidad de hardware físico",
                    "Menor escalabilidad"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué proveedor destaca por sus capacidades de inteligencia artificial y machine learning?",
                "options": [
                    "Google Cloud Platform",
                    "IBM Cloud",
                    "Rackspace",
                    "Digital Ocean"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué modelo de servicio permite a los usuarios ejecutar aplicaciones sin gestionar la infraestructura?",
                "options": [
                    "IaaS",
                    "PaaS",
                    "SaaS",
                    "VPN"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué proveedor ofrece Amazon EC2 y S3?",
                "options": [
                    "Google Cloud",
                    "Microsoft Azure",
                    "Amazon Web Services",
                    "Oracle Cloud"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Qué porcentaje aproximado del mercado global de nube tienen AWS, Azure y GCP juntos en 2025?",
                "options": [
                    "55%",
                    "62%",
                    "75%",
                    "80%"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué proveedor de nube tiene sede en China?",
                "options": [
                    "Alibaba Cloud",
                    "Salesforce Cloud",
                    "OVHCloud",
                    "IBM Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué modelo de nube combina servicios públicos y privados?",
                "options": [
                    "Nube híbrida",
                    "Nube privada",
                    "Nube pública",
                    "Nube comunitaria"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor ofrece Azure Hybrid Benefit?",
                "options": [
                    "Amazon Web Services",
                    "Google Cloud",
                    "Microsoft Azure",
                    "Oracle Cloud"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Qué porcentaje aproximado del mercado tiene AWS según datos de 2025?",
                "options": [
                    "25%",
                    "30%",
                    "35%",
                    "40%"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué servicio ofrece bases de datos gestionadas en AWS?",
                "options": [
                    "Amazon EC2",
                    "Amazon S3",
                    "Amazon RDS",
                    "Amazon Lambda"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Qué proveedor tiene sede en Francia?",
                "options": [
                    "Rackspace",
                    "OVHCloud",
                    "Salesforce Cloud",
                    "Alibaba Cloud"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué modelo de servicio permite alquilar recursos como máquinas virtuales?",
                "options": [
                    "SaaS",
                    "PaaS",
                    "IaaS",
                    "VPN"
                ],
                "correct_answer": 2
            },
            {
                "question": "¿Cuál es el mayor desafío para las organizaciones en la nube según Flexera 2025?",
                "options": [
                    "Seguridad",
                    "Gestión de costos",
                    "Migración de datos",
                    "Capacitación del personal"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué proveedor es conocido por su escalabilidad y ser pionero en servicios de nube pública?",
                "options": [
                    "IBM Cloud",
                    "Amazon Web Services",
                    "Oracle Cloud",
                    "Salesforce Cloud"
                ],
                "correct_answer": 1
            },
            {
                "question": "¿Qué porcentaje de empresas usa un modelo de nube híbrida según Flexera 2025?",
                "options": [
                    "62%",
                    "70%",
                    "82%",
                    "92%"
                ],
                "correct_answer": 1
            }
        ];

        let userAnswers = {};

        function renderQuestions() {
            const container = document.getElementById('questionsContainer');
            
            examData.forEach((q, qIndex) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                
                questionDiv.innerHTML = `
                    <div class="question-header">
                        <div class="question-number">Pregunta ${qIndex + 1}</div>
                        <div class="question-text">${q.question}</div>
                    </div>
                    <div class="options">
                        ${q.options.map((option, oIndex) => `
                            <div class="option" onclick="selectAnswer(${qIndex}, ${oIndex})">
                                <input type="radio" name="q${qIndex}" value="${oIndex}" id="q${qIndex}_${oIndex}">
                                <div class="option-text">${option}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                container.appendChild(questionDiv);
            });

            document.getElementById('totalCount').textContent = examData.length;
        }

        function selectAnswer(questionIndex, optionIndex) {
            // Si ya estaba seleccionada esta opción, la deseleccionamos
            if (userAnswers[questionIndex] === optionIndex) {
                delete userAnswers[questionIndex];
                
                // Deseleccionar radio button
                const radio = document.getElementById(`q${questionIndex}_${optionIndex}`);
                radio.checked = false;
                radio.closest('.option').classList.remove('selected');
            } else {
                // Seleccionar nueva opción
                userAnswers[questionIndex] = optionIndex;
                
                // Update radio button
                const radio = document.getElementById(`q${questionIndex}_${optionIndex}`);
                radio.checked = true;
                
                // Update visual selection
                document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(input => {
                    input.closest('.option').classList.remove('selected');
                });
                
                radio.closest('.option').classList.add('selected');
            }
            
            updateProgress();
        }

        function updateProgress() {
            const answered = Object.keys(userAnswers).length;
            const total = examData.length;
            const percentage = (answered / total) * 100;
            
            document.getElementById('progressBar').style.width = `${percentage}%`;
            document.getElementById('answeredCount').textContent = answered;
            document.getElementById('submitBtn').disabled = answered < total;
        }

        function clearAll() {
            if (confirm('¿Estás seguro de que quieres limpiar todas las respuestas?')) {
                userAnswers = {};
                
                // Clear all selections
                document.querySelectorAll('input[type="radio"]').forEach(radio => {
                    radio.checked = false;
                    radio.closest('.option').classList.remove('selected');
                });
                
                updateProgress();
            }
        }

        function submitExam() {
            let correct = 0;
            const results = [];
            
            examData.forEach((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct_answer;
                if (isCorrect) correct++;
                
                results.push({
                    question: index + 1,
                    questionText: q.question,
                    correct: isCorrect,
                    userAnswer: userAnswer !== undefined ? q.options[userAnswer] : 'Sin respuesta',
                    correctAnswer: q.options[q.correct_answer]
                });
            });
            
            showResults(correct, results);
        }

        function showResults(correct, results) {
            const score = Math.round((correct / examData.length) * 100);
            const scoreCircle = document.getElementById('scoreCircle');
            const scoreText = document.getElementById('scoreText');
            const resultsTitle = document.getElementById('resultsTitle');
            const correctCount = document.getElementById('correctCount');
            const totalQuestions = document.getElementById('totalQuestions');
            const resultsBody = document.getElementById('resultsBody');
            
            // Update score display
            scoreText.textContent = `${score}%`;
            correctCount.textContent = correct;
            totalQuestions.textContent = examData.length;
            
            // Set score color and message
            if (score >= 80) {
                scoreCircle.className = 'score-circle score-excellent';
                resultsTitle.textContent = '¡Excelente trabajo! 🎉';
            } else if (score >= 60) {
                scoreCircle.className = 'score-circle score-good';
                resultsTitle.textContent = 'Buen trabajo 👍';
            } else {
                scoreCircle.className = 'score-circle score-poor';
                resultsTitle.textContent = 'Necesitas estudiar más 📚';
            }
            
            // Show wrong answers or perfect score message
            const wrongAnswers = results.filter(r => !r.correct);
            
            if (wrongAnswers.length === 0) {
                resultsBody.innerHTML = `
                    <div class="perfect-score">
                        <div class="perfect-emoji">🏆</div>
                        <h3>¡Puntuación perfecta!</h3>
                        <p>Has respondido todas las preguntas correctamente. ¡Felicitaciones!</p>
                    </div>
                `;
            } else {
                let wrongHtml = '<h4 style="margin-bottom: 16px; color: #dc2626;">Respuestas a revisar:</h4>';
                
                wrongAnswers.forEach(w => {
                    wrongHtml += `
                        <div class="wrong-answer">
                            <div class="wrong-question">Pregunta ${w.question}</div>
                            <div style="font-size: 13px; color: #666; margin-bottom: 12px;">${w.questionText}</div>
                            
                            <div class="answer-row">
                                <div class="answer-icon wrong-icon">✗</div>
                                <span>Tu respuesta: ${w.userAnswer}</span>
                            </div>
                            
                            <div class="answer-row">
                                <div class="answer-icon correct-icon">✓</div>
                                <span>Respuesta correcta: ${w.correctAnswer}</span>
                            </div>
                        </div>
                    `;
                });
                
                resultsBody.innerHTML = wrongHtml;
            }
            
            // Show modal
            document.getElementById('resultsModal').style.display = 'flex';
        }

        function closeResults() {
            document.getElementById('resultsModal').style.display = 'none';
        }

        // Close modal when clicking outside
        document.getElementById('resultsModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeResults();
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderQuestions();
            updateProgress();
        });
