document.addEventListener('DOMContentLoaded', () => {
    const projectInput = document.getElementById('project-input');
    const addProjectBtn = document.getElementById('add-project-btn');
    const projectList = document.getElementById('project-list');

    addProjectBtn.addEventListener('click', () => {
        const projectName = projectInput.value.trim();
        if (projectName) {
            addProject(projectName);
            projectInput.value = '';
        }
    });

    function addProject(name) {
        const li = document.createElement('li');
        li.textContent = name;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.addEventListener('click', () => {
            projectList.removeChild(li);
        });
        
        li.appendChild(deleteBtn);
        projectList.appendChild(li);
    }
});
