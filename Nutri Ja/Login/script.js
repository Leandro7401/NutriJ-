function login() {
    // Simulação de autenticação
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação de usuário e senha (simulação)
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar para a página principal ou executar outras ações pós-login
    } else {
        alert('Usuário ou senha incorretos.');
    }
}