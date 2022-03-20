import { createContext, Dispatch, SetStateAction } from 'react';
import { OmdbSearchResult } from '~/types';

type SearchContext = {
  searchResult: OmdbSearchResult[];
  setSearchResult: Dispatch<SetStateAction<OmdbSearchResult[]>>;
};

export default createContext<SearchContext>({
  searchResult: [],
  setSearchResult: () => null,
});
