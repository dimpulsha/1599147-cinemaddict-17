/**
 * @typedef {import('../views/view.js').default} View
 */

/**
 * @typedef {import('../tools/utils.js').SafeHtml} SafeHtml
 * @typedef {import('../views/user-view.js').default} UserView
 * @typedef {import('../views/main-navigation-view.js').default} MainNavigationView
 * @typedef {import('../views/sort-view.js').default} SortView
 * @typedef {import('../views/film-card-view.js').default} FilmCardView
 * @typedef {import('../views/film-container-view.js').default} FilmContainerView
 * @typedef {import('../views/top-rated-view.js').default} TopRatedView
 * @typedef {import('../views/top-comment-view.js').default} TopCommentView
 * @typedef {import('../views/film-details-view.js').default} FilmDetailsView
 * @typedef {import('../views/footer-statistic-view.js').default} FooterStatisticView
 * @typedef {import('../views/film-list-tittle-view.js').default} FilmListTitleView
 * @typedef {import('../views/show-more-view.js').default} ShowMoreView
 * @typedef {import('../views/rate-container-view.js').default} RateContainerView
 * @typedef {import('../views/comment-container-view.js').default} CommentContainerView
 */

/**
 * @typedef {import('../model/model.js').default} Model
 * @typedef {import('../model/film-model.js').default} FilmModel
 */

/**
 * @typedef RAWReleaseInfo
 * @prop {string} date
 * @prop {string} release_country
 */

/**
 * @typedef RawFilmInfo
 * @prop {string} title
 * @prop {string} alternative_title
 * @prop {number} total_rating
 * @prop {string} poster
 * @prop {number} age_rating
 * @prop {string} director
 * @prop {Array<string>} writers
 * @prop {Array<string>} actors
 * @prop {RAWReleaseInfo} release
 * @prop {number} runtime
 * @prop {Array<string>} genre
 * @prop {string} description
 */

/**
 * @typedef RawUserDetails
 * @prop {boolean} watchlist
 * @prop {boolean} already_watched
 * @prop {string} watching_date
 * @prop {boolean} favorite
 */

/**
 * @typedef RawFilmItem
 * @prop {number} id
 * @prop {RawFilmInfo} film_info
 * @prop {RawUserDetails} user_details
 * @prop {Array<string>} comments
 */

/**
 * @typedef {Array<RawFilmItem>} RawFilmList
 */

/**
 * @typedef FilmItem
 * @prop {number} id
 * @prop {string} title
 * @prop {string} alternativeTitle
 * @prop {number} totalRating
 * @prop {string} poster
 * @prop {number} ageRating
 * @prop {string} director
 * @prop {Array<string>} writers
 * @prop {Array<string>} actors
 * @prop {string} releaseDate
 * @prop {string} releaseCountry
 * @prop {number} runtime
 * @prop {Array<string>} genre
 * @prop {string} description
 * @prop {boolean} isWatchlist
 * @prop {boolean} isAlreadyWatched
 * @prop {string} watchingDate
 * @prop {boolean} isFavorite
 * @prop {Array<string>} commentsIds
 */

/**
 * @typedef {Array<FilmItem>} FilmList
 */

/**
 * @typedef FilmState
 * @prop {number} id
 * @prop {string} title
 * @prop {string} alternativeTitle
 * @prop {number} totalRating
 * @prop {string} poster
 * @prop {number} ageRating
 * @prop {string} director
 * @prop {Array<string>} writers
 * @prop {Array<string>} actors
 * @prop {string} releaseDate
 * @prop {string} releaseCountry
 * @prop {number} runtime
 * @prop {Array<string>} genre
 * @prop {string} description
 * @prop {boolean} isWatchlist
 * @prop {boolean} isAlreadyWatched
 * @prop {string} watchingDate
 * @prop {boolean} isFavorite
 * @prop {Array<string>} commentsIds
 * @prop {number} commentsCount
 */

/**
 * @typedef FilmListState
 * @prop {Array<FilmState>} items
 */

/**
 * @typedef CommentsItem
 * @prop {number} id
 * @prop {string} author
 * @prop {EmotionType} emotion
 * @prop {string} comment
 * @prop {string} date
 */

/**
 * @typedef LocalCommentItem
 * @prop {EmotionType} emotion
 * @prop {string} comment
 */

/**
 * @typedef {'smile' | 'sleeping' | 'puke' | 'angry' } EmotionType
 */
