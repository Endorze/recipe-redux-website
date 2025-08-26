import { currentAccounts } from "@/data/accountDetails";
import { AccountDetails } from "@/types/loginType";

export function loginUser(input: AccountDetails): boolean {

  return currentAccounts.some(
    (account) =>
      account.username === input.username && account.password === input.password
  );
}
