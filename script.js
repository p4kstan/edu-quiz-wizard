
// Quiz State
let currentStep = 1;
let answers = {
    education: '',
    goal: '',
    course: ''
};

// Course Data
const courseData = {
    'ensino-medio': {
        title: '📚 Ensino Médio',
        price: 'R$ 600,00',
        description: 'A documentação completa do Ensino Médio está disponível por R$ 600,00 e inclui:',
        features: [
            'Diploma',
            'Histórico Escolar',
            'Certificado de Conclusão'
        ],
        additionalInfo: 'Válidos em todo território nacional, para empregos, cursos técnicos e universidades.\n🔒 Processo seguro, sigiloso e profissional.\n💳 Pagamento: Pix, boleto ou transferência.',
        placeholder: 'Ex: Ensino Médio Regular ou EJA'
    },
    'tecnico': {
        title: '🛠️ Técnico',
        price: 'A partir de R$ 1.200,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: Técnico em Enfermagem, Técnico em Informática'
    },
    'tecnologo': {
        title: '💼 Tecnólogo',
        price: 'A partir de R$ 1.900,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: Tecnólogo em Logística, RH'
    },
    'graduacao': {
        title: '🎓 Graduação',
        price: 'A partir de R$ 2.200,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: Graduação em Direito, Psicologia, Administração'
    },
    'pos-graduacao': {
        title: '📈 Pós-Graduação',
        price: 'A partir de R$ 2.000,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: MBA em Gestão de Projetos'
    },
    'mestrado': {
        title: '🔬 Mestrado',
        price: 'A partir de R$ 2.900,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: Mestrado em Educação'
    },
    'doutorado': {
        title: '🧠 Doutorado',
        price: 'A partir de R$ 3.600,00',
        description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
        features: [
            'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
            'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
            'Homologado pelo MEC, publicado no Diário Oficial da União'
        ],
        additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto',
        placeholder: 'Ex: Doutorado em Ciências Jurídicas'
    }
};

// DOM Elements
const progressFill = document.getElementById('progress-fill');
const currentStepSpan = document.getElementById('current-step');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const modal = document.getElementById('course-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateUI();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    // Option cards for steps 1 and 2
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            const step = this.closest('.quiz-step').id;
            const value = this.dataset.value;
            
            // Remove previous selections
            this.closest('.options-grid').querySelectorAll('.option-card').forEach(c => {
                c.classList.remove('selected');
            });
            
            // Add selection
            this.classList.add('selected');
            
            // Store answer
            if (step === 'step-1') {
                answers.education = value;
            } else if (step === 'step-2') {
                answers.goal = value;
            }
            
            updateUI();
        });
    });
    
    // Course options for step 3
    document.querySelectorAll('.course-option').forEach(option => {
        const card = option.querySelector('.course-card');
        card.addEventListener('click', function() {
            const courseId = option.dataset.course;
            answers.course = courseId;
            openCourseModal(courseId);
        });
    });
    
    // Navigation buttons
    backBtn.addEventListener('click', goBack);
    nextBtn.addEventListener('click', goNext);
    
    // Modal close
    closeModal.addEventListener('click', closeCourseModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCourseModal();
        }
    });
}

// Navigation Functions
function goNext() {
    if (currentStep < 3) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        updateUI();
    }
}

function goBack() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        updateUI();
    }
}

function updateUI() {
    // Update progress bar
    const progress = (currentStep / 3) * 100;
    progressFill.style.width = `${progress}%`;
    currentStepSpan.textContent = currentStep;
    
    // Update navigation buttons
    backBtn.style.display = currentStep > 1 ? 'block' : 'none';
    
    // Show/hide next button based on selection
    const canAdvance = checkCanAdvance();
    nextBtn.style.display = canAdvance && currentStep < 3 ? 'block' : 'none';
}

function checkCanAdvance() {
    switch (currentStep) {
        case 1:
            return answers.education !== '';
        case 2:
            return answers.goal !== '';
        case 3:
            return false; // Step 3 advances via modal
        default:
            return false;
    }
}

