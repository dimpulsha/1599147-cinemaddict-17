/**
 * @abstract
 * @template S
 */
class View extends HTMLElement {

  constructor() {
    super();

    /**
     * @type {S}
     */
    this.state = null;
  }

  render() {
    this.innerHTML = String(this.createHtml());
  }

  /**
   * @return {SafeHtml}
   */
  createHtml() {
    return null;
  }

  // /**
  //  * Функция для создания элемента на основе разметки
  //  * @param {SafeHtml} template Разметка в виде строки
  //  * @returns {HTMLElement} Созданный элемент
  //  */
  // createElement = (template) => {
  //   const newElement = document.createElement('div');
  //   newElement.innerHTML = String(template);

  //   return newElement.firstElementChild;
  // };
}

export default View;
