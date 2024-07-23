document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jobPostingForm');
    const aiChat = document.getElementById('aiChat');
    const userInput = document.getElementById('userInput');
    const sendQuery = document.getElementById('sendQuery');
    const assistButtons = document.querySelectorAll('.assist-btn');
    const popup = document.getElementById('aiAssistantPopup');
    const closeBtn = document.querySelector('.close-btn');
    const assistantContext = document.getElementById('assistantContext');
    const salaryRange = document.getElementById('salaryRange');
    const salaryOutput = document.getElementById('salaryOutput');
    const applicationDeadline = document.getElementById('applicationDeadline');
    const today = new Date().toISOString().split('T')[0];
    applicationDeadline.min = today;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
    });

    sendQuery.addEventListener('click', () => {
        const query = userInput.value;
        if (query.trim() !== '') {
            addMessage('user', query);
            simulateAIResponse(query);
            userInput.value = '';
        }
    });

    assistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const field = e.target.closest('.assist-btn').dataset.field;
            openPopup(field);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    salaryRange.addEventListener('input', (e) => {
        const value = e.target.value;
        salaryOutput.textContent = `$${parseInt(value).toLocaleString()}`;
    });

    function openPopup(field) {
        popup.style.display = 'block';
        assistantContext.textContent = `Assisting with: ${field}`;
        aiChat.innerHTML = ''; // Clear previous chat
        const query = `Help me with the ${field} field`;
        addMessage('user', query);
        simulateAIResponse(query);
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        aiChat.appendChild(messageElement);
        aiChat.scrollTop = aiChat.scrollHeight;
    }

    function simulateAIResponse(query) {
        setTimeout(() => {
            const response = `Here's some help with "${query}". [AI response would go here]`;
            addMessage('ai', response);
        }, 1000);
    }
});