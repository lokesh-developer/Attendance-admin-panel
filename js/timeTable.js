
const batchGrid = document.querySelector('.batch-grid');
const dataBatch = [
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
    batchCode: 'FECSE,',
    classTeacher: 'Sonal Patil',
    batchName: 'Final Year - Computer Science Engineering'
  }
];

const dataBatch1 = [
  {
    day: 'Monday',
    subject: "ML",
    teacher: "Rais",
    time: "10am-11am"
  },
  {
    day: 'Tuesday',
    subject: "Web deveopment",
    teacher: "Lokesh",
    time: "11am-12pm"
  },
  {
    day: 'Wednesday',
    subject: "M1",
    teacher: "Hemant",
    time: "12pm-1pm"
  },
  {
    day: 'Thursday',
    subject: "DS",
    teacher: "Piyush",
    time: "1pm-2pm"
  }
]

const dataBatch2 = [
  {
    day: 'Wednesday',
    subject: "M1",
    teacher: "Hemant",
    time: "12pm-1pm"
  },
  {
    day: 'Monday',
    subject: "ML",
    teacher: "Rais",
    time: "10am-11am"
  },
  {
    day: 'Tuesday',
    subject: "Web deveopment",
    teacher: "Lokesh",
    time: "11am-12pm"
  },
  
  {
    day: 'Thursday',
    subject: "DS",
    teacher: "Piyush",
    time: "1pm-2pm"
  }
]

const dataBatch3 = [
  {
    day: 'Thursday',
    subject: "DS",
    teacher: "Piyush",
    time: "1pm-2pm"
  },
  {
    day: 'Wednesday',
    subject: "M1",
    teacher: "Hemant",
    time: "12pm-1pm"
  },
  {
    day: 'Monday',
    subject: "ML",
    teacher: "Rais",
    time: "10am-11am"
  },
  {
    day: 'Tuesday',
    subject: "Web deveopment",
    teacher: "Lokesh",
    time: "11am-12pm"
  }  
]

/*

try all array methods on above array

https://www.w3schools.com/js/js_array_methods.asp

*/

function showBatches() {
  dataBatch.map((e) => {
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

const batchBox = document.querySelectorAll('.batch-box');

Array.from(batchBox).map((e, i)=> {
  const timeTable = document.querySelector('.time-table')
  e.addEventListener('click', (e)=> {
    timeTable.style.display = 'block'
    switch (i) {
      case 0:
        timeTable.innerHTML = `<tr>
        <th>Day</th>
        <th>Subject</th>
        <th>Teacher</th>
        <th>Time</th>
      </tr>`
        dataBatch1.map((e)=> {
          timeTable.insertAdjacentHTML(
            'beforeend',
            `
            <tr>
              <td>${e.day}</td>
              <td>${e.subject}</td>
              <td>${e.teacher}</td>
              <td>${e.time}</td>
            </tr>
            `
            )
        })
        
        break;
    
      case 1: 
      timeTable.innerHTML = `<tr>
        <th>Day</th>
        <th>Subject</th>
        <th>Teacher</th>
        <th>Time</th>
      </tr>`
      dataBatch2.map((e)=> {
        
        timeTable.insertAdjacentHTML(
          'beforeend',
          `
          <tr>
            <td>${e.day}</td>
            <td>${e.subject}</td>
            <td>${e.teacher}</td>
            <td>${e.time}</td>
          </tr>
          `
          )
      })

      break;

      case 2: 
      timeTable.innerHTML = `<tr>
        <th>Day</th>
        <th>Subject</th>
        <th>Teacher</th>
        <th>Time</th>
      </tr>`
      dataBatch3.map((e)=> {
        timeTable.insertAdjacentHTML(
          'beforeend',
          `
          <tr>
            <td>${e.day}</td>
            <td>${e.subject}</td>
            <td>${e.teacher}</td>
            <td>${e.time}</td>
          </tr>
          `
          )
      })

      break;
    }
  })
})

