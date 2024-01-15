/*document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {

        item.addEventListener('click', function () {
            // Alternar a visibilidade da resposta ao clicar na pergunta
            var answer = this.querySelector('.faq-answer')
            answer.classList.toggle('expandido')
            var img = this.querySelector('.duvidaimg')
            img.src = String(img.src).includes('imagem/mais.duv.png') ? 'imagem/menos.duv.png' : 'imagem/mais.duv.png'

        });
    });
});
function Login(){
    window.location.href = 'login/login.html'

}*/
document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var answer = this.querySelector('.faq-answer');
            var img = this.querySelector('.duvidaimg');

            if (answer.classList.contains('expandido')) {
                // Se expandido, fecha
                answer.style.height = '0';
                answer.classList.remove('expandido');
                img.src = 'imagem/mais.duv.png';
            } else {
                // Se não expandido, calcula e define a altura automática
                var autoHeight = answer.scrollHeight + 'px';
                answer.style.height = autoHeight;
                answer.classList.add('expandido');
                img.src = 'imagem/menos.duv.png';
            }
        });
    });
});
