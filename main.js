const calendarBtn = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarDays =24;


const openDoor =(path,e)=>{
  e.target.parentNode.style.backgroundImage= `url(${path})`;
  e.target.style.opacity= '0';
  e.target.style.backgroundColor = 'black'
}
const createCaledar = () =>{
  for(let i=0 ; i<calendarDays; i++){
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");
    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i+1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i+1;
    calendarDoor.appendChild(calendarDoorText);
    courseNumber = i+1;
    let coursePath = `./assets/course-${courseNumber}.jpg`;
    calendarDoorText.addEventListener("click",openDoor.bind(null,coursePath))
  
  } 
}
calendarBtn.addEventListener("click", createCaledar)
