document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('questionnaireForm');

    // Validacao formulario
    function validateForm() {
        var requiredQuestions = ['questao1', 'questao3', 'questao7', 'questao10'];
        for (var i = 0; i < requiredQuestions.length; i++) {
            var question = requiredQuestions[i];
            if (!document.querySelector('input[name="' + question + '"]:checked')) {
                alert('Por favor, responda a questão: ' + question);
                return false;
            }
        }
        return true;
    }

    // Coletar dados do formulário
    function collectFormData() {
        var formData = {
            questao1: document.querySelector('input[name="questao1"]:checked') ? document.querySelector('input[name="questao1"]:checked').value : null,
            questao2: document.querySelector('textarea[name="questao2"]').value,
            questao3: document.querySelector('input[name="questao3"]:checked') ? document.querySelector('input[name="questao3"]:checked').value : null,
            questao4: document.querySelector('textarea[name="questao4"]').value,
            questao5: document.querySelector('textarea[name="questao5"]').value,
            questao6: document.querySelector('textarea[name="questao6"]').value,
            questao7: document.querySelector('textarea[name="questao7"]').value,
            questao8: document.querySelector('textarea[name="questao8"]').value,
            questao9: document.querySelector('textarea[name="questao9"]').value,
            questao10: document.querySelector('textarea[name="questao10"]').value
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
            var formData = collectFormData();
            processFormResponses(formData);
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, complete todas as perguntas obrigatórias.');
        }
    });
});
