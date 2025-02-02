import {useQuery} from "react-query";
import {fetchUserTransactions} from "@/api/transactionsApi";
import {Text, View} from "react-native";

export default function FetchTransactions() {
    const {data: transactions, isLoading, isSuccess, isError} = useQuery("transaction", fetchUserTransactions);

    console.log(transactions)

    return <>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error</Text>}
        {isSuccess && <View>
            {transactions.map(transaction => <Text key={transaction.id}>{transaction.description} - Category {transaction.category?.name}</Text>)}
        </View>}
    </>
}