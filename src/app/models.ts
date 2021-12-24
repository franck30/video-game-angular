export interface Game {
  backgound_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: string;
  genres: Array<Genre>;
  parent_platform: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  trailers: Array<Trailer>;


}


export interface APIResponse<T> {
  results: Array<T>;
}


interface Genre {
  name: string;
}

interface Publishers {
  name: string;
}


interface ParentPlatform {
  platform: {
    name: string;
  }
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}


interface Trailer {
  data: {
    max: string;
  };
}


