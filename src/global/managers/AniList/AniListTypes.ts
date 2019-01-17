/* tslint:disable */
//  This file was automatically generated and should not be edited.

// Media type enum, anime or manga.
import {QueryType} from "../../../data/Anime/Types";

export enum MediaType {
  ANIME = "ANIME", // Japanese Anime
  MANGA = "MANGA", // Asian comic
}


// The format the media was released in
export enum MediaFormat {
  TV = "TV", // Anime broadcast on television
  TV_SHORT = "TV_SHORT", // Anime which are under 15 minutes in length and broadcast on television
  MOVIE = "MOVIE", // Anime movies with a theatrical release
  SPECIAL = "SPECIAL", // Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc
  // (Original Video Animation) Anime that have been released directly on
  // DVD/Blu-ray without originally going through a theatrical release or
  // television broadcast
  OVA = "OVA",
  ONA = "ONA", // (Original Net Animation) Anime that have been originally released online or are only available through streaming services.
  MUSIC = "MUSIC", // Short anime released as a music video
  MANGA = "MANGA", // Professionally published manga with more than one chapter
  NOVEL = "NOVEL", // Written books released as a novel or series of light novels
  ONE_SHOT = "ONE_SHOT", // Manga with just one chapter
}


// The current releasing status of the media
export enum MediaStatus {
  FINISHED = "FINISHED", // Has completed and is no longer being released
  RELEASING = "RELEASING", // Currently releasing
  NOT_YET_RELEASED = "NOT_YET_RELEASED", // To be released at a later date
  CANCELLED = "CANCELLED", // Ended before the work could be finished
}


export enum MediaSeason {
  WINTER = "WINTER", // Months December to February
  SPRING = "SPRING", // Months March to May
  SUMMER = "SUMMER", // Months June to August
  FALL = "FALL", // Months September to November
}


// Source type the media was adapted from
export enum MediaSource {
  ORIGINAL = "ORIGINAL", // An original production not based of another work
  MANGA = "MANGA", // Asian comic book
  LIGHT_NOVEL = "LIGHT_NOVEL", // Written work published in volumes
  VISUAL_NOVEL = "VISUAL_NOVEL", // Video game driven primary by text and narrative
  VIDEO_GAME = "VIDEO_GAME", // Video game
  OTHER = "OTHER", // Other
}


// The type of ranking
export enum MediaRankType {
  RATED = "RATED", // Ranking is based on the media's ratings/score
  POPULAR = "POPULAR", // Ranking is based on the media's popularity
}


// Media list watching/reading status enum.
export enum MediaListStatus {
  CURRENT = "CURRENT", // Currently watching/reading
  PLANNING = "PLANNING", // Planning to watch/read
  COMPLETED = "COMPLETED", // Finished watching/reading
  DROPPED = "DROPPED", // Stopped watching/reading before completing
  PAUSED = "PAUSED", // Paused watching/reading
  REPEATING = "REPEATING", // Re-watching/reading
}


