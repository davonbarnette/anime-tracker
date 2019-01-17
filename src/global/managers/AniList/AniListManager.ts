import GraphQLManager from "../GraphQLManager";
import {ANILIST_QUERY_TYPES, MediaSeason} from "./AniListTypes";

export default class AniListManager {

    gql:GraphQLManager = new GraphQLManager(animeGQLQuery, ANILIST_QUERY_TYPES);

    getCurrentMediaSeason() {
        let month = new Date().getMonth();
        if (month >= 3 && month < 6) return MediaSeason.SPRING;
        if (month >= 6 && month < 9) return MediaSeason.SUMMER;
        if (month >= 9 && month < 12) return MediaSeason.FALL;
        return MediaSeason.WINTER;
    }

}

export const animeGQLQuery = (variables:any, args:any) => {
  return (
      `query($page:Int ${variables})  {
              Page (page:$page) {
                pageInfo{
                  total
                  currentPage
                  perPage
                  lastPage
                  hasNextPage
                  
                }
                media(${args}) {
                  title{
                    romaji
                    english
                  }
                  id
                  idMal
                  type
                  format
                  status
                  description
                  endDate{
                    year
                    month
                    day
                  }
                  startDate {
                    year
                    month
                    day
                  }
                  season
                  episodes
                  duration
                  source
                  trailer{
                    id
                    site
                  }
                  updatedAt
                  coverImage{
                    large
                  }
                  bannerImage
                  genres
                  synonyms
                  averageScore
                  meanScore
                  popularity
                  tags{
                    name
                  }
                  
                  studios{
                    nodes{
                      name
                    }
                  }
                  isAdult
                  nextAiringEpisode{
                    airingAt
                    timeUntilAiring
                    episode
                  }
                  externalLinks{
                    site
                    url
                    id
                  }
                  streamingEpisodes{
                    title
                    thumbnail
                    url
                    site
                  }
                  rankings{
                    rank
                    type
                  }
                  siteUrl
                }
            }
        }`
  )
};