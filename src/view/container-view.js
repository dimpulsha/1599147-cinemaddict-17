import AbstractView from '../framework/view/abstract-view.js';

export default class ContainerView extends AbstractView {

  #templatesList = {
    filmsSection: '<section class="films"></section>',
    filmListSection: '<section class="films-list"> </section>',
    filmListSectionExtra:' <section class="films-list films-list--extra"></section>',
    filmListContainer: '<div class="films-list__container"></div>',
    popupContainer: '<section class="film-details"> </section>',
    filmDetailsControls: '<section class="film-details__controls"></section>',
  };

  constructor(templateName) {
    super();
    this.templateName = templateName;
  }

  get template() {
    return this.#templatesList[this.templateName];
  }
}

