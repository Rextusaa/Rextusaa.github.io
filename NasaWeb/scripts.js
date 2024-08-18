document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages');
    const renameButton = document.getElementById('rename-button');
    const renameDialog = document.getElementById('rename-dialog');
    const newNameInput = document.getElementById('new-name-input');
    const confirmRenameButton = document.getElementById('confirm-rename-button');
    const cancelRenameButton = document.getElementById('cancel-rename-button');

    let userName = 'Anonymous';

    function formatTimestamp(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function addMessage(messageText) {
        const message = document.createElement('div');
        message.className = 'message';

        const messageContent = document.createElement('p');
        messageContent.innerHTML = `<span class="user-name">${userName}:</span> ${messageText} <span class="timestamp">(${formatTimestamp(new Date())})</span>`;
        
        message.appendChild(messageContent);
        messagesContainer.appendChild(message);
        
        // Scroll to the bottom of the chat-box
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });

    renameButton.addEventListener('click', function() {
        renameDialog.style.display = 'flex';
        newNameInput.value = userName;
    });

    confirmRenameButton.addEventListener('click', function() {
        const newName = newNameInput.value.trim();
        if (newName) {
            userName = newName;
        }
        renameDialog.style.display = 'none';
    });

    cancelRenameButton.addEventListener('click', function() {
        renameDialog.style.display = 'none';
    });
});
