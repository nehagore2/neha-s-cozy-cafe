const form = document.getElementById('reserveForm');
const successMsg = document.getElementById('successMsg');

// set min date to today
document.getElementById('date').min = new Date().toISOString().split("T")[0];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // simple animation
  form.style.opacity = '0.5';
  setTimeout(() => {
    form.reset();
    form.style.opacity = '1';
    successMsg.style.display = 'block';

    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 4000);
  }, 500);
});