/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");
    this.data = rows;
    this.render();
    //this.onClick();
  }

  render() {
    this.elem.innerHTML = this.data.map(({name, age, salary, city}) => `<tr data-id="${age}${salary}"><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`).join('');
    //this.onClick();
    this.elem.addEventListener('click', event => this.onClick(event));
    return this.elem;
  }

  onClick(event) {
    
    if (!(event.target.matches('button'))) {
      return;
    }

    const tr = event.target.closest('tr');
    const id = tr.getAttribute('data-id');

    tr.remove();

    this.onRemoved(parseInt(id, 10));
  }

  onRemoved(id) {}

}
