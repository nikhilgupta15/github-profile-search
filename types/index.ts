export type User =
  | {
      name: string;
      bio: string;
      avatar_url: string;
      followers: number;
      following: number;
      location: string;
      login: string;
      html_url: string;
    }
  | null
  | undefined;

export type Repos = {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  description: string;
  html_url: string;
};

export interface RepoCardProps {
  name: string;
  forks: number;
  stars: number;
  updated_at: string;
  description: string;
  url: string;
}

export interface SearchCardProps {
  imgUrl: string;
  name: string;
  bio: string;
}

export interface StatCardProps {
  type: string;
  value: number | undefined | string;
}

export interface UserDetailsProps {
  searchedUser: User;
  initialReposToShow: Repos[];
  repos: Repos[];
  viewAllRepositories: () => void;
}
