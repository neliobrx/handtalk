document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionnaireForm');

    const requiredQuestions = ['questao1', 'questao3', 'questao7', 'questao10'];

    const validateForm = () => {
        for (let question of requiredQuestions) {
            if (!document.querySelector(`input[name="${question}"]:checked`)) {
                alert(`Por favor, responda a questão: ${question}`);
                return false;
            }
        }
        return true;
    };

    const collectFormData = () => {
        let formData = {};
        for (let i = 1; i <= 10; i++) {
            if (requiredQuestions.includes(`questao${i}`)) {
                formData[`questao${i}`] = document.querySelector(`input[name="questao${i}"]:checked`)?.value;
            } else {
                formData[`questao${i}`] = document.querySelector(`textarea[name="questao${i}"]`).value;
            }
        }
        return formData;
    };

    const processFormResponses = (formData) => {
        console.log('Dados do Formulário:', formData);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = collectFormData();
            processFormResponses(formData);
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, complete todas as perguntas obrigatórias.');
        }
    });
});
