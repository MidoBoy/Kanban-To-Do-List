
//variable decleration
let add =document.getElementById("btn")
let textbox =document.getElementById("inp")
let boxs=document.querySelectorAll('.box')
let deleteBox=document.getElementById("delete")
let drag=null;
var taskList;


//handle local Storage
if(localStorage.getItem('tasks'))
{
 taskList=JSON.parse(localStorage.getItem('tasks'))
}else{
  taskList=[]
}


//add Task
function addTask() {
  if(textbox.value){
    taskList.push(textbox.value)
    localStorage.setItem('tasks',JSON.stringify(taskList))
    textbox.value=''
  }
  display()
}


//display Function
function display() {
  let task=[];
  for (let i = 0; i < taskList.length; i++) {  
    task+=`<p class="item" draggable="true">
    ${taskList[i]} <button class="delete"onclick="del(${i})">Delete</button>
  </p>`
  }
  boxs[0].innerHTML=`<h2>BACKLOG</h2>`+task
    
    
    dragItem()
}


//drag and drop function
function dragItem() {
  let items=document.querySelectorAll('.item')
  

  items.forEach(item=>{
  
    item.addEventListener('dragstart',function(){
          drag=item;
          item.style.opacity='0.7'
    })
    item.addEventListener('dragend',function(){
          drag=null;
          item.style.opacity='1'
    })
      
    boxs.forEach(box=>{
          box.addEventListener('dragover',function(e){
            e.preventDefault()
            this.style.backgroundColor='red'
        })

          box.addEventListener('dragleave',function(){
            this.style.backgroundColor='#306ca1'
        })

          box.addEventListener('drop',function(){
            box.appendChild(drag)
            this.style.backgroundColor='#306ca1'

        })
      
        
        

    })
    
    

  })
}

//delete function
function del(i) {
  console.log(i)
  taskList.splice(i,1)
  localStorage.tasks=JSON.stringify(taskList)
  display()
}

//rendering
display()



    
