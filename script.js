// Monaco Editor Initialization
require.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs'
    }
});

var editor;

function initEditor() {
    editor = monaco.editor.create(document.getElementById('monaco-editor'), {
        value: '',
        language: 'plaintext',
        theme: 'vs-dark',
        readOnly: true, // Initially set as read-only
        lineNumbers: 'on',
        minimap: {
            enabled: false
        },
        automaticLayout: true
    });

    fetch('https://raw.githubusercontent.com/khxnsu/AppSet/main/LICENSE')
        .then(response => response.text())
        .then(data => {
            editor.setValue(data);
        })
        .catch(error => console.error('Error loading license:', error));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        editor.updateOptions({ readOnly: false });
        document.getElementById('login-section').style.display = 'none';
    } else {
        alert('Incorrect username or password');
    }
}

require(['vs/editor/editor.main'], function () {
    initEditor();
});
