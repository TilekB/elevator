const elevator = document.querySelector('.elevator');
const upButton = document.getElementById('up-btn');
const downButton = document.getElementById('down-btn');
const goButton = document.getElementById('go-btn');
const buildingHeight = 600;
const floorHeight = buildingHeight / 6; // Assuming a 6-floor building

let currentFloor = 1;

function soundClick() {
  var audio = new Audio();
  audio.src = '/Users/tilekbolotov/Desktop/Makers/Elevator/assets/Bayhan.mp3';
  audio.autoplay = true;
}

function moveElevator(targetFloor) {
  const targetPosition = (targetFloor - 1) * floorHeight;
  elevator.style.transition = 'bottom 2s';
  elevator.style.bottom = targetPosition + 'px';
  currentFloor = targetFloor;
}

upButton.addEventListener('click', () => {
  if (currentFloor < 6) {
    moveElevator(currentFloor + 1);
  }
});

downButton.addEventListener('click', () => {
  if (currentFloor > 1) {
    moveElevator(currentFloor - 1);
  }
});

goButton.addEventListener('click', () => {
  const inputFloor = prompt('Enter the desired floor (1 to 6):');
  const desiredFloor = parseInt(inputFloor);

  if (desiredFloor >= 1 && desiredFloor <= 6 && desiredFloor
     !== currentFloor) {
    moveElevator(desiredFloor);
  } else {
    alert('Invalid floor input. Please enter a valid floor number.');
  }
});
