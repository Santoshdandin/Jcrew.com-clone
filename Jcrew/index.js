// Write code related to Home page here 

let form = document.querySelector("form");
document.querySelector("form").addEventListener("submit",createTask);

let taskArr=JSON.parse(localStorage.getItem("task-list")) || []

function createTask(){
    event.preventDefault();
    let obj = {
        name:form.name.value,
        description:form.desc.value,
        startDate:form.start.value,
        endDate:form.end.value,
        priority:form.priority.value,
    }
    taskArr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(taskArr));

        form.name.value=""
        form.desc.value=""
        form.start.value=""
        form.end.value=""
        form.priority.value=""
}

