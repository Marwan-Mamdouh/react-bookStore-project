export default interface ourState {
  firstName: string,
  lastName: string,
  age: number,
  address: string
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovies {
  movies: IMovie[]
}

export interface IUserData {
  email: string,
  username: string,
  password: string
}

export interface IUsers {
  users: IUserData[]
}