// Modal Functions
function openCourseModal(courseId) {
    const course = courseData[courseId];
    if (!course) return;
    
    modalBody.innerHTML = `
        <div class="price-banner">
            <h3>${course.price}</h3>
        </div>
        
        <div class="modal-header">
            <h2>${course.title}</h2>
        </div>
        
        <div class="course-description">
            <p>${course.description}</p>
            
            ${course.features.length > 0 ? `
                <ul class="features-list">
                    ${course.features.map(feature => `
                        <li>
                            <span class="check-icon">✓</span>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            ` : ''}
            
            <div class="additional-info">${course.additionalInfo}</div>
        </div>
        
        <div class="form-section">
            <h4>Preencha seus dados:</h4>
            
            <div class="form-group">
                <label for="modal-name">Nome completo *</label>
                <input type="text" id="modal-name" placeholder="Digite seu nome completo">
                <div class="error-message" id="name-error" style="display: none;">
                    ⚠️ Nome completo é obrigatório
                </div>
            </div>
            
            <div class="form-group">
                <label for="modal-course">Nome exato do curso ou área desejada *</label>
                <input type="text" id="modal-course" placeholder="${course.placeholder}">
                <div class="error-message" id="course-error" style="display: none;">
                    ⚠️ Nome exato do curso é obrigatório
                </div>
            </div>
            
            <div class="warning-section">
                <div class="warning-title">AVISO IMPORTANTE:</div>
                <p><span style="color: red;">❌</span> Respostas como "quero ${course.title.toLowerCase()}", "uma pós na saúde" ou "qualquer mestrado" não serão aceitas.</p>
                <p><span style="color: green;">✅</span> O campo "Nome exato do curso" é OBRIGATÓRIO. Descreva com precisão para garantir um atendimento direcionado e eficaz.</p>
            </div>
        </div>
        
        <div class="modal-buttons">
            <button class="btn-success" onclick="handleInterested()">
                ✅ Sim! Tenho real interesse em atendimento.
            </button>
            <button class="btn-decline" onclick="closeCourseModal()">
                ❌ Não. Achei o valor muito alto.
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeCourseModal() {
    modal.style.display = 'none';
}

function handleInterested() {
    const nameInput = document.getElementById('modal-name');
    const courseInput = document.getElementById('modal-course');
    const nameError = document.getElementById('name-error');
    const courseError = document.getElementById('course-error');
    
    // Clear previous errors
    nameError.style.display = 'none';
    courseError.style.display = 'none';
    nameInput.parentElement.classList.remove('error');
    courseInput.parentElement.classList.remove('error');
    
    let hasError = false;
    
    // Validate name
    if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        nameInput.parentElement.classList.add('error');
        hasError = true;
    }
    
    // Validate course
    if (!courseInput.value.trim()) {
        courseError.style.display = 'block';
        courseInput.parentElement.classList.add('error');
        hasError = true;
    }
    
    if (hasError) {
        return;
    }
    
    // Prepare WhatsApp message
    const whatsappNumber = '+6283871072811';
    const course = courseData[answers.course];
    
    const message = encodeURIComponent(`
🎓 INTERESSE EM FORMAÇÃO EDUCACIONAL

📋 *DADOS DO CLIENTE:*
Nome: ${nameInput.value}
Curso Desejado: ${courseInput.value}

📊 *INFORMAÇÕES DO QUIZ:*
Nível Atual: ${answers.education}
Objetivo: ${answers.goal}
Formação Escolhida: ${course.title}

💰 *VALOR:* ${course.price}

🔒 Tenho real interesse em atendimento personalizado.
    `.trim());
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Call GTM function
    if (typeof window.DispararGTM === 'function') {
        window.DispararGTM();
    }
    
    // Call EnviarActive if available
    if (typeof window.EnviarActive === 'function') {
        window.EnviarActive();
    }
    
    // Close modal and show success page
    closeCourseModal();
    showSuccessPage();
}

function showSuccessPage() {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById('success-page').classList.add('active');
    
    // Hide navigation buttons
    backBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    
    // Update progress to 100%
    progressFill.style.width = '100%';
    currentStepSpan.textContent = '3';
}

// Utility function to get education level label
function getEducationLabel(value) {
    const labels = {
        'educacao-basica': 'Educação Básica',
        'graduacao': 'Graduação',
        'pos-graduacao-mba': 'Pós-Graduação (MBA)',
        'pos-graduacao-stricto': 'Pós-Graduação (Mestrado/Doutorado)',
        'curso-tecnico': 'Curso Técnico'
    };
    return labels[value] || value;
}

// Utility function to get goal label
function getGoalLabel(value) {
    const labels = {
        'concursos-publicos': 'Prestar concursos públicos',
        'crescimento-carreira': 'Crescimento na carreira',
        'melhor-colocacao': 'Melhor colocação no mercado',
        'ingressar-pos': 'Ingressar em uma pós',
        'validacao-internacional': 'Validação internacional',
        'reconhecimento-profissional': 'Reconhecimento profissional'
    };
    return labels[value] || value;
}
