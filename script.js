function addTask() {
    var inputValue = document.getElementById('taskInput').value;
    if (inputValue !== '') {
        var li_1 = document.createElement('li');
        // Create span element to contain task text
        var taskText_1 = document.createElement('span');
        taskText_1.innerText = inputValue;
        li_1.appendChild(taskText_1);
        // Create input field for editing task content
        var editInput_1 = document.createElement('input');
        editInput_1.type = 'text';
        editInput_1.style.display = 'none'; // Hide input field by default
        li_1.appendChild(editInput_1);
        // Create edit button
        var editBtn_1 = document.createElement('button');
        editBtn_1.innerText = 'Edit';
        editBtn_1.addEventListener('click', function () {
            // Toggle display of task text and input field
            taskText_1.style.display = 'none';
            editInput_1.style.display = 'inline';
            editInput_1.value = taskText_1.innerText; // Set input value to current task text
            editInput_1.focus(); // Focus on input field
            editBtn_1.style.display = 'none'; // Hide edit button
            saveBtn_1.style.display = 'inline'; // Show save button
        });
        li_1.appendChild(editBtn_1);
        // Create save button
        var saveBtn_1 = document.createElement('button');
        saveBtn_1.innerText = 'Save';
        saveBtn_1.style.display = 'none'; // Hide save button by default
        saveBtn_1.addEventListener('click', function () {
            // Update task text with edited input value
            taskText_1.innerText = editInput_1.value;
            taskText_1.style.display = 'inline'; // Show task text
            editInput_1.style.display = 'none'; // Hide input field
            saveBtn_1.style.display = 'none'; // Hide save button
            editBtn_1.style.display = 'inline'; // Show edit button
        });
        li_1.appendChild(saveBtn_1);
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function () {
            li_1.remove();
        });
        li_1.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li_1);
        // Clear input field after adding task
        document.getElementById('taskInput').value = '';
    }
}
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.getElementById('taskList').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        var editInput = document.querySelector('#taskList input[type="text"]');
        if (editInput !== null) {
            var saveBtn = document.querySelector('#taskList button:last-child');
            if (saveBtn !== null) {
                saveBtn.click(); // Trigger click event on the Save button
            }
        }
    }
});
