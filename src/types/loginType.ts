export type AccountDetails = {
    username: string,
    password: string,
    favoriteProtein?: string;
    favoriteMealIds?: string[];
}

export type LoginState = {
    user: AccountDetails | null;
    setUser: (user: AccountDetails | null) => void;
}