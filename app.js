const list = document.querySelector('.list');
let input = document.querySelector('.input');

function addTask() {
  const li = document.createElement('li');
  li.classList.add('tasks');
  let inputValue = input.value;
  li.innerText = inputValue;
  list.appendChild(li);
}
deleteTasks();
function deleteTasks() {
  let taskList = document.querySelectorAll('.tasks');
  taskList.forEach((task) => {
    task.addEventListener('click', () => {
      if (task.classList.contains('done')) {
        task.classList.remove('done');
      } else {
        task.classList.add('done');
      }
    });
  });
}
