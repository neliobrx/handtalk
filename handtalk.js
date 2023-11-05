document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionnaireForm');

    // Validacao formulario
    function validateForm() {
        const requiredQuestions = ['questao1', 'questao3', 'questao7', 'questao10'];
        for (let question of requiredQuestions) {
            if (!document.querySelector(`input[name="${question}"]:checked`)) {
                alert(`Por favor, responda a questão: ${question}`);
                return false;
            }
        }
        return true;
    }

    // Coletar dados do formulário
    function collectFormData() {
        const formData = {
            questao1: document.querySelector('input[name="questao1"]:checked')?.value,
            questao2: document.querySelector('textarea[name="questao2"]').value,
            questao3: document.querySelector('input[name="questao3"]:checked')?.value,
            questao4: document.querySelector('textarea[name="questao4"]').value,
            // Repetir para as demais questões
            questao5: document.querySelector('textarea[name="questao5"]').value,
            questao6: document.querySelector('textarea[name="questao6"]').value,
            questao7: document.querySelector('input[name="questao7"]:checked')?.value,
            questao8: document.querySelector('textarea[name="questao8"]').value,
            questao9: document.querySelector('textarea[name="questao9"]').value,
            questao10: document.querySelector('input[name="questao10"]:checked')?.value
        };
        return formData;
    }

    // Processando as respostas do formulário
    function processFormResponses(formData) {
        console.log('Dados do Formulário:', formData);
        
    }

    // Event listener para o envio do formulário
    form.addEventListener('submit', function(e) {
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