export interface MediaFragment  {
  // The official titles of the media in various languages
  title:  {
    // The romanization of the native language title
    romaji: string | null,
    // The official english title
    english: string | null,
  } | null,
  // The id of the media
  id: number,
  // The mal id of the media
  idMal: number | null,
  // The type of the media; anime or manga
  type: MediaType | null,
  // The format the media was released in
  format: MediaFormat | null,
  // The current releasing status of the media
  status: MediaStatus | null,
  // Short description of the media's story and characters
  description: string | null,
  // The last official release date of the media
  endDate:  {
    // Numeric Year (2017)
    year: number | null,
    // Numeric Month (3)
    month: number | null,
    // Numeric Day (24)
    day: number | null,
  } | null,
  // The first official release date of the media
  startDate:  {
    // Numeric Year (2017)
    year: number | null,
    // Numeric Month (3)
    month: number | null,
    // Numeric Day (24)
    day: number | null,
  } | null,
  // The season the media was initially released in
  season: MediaSeason | null,
  // The amount of episodes the anime has when complete
  episodes: number | null,
  // The general length of each anime episode in minutes
  duration: number | null,
  // Source type the media was adapted from.
  source: MediaSource | null,
  // Media trailer or advertisement
  trailer:  {
    // The trailer video id
    id: string | null,
    // The site the video is hosted by (Currently either youtube or dailymotion
    site: string | null,
  } | null,
  // When the media's data was last updated
  updatedAt: number | null,
  // The cover images of the media
  coverImage:  {
    // The cover image of media at its largest size
    large: string | null,
  } | null,
  // The banner image of the media
  bannerImage: string | null,
  // The genres of the media
  genres: Array< string | null > | null,
  // Alternative titles of the media
  synonyms: Array< string | null > | null,
  // A weighted average score of all the user's scores of the media
  averageScore: number | null,
  // Mean score of all the user's scores of the media
  meanScore: number | null,
  // The number of users with the media on their list
  popularity: number | null,
  // List of tags that describes elements and themes of the media
  tags:  Array< {
    // The name of the tag
    name: string,
  } | null > | null,
  // The characters in the media
  characters:  {
    nodes:  Array< {
      // The names of the character
      name:  {
        // The character's given name
        first: string | null,
        // The character's surname
        last: string | null,
        // The character's full name in their native language
        native: string | null,
      } | null,
      // Character images
      image:  {
        // The character's image of media at its largest size
        large: string | null,
      } | null,
      // A general description of the character
      description: string | null,
    } | null > | null,
  } | null,
  // The companies who produced the media
  studios:  {
    nodes:  Array< {
      // The name of the studio
      name: string,
    } | null > | null,
  } | null,
  // If the media is intended only for 18+ adult audiences
  isAdult: boolean | null,
  // The media's next episode airing schedule
  nextAiringEpisode:  {
    // The time the episode airs at
    airingAt: number,
    // Seconds until episode starts airing
    timeUntilAiring: number,
    // The airing episode number
    episode: number,
  } | null,
  // External links to another site related to the media
  externalLinks:  Array< {
    // The site location of the external link
    site: string,
    // The url of the external link
    url: string,
    // The id of the external link
    id: number,
  } | null > | null,
  // Data and links to legal streaming episodes on external sites
  streamingEpisodes:  Array< {
    // Title of the episode
    title: string | null,
    // Url of episode image thumbnail
    thumbnail: string | null,
    // The url of the episode
    url: string | null,
    // The site location of the streaming episodes
    site: string | null,
  } | null > | null,
  // The ranking of the media in a particular time span and format compared to other media
  rankings:  Array< {
    // The numerical rank of the media
    rank: number,
    // The type of ranking
    type: MediaRankType,
  } | null > | null,
  // User reviews of the media
  reviews:  {
    nodes:  Array< {
      // The main review body text
      body: string | null,
      // The total user rating of the review
      rating: number | null,
      // A short summary of the review
      summary: string | null,
      // The time of the thread creation
      createdAt: number,
      // The review score of the media
      score: number | null,
    } | null > | null,
  } | null,
  stats:  {
    scoreDistribution:  Array< {
      score: number | null,
      // The amount of list entries with this score
      amount: number | null,
    } | null > | null,
    statusDistribution:  Array< {
      // The day the activity took place (Unix timestamp)
      status: MediaListStatus | null,
      // The amount of entries with this status
      amount: number | null,
    } | null > | null,
    airingProgression:  Array< {
      // The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.
      episode: number | null,
      // The average score for the media
      score: number | null,
      // The amount of users watching the anime
      watching: number | null,
    } | null > | null,
  } | null,
  // The url for the media page on the AniList website
  siteUrl: string | null,
};

export type PageInfoFragment = {
  // The total number of items
  total: number | null,
  // The current page
  currentPage: number | null,
  // The count on a page
  perPage: number | null,
  // The last page
  lastPage: number | null,
  // If there is another page
  hasNextPage: boolean | null,
};

export interface Page{
    pageInfo:PageInfoFragment
    media:MediaFragment[]
}

export const ANILIST_QUERY_TYPES:QueryType[] = [

    {
        id:'START_DATE',
        display:'Start Date',
        gql:{
            name:'startDate_greater',
            type:'FuzzyDateInt'
        }
    },

    {
        id:'SEASON_YEAR',
        display:"Season Year",
        gql:{
            name:"seasonYear",
            type:"Int",
            visible:true,
        },
        range:[1990, (new Date().getFullYear())+1]
    },
    {
        id:'MEDIA_FORMAT',
        display:"Media Format",
        gql:{
            name:"format",
            type:"MediaFormat"
        },
        enums:MediaFormat

    },
    {
        id:'MEDIA_SEASON',
        display:"Season",
        gql:{
            name:"season",
            type:"MediaSeason",
            visible:true,
        },
        enums: MediaSeason,
    },
    {
        id:'MEDIA_TYPE',
        display:"Media Type",
        gql:{
            name:"type",
            type:"MediaType"
        },
        enums:MediaType
    },
    {
        id:'AVERAGE_SCORE',
        display:"Average Score",
        gql:{
            name:"averageScore_not",
            type:"Int"
        },
    },
];