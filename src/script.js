document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Mostrar mensagem de sucesso
    alert(`✅ Formulário enviado com sucesso!\nNome: ${name}\nE-mail: ${email}`);

    // Esconder login, mostrar dashboard
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Atualizar nome do usuário no dashboard
    document.getElementById('user-name').textContent = name || 'Usuário Ágil';

    // Adicionar efeito de entrada no dashboard
    const dashboard = document.getElementById('dashboard');
    dashboard.style.opacity = '0';
    dashboard.style.transform = 'translateY(50px)';
    setTimeout(() => {
        dashboard.style.transition = 'opacity 0.8s, transform 0.8s';
        dashboard.style.opacity = '1';
        dashboard.style.transform = 'translateY(0)';
    }, 100);
});

// Efeito de arrastar tarefas (simulação)
document.querySelectorAll('.task-3d').forEach(task => {
    task.addEventListener('mousedown', () => {
        task.style.transform = 'translateZ(20px) rotateX(5deg)';
    });
    task.addEventListener('mouseup', () => {
        task.style.transform = 'translateZ(0) rotateX(0)';
    });
});

// Link real para o Kanban no GitHub já está no href do sidebar