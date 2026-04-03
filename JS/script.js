  
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.list');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.getElementById("downloadBtn").addEventListener("click", function () {
    let table = document.querySelector("table");
    let rows = table.querySelectorAll("tr");

    let csv = [];

    rows.forEach(row => {
      let cols = row.querySelectorAll("th, td");
      let rowData = [];

      cols.forEach(col => {
        rowData.push(col.innerText.trim());
      });

      csv.push(rowData.join(","));
    });

    let csvFile = new Blob([csv.join("\n")], { type: "text/csv" });

    let downloadLink = document.createElement("a");
    downloadLink.download = "invoice_data.csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
  });



  // Function to update status color
  function updateStatusColor(cell) {
    const text = cell.innerText.trim().toLowerCase();
    if (text === "paid") {
      cell.style.color = "rgb(160, 204, 160)"; // green
    } else if (text === "pending") {
      cell.style.color = "rgb(225, 71, 71)"; // red
    }
  }

  // Select all status cells
  document.querySelectorAll(".status").forEach(cell => {
    // Set initial color on page load
    updateStatusColor(cell);

    // Make it clear the cell is clickable
    cell.style.cursor = "pointer";

    // Add click event to toggle status and color
    cell.addEventListener("click", () => {
      if (cell.innerText.trim() === "Paid") {
        cell.innerText = "Pending";
      } else {
        cell.innerText = "Paid";
      }
      // Update color after toggle
      updateStatusColor(cell);
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
  // your code here

  const dashboardLink = document.querySelector('#gol a');
  const sidebar = document.querySelector('.list');
  const title = document.querySelector('.dash h2');

  dashboardLink.addEventListener('click', function (e) {
    e.preventDefault(); // stop link behavior

    // remove active from all
    document.querySelectorAll('.list-group-item').forEach(i => i.classList.remove('active'));

    // add active to dashboard
    document.getElementById('gol').classList.add('active');

    // change title
    title.innerText = "Dashboard";

    // close sidebar (mobile)
    sidebar.classList.remove('open');
  });
  });
