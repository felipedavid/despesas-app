import api from "./api";

export async function fetchUserTransactions(): Promise<Transaction[]>  {
    return api.get("transaction").then((res: any) => res.data.transactions)
}

interface CreateTransactionParams {
    amount: number
    description: string
    transaction_date: string
    category_id: number
    account_id: number
}

export async function createTransaction(transaction: CreateTransactionParams): Promise<Transaction> {
    return api.post("transaction", transaction).then((res: any) => res.data.transaction)
}