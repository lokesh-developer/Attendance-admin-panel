const batchBox = document.querySelector('.batch-box');
const batchGrid = document.querySelector('.batch-grid');
const data = [
  {
    batchCode: 'SECSE',
    classTeacher: 'Sonal Patil',
    batchName: 'Second Year - Computer Science Engineering'
  },
  {
    batchCode: 'TECSE',
    classTeacher: 'Sonal Patil',
    batchName: 'Third Year - Computer Science Engineering'
  },
  {
    batchCode: 'FECSE',
    classTeacher: 'Sonal Patil',
    batchName: 'Final Year - Computer Science Engineering'
  }
];

/*

try all array methods on above array

https://www.w3schools.com/js/js_array_methods.asp

*/

function showBatches() {
  data.map((e) => {
    console.log(e);
    batchGrid.insertAdjacentHTML(
      'beforeend',
      `
        <div class="batch-box">
      <p>Batch code: ${e.batchCode}</p>
      <p>
        Class Teacher: <a href="/teachers.html?teacher-id=sonal_patil">${e.classTeacher}</a>
      </p>
      <p>Batch Name: ${e.batchName}</p>
    </div>
    `
    );
  });
}
showBatches();
