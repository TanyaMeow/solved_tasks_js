// FIXME сделай так, что бы вторая таблица тоже поддерживала этот функционал.
//  See task_2.html. Посыл замечания в том, что insertRow должен быть переиспользуемый (DONE)

function insertRow(event) {
    const table = event.target.parentElement.querySelector('table');
    const rows = table.querySelectorAll('tr');
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    const cell2 = document.createElement('td');

    table
        .appendChild(row);

    row.appendChild(cell)
        .innerHTML = `Row${rows.length + 1} cell1`;
    row.appendChild(cell2)
        .innerHTML = `Row${rows.length + 1} cell2`;
}

document
    .querySelectorAll('input')
    .forEach(inp => inp.addEventListener('click', insertRow));