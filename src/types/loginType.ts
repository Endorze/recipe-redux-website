export type AccountDetails = {
    username: string,
    password: string,
}

export type LoginState = {
    loggedIn: boolean;
    setLoggedIn: (value: boolean) => void;
}