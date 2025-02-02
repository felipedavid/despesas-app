import api from "./api";

export async function fetchUserTransactions(): Promise<Transaction[]>  {
    return api.get("transaction").then((res: any) => res.data.transactions)
}