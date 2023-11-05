document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionnaireForm');
    const pergunta3 = document.getElementById('pergunta3');
    const pergunta7 = document.getElementById('pergunta7');

    // Função para atualizar a visibilidade da pergunta 3
    function togglePergunta3() {
        const respostaQuestao1 = document.querySelector('input[name="questao1"]:checked');
        if (pergunta3) {
            pergunta3.style.display = respostaQuestao1 && respostaQuestao1.value === 'Sim' ? 'block' : 'none';
        }
    }

    // Função para atualizar a visibilidade da pergunta 7
    function togglePergunta7() {
        const respostaQuestao7 = document.querySelector('input[name="questao7"]:checked');
        if (pergunta7) {
            pergunta7.style.display = respostaQuestao7 && respostaQuestao7.value === 'Sim' ? 'block' : 'none';
        }
    }

    // Adiciona event listeners às opções de resposta das questões 1 e 7 diretamente pelo nome
    document.querySelectorAll('input[name="questao1"]').forEach(input => {
        input.addEventListener('change', togglePergunta3);
    });

    document.querySelectorAll('input[name="questao7"]').forEach(input => {
        input.addEventListener('change', togglePergunta7);
    });

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Outras ações ao enviar o formulário podem ser adicionadas aqui
        });
    }
});
