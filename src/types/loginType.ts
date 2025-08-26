export type AccountDetails = {
    username: string,
    password: string,
}

export type LoginState = {
    user: AccountDetails | null;
    setUser: (user: AccountDetails | null) => void;
}