import { createElement } from '../../render';

const getGenreText = (genreList) => genreList.length > 1 ? 'Genres' : 'Genre';

const genreTemplate = '<span class="film-details__genre"></span>';

const getGenreElement = (genreList, template) => {
  if (genreList.length > 0) {
    template = '';
    genreList.forEach((value) => { template += `<span class="film-details__genre">${value}</span>`; });
    return template;
  }
};

const getGenreInfo = (genreList) => (
  `<tr class="film-details__row">
        <td class="film-details__term">${getGenreText(genreList)}</td>
          <td class="film-details__cell">
          ${getGenreElement(genreList, genreTemplate)}
           <!-- <span class="film-details__genre">Drama</span>
            <span class="film-details__genre">Film-Noir</span>
            <span class="film-details__genre">Mystery</span></td> -->
          </tr>`);

const createFilmDetailsTemplate = (filmItem) => (`
    <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${filmItem.filmInfo.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${filmItem.filmInfo.writers.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${filmItem.filmInfo.actors.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${filmItem.filmInfo.release.releaseDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${filmItem.filmInfo.runtime}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${filmItem.filmInfo.release.releaseCountry}</td>
            </tr>
            <!--
            <tr class="film-details__row">
              <td class="film-details__term">${getGenreText(filmItem.filmInfo.genre)}</td>
              <td class="film-details__cell">
                <span class="film-details__genre">Drama</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span></td>
            </tr>
            -->
            ${getGenreInfo(filmItem.filmInfo.genre)}
            </table>
`);

const createFilmInfoTemplate = (filmItem) => (
  `<div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${filmItem.filmInfo.poster}" alt="">

          <p class="film-details__age">${filmItem.filmInfo.ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${filmItem.filmInfo.title}</h3>
              <p class="film-details__title-original">Original: ${filmItem.filmInfo.alternativeTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${filmItem.filmInfo.totalRating}</p>
            </div>
          </div>

          ${createFilmDetailsTemplate(filmItem)}
          <p class="film-details__film-description">
            ${filmItem.filmInfo.description}
          </p>
        </div>
      </div>`
);

export default class FilmDetailsInfoView {

  constructor(filmItem) {
    this.filmItem = filmItem;
  }

  getTemplate() {
    return createFilmInfoTemplate(this.filmItem);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate(this.filmItem ));
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
