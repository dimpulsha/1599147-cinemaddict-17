// @ts-nocheck
import Model from './model';
import rawFilmList from '../mock/films.json';

export default class FilmModel extends Model {

  #rawFilmList;

  constructor() {

    super();
    this.#rawFilmList = rawFilmList;
  }

  /**
   * @param {RawFilmItem} item
   * @return {FilmItem}
   */
  static transformFilmToInternal(item) {
    return {
      id: item.id,
      title: item.film_info.title,
      alternativeTitle: item.film_info.alternative_title,
      totalRating: item.film_info.total_rating,
      poster: item.film_info.poster,
      ageRating: item.film_info.age_rating,
      director: item.film_info.director,
      writers: item.film_info.writers,
      actors: item.film_info.actors,
      releaseDate: item.film_info.release.date,
      releaseCountry: item.film_info.release.release_country,
      runtime: item.film_info.runtime,
      genre: item.film_info.genre,
      description: item.film_info.description,
      isWatchlist: item.user_details.watchlist,
      isAlreadyWatched: item.user_details.already_watched,
      watchingDate: item.user_details.watching_date,
      isFavorite: item.user_details.favorite,
      commentsIds: item.comments
    };
  }

  /**
   * @return {FilmList}
   */
  getFilmList() {
    //todo клонирование убрать можно?
    const rawFilmData = structuredClone(this.#rawFilmList);
    const transformedFilmData = rawFilmData.map((item) => FilmModel.transformFilmToInternal(item));
    return transformedFilmData;
  }

}
