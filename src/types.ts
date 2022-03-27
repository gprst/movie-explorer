type NumberString = `${number}`;

type BooleanString = 'True' | 'False';

export type OmdbSearchResult = {
  Title: string;
  Year: NumberString;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;
};

export type OmdbSearchResponse = {
  Search: OmdbSearchResult[];
  totalResults: NumberString;
  Response: BooleanString;
};

export type OmdbIdSearchResponse = {
  Title: string;
  Year: NumberString;
  Rated: string;
  Released: string;
  Runtime: `${number} min`;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: 'Internet Movie Database';
      Value: string;
    },
    {
      Source: 'Rotten Tomatoes';
      Value: string;
    },
    {
      Source: 'Metacritic';
      Value: string;
    },
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: BooleanString;
};
