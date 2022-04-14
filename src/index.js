document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let totalTasks = [];
  function myTask(taskDescription){
    this.task = taskDescription;
  }

  let myform = document.getElementById("create-task-form")
  myform.addEventListener("submit", (e) => {
    e.preventDefault()
    let description = document.getElementById("new-task-description").value;
    
    if(description !== ''){
      let taskObj = new myTask(description)
      totalTasks.push(taskObj)
      appendElem(totalTasks)
      e.target.reset()
    } else {
      alert("Hey You Havent entered anything")
    }
  })  
});

function appendElem(elem){
  let p = document.createElement('p')
  let btn = document.createElement("button")
  btn.textContent = " x "
  let toAppend = document.getElementById("tasks")
  
  elem.forEach( mytask => {
    p.textContent = ` ${mytask.task} `;
    p.appendChild(btn);
    toAppend.appendChild(p)
    
  })
  btn.addEventListener("click", deleteToDo)
}

function deleteToDo(e){
  e.target.parentNode.remove()
}