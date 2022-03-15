export class DropdownComponent {
  /**
   * @param e {HTMLElement}
   * @param eventDispatcher {EventDispatcher}
   */
  constructor(e, eventDispatcher) {
    this.e = e;
    this.eventDispatcher = eventDispatcher;
    this.activeItem = this.e.querySelector('.dropdown-menu > .dropdown-item.active');
    this.eventDispatcher.dispatch('sort', this.activeItem.textContent);
    this.e.querySelectorAll('.dropdown-menu > .dropdown-item').forEach((item) => {
      item.addEventListener('click', this.onClick.bind(this));
    });
  }

  /**
   * @param e {Event}
   */
  onClick(e) {
    this.activeItem.classList.remove('active');
    this.activeItem = e.currentTarget;
    this.activeItem.classList.add('active');
    this.e.querySelector('span').textContent = this.activeItem.textContent;
    this.eventDispatcher.dispatch('sort', this.activeItem.textContent);
  }
}
