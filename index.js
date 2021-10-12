let taskInputEl = document.getElementById('inputTask');
let addTaskBtn = document.querySelector('.addBtn');

addTaskBtn.addEventListener('click', function () {
	// get input value
	task = taskInputEl.value.trim();
	taskInputEl.value = '';

	// check whether tasks are present in localStorage
	let taskList = localStorage.getItem('tasks')
		? JSON.parse(localStorage.getItem('tasks'))
		: [];

	// add the task to taskList

	taskList.unshift(task);

	// set taskList to localStorage
	localStorage.setItem('tasks', JSON.stringify(taskList));

	displayTasks();
});

// display tasks on view
let displayTasks = () => {
	// tbody is holding the tasklist
	let taskListEl = document.getElementById('task-list');
	let taskList = localStorage.getItem('tasks')
		? JSON.parse(localStorage.getItem('tasks'))
		: [];

	if (taskList.length !== 0) {
		let eachTask = '';
		taskList.forEach((task, index) => {
			eachTask += `   <tr>
								<td>${index}</td>
								<td>${task}</td>
								<td><button onClick="deleteTask(${index})" class="deleteBtn">Delete</button></td>
							</tr>
                            `;
		});
		taskListEl.innerHTML = eachTask;
	}
};

displayTasks();

// delete tasks
function deleteTask(index) {
	// get tasks from localStorage
	let taskList = localStorage.getItem('tasks')
		? JSON.parse(localStorage.getItem('tasks'))
		: [];

	taskList.splice(index, 1);
	localStorage.setItem('tasks', JSON.stringify(taskList));
	displayTasks();
}
