document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("student-form");
  const studentTable = document.getElementById("student-table").querySelector("tbody");
  const totalStudents = document.getElementById("total-students");
  const lastAdded = document.getElementById("last-added");

  let students = [];

  studentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const gender = document.getElementById("gender").value.trim();
      const id = document.getElementById("id").value.trim();
      const classes = document.getElementById("classes").value.trim();

      if (name && id && gender && classes) {
          const student = { name, id, gender, classes };
          students.push(student);
          updateUI();
          studentForm.reset();
      }
  });

  function updateUI() {
      studentTable.innerHTML = "";
      students.forEach((student, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.id}</td>
              <td>${student.gender}</td>
              <td>${student.classes}</td>
          `;
          studentTable.appendChild(row);
      });

      totalStudents.textContent = students.length;
      lastAdded.textContent = students[students.length - 1]?.name || "None";
  }
});
