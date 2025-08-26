import { currentAccounts } from "@/data/accountDetails";
import { AccountDetails } from "@/types/loginType";

export function loginUser(input: AccountDetails): AccountDetails | null {

    return (
        currentAccounts.find(
            (account) =>
                account.username === input.username && account.password === input.password
        ) ?? null
    );
}
