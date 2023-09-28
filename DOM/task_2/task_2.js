const table = document.getElementById('sampleTable');
const input = document.querySelector('input');
const rows = document.getElementsByTagName('tr');

function insertRow() {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    const cell2 = document.createElement('td');

    table.appendChild(row);

    row.appendChild(cell).innerHTML = `Row${rows.length} cell1`;
    row.appendChild(cell2).innerHTML = `Row${rows.length} cell2`;
}

input.onclick = insertRow;