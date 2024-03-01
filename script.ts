function addTask() {
  const inputValue = (<HTMLInputElement>document.getElementById('taskInput')).value;

  if (inputValue !== '') {
      const li = document.createElement('li');

      // Create span element to contain task text
      const taskText = document.createElement('span');
      taskText.innerText = inputValue;
      li.appendChild(taskText);

      // Create input field for editing task content
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.style.display = 'none'; // Hide input field by default
      li.appendChild(editInput);

      // Create edit button
      const editBtn = document.createElement('button');
      editBtn.innerText = 'Edit';
      editBtn.addEventListener('click', function () {
          // Toggle display of task text and input field
          taskText.style.display = 'none';
          editInput.style.display = 'inline';
          editInput.value = taskText.innerText; // Set input value to current task text
          editInput.focus(); // Focus on input field
          editBtn.style.display = 'none'; // Hide edit button
          saveBtn.style.display = 'inline'; // Show save button
      });
      li.appendChild(editBtn);

      // Create save button
      const saveBtn = document.createElement('button');
      saveBtn.innerText = 'Save';
      saveBtn.style.display = 'none'; // Hide save button by default
      saveBtn.addEventListener('click', function () {
          // Update task text with edited input value
          taskText.innerText = editInput.value;
          taskText.style.display = 'inline'; // Show task text
          editInput.style.display = 'none'; // Hide input field
          saveBtn.style.display = 'none'; // Hide save button
          editBtn.style.display = 'inline'; // Show edit button
      });
      li.appendChild(saveBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', function () {
          li.remove();
      });
      li.appendChild(deleteBtn);

      document.getElementById('taskList')!.appendChild(li);

      // Clear input field after adding task
      (<HTMLInputElement>document.getElementById('taskInput'))!.value = '';
  }
}

document.getElementById('taskInput')!.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      addTask();
  }
});
document.getElementById('taskList').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      const editInput = document.querySelector('#taskList input[type="text"]');
      if (editInput !== null) {
          const saveBtn = document.querySelector('#taskList button:last-child') as HTMLButtonElement;
          if (saveBtn !== null) {
              saveBtn.click(); // Trigger click event on the Save button
          }
      }
  }
});

