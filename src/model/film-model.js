import { getFilmListMock } from '../mock/film';
import { getHours, getYear, humanizeDate } from '../utils/utils';

const getShortItemInfo = (item) => ({
  id: item.id,
  commentsNum: item.comments.length,
  commentsList: item.comments,
  filmInfo: {
    title: item.film_info.title,
    alternativeTitle: item.film_info.alternative_title,
    totalRating: item.film_info.total_rating,
    poster: item.film_info.poster,
    ageRating: item.film_info.age_rating,
    director: item.film_info.director,
    writers: item.film_info.writers,
    actors: item.film_info.actors,
    release: {
      releaseYear: getYear(item.film_info.release.date),
      releaseDate: humanizeDate(item.film_info.release.date),
      releaseCountry: item.film_info.release.release_country,
    },
    runtime: getHours(item.film_info.runtime),
    genre: item.film_info.genre,
    description: item.film_info.description,
  },
  userDetails: {
    isWatchlist: item.user_details.watchlist,
    isWatched: item.user_details.already_watched,
    watchingDate: item.user_details.watching_date,
    isFavorite: item.user_details.favorite,
  }
});

class FilmModel {
  films = getFilmListMock();
  getFilmsInfo = () => this.films;

  getShortFilmsInfo = () => this.films.map((value) => getShortItemInfo(value));

}

export { FilmModel };
