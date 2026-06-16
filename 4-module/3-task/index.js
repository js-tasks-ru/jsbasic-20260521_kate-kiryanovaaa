function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
  
    //gender
    const genderCell = row.cells[2];
    if (genderCell.innerHTML === 'm') {
      row.classList.add('male');
    } else if (genderCell.innerHTML === 'f') {
      row.classList.add('female');
    }

    //age
    const ageCell = row.cells[1];
    if (ageCell.innerHTML < 18) {
      row.style.textDecoration = 'line-through';
    }

    //available
    const availableCell = row.cells[3];
    if (availableCell.hasAttribute('data-available')) {
      if (availableCell.getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }

  }
}
