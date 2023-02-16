const teacherBox = document.querySelector('.teacher-box');

teacherBox.addEventListener('click', (e) => {
  window.location = `/teachers.html#${e.target.id}`;
});
