type NumberString = `${number}`;

type BooleanString = 'True' | 'False'

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

