import { useQuery } from "react-query";
import { fetchUserTransactions } from "@/api/transactionsApi";
import CreateTransactionForm from "@/components/create-transaction";
import { Text, View, FlatList,SafeAreaView } from "react-native";

interface TransactionCardProps {
    transaction: Transaction;
}

function TransactionCard(props: TransactionCardProps) {
    const { transaction } = props;

    return (
        <View className="flex-row items-center p-8 border rounded-lg">
            <View className="w-1/6 items-center background-color-gray">
            </View>

            <View className="flex-1">
                <Text className="text-lg font-bold">{transaction.description}</Text>
            </View>

            <View className="w-1/6 items-end">
                <Text className="text-gray-600">${transaction.amount}</Text>
            </View>
        </View>
    );
}

interface TransactionListProps {
    transactions: Transaction[];
}

function TransactionList(props: TransactionListProps) {
    const { transactions } = props;

    return (
        <View>
            <FlatList
                data={transactions}
                renderItem={({ item }) => <TransactionCard key={item.id} transaction={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default function FetchTransactions() {
    const { data: transactions, isLoading, isSuccess, isError } = useQuery("transaction", fetchUserTransactions);

    return <>
        <SafeAreaView className="bg-white h-full">
            {isLoading && <Text>Loading...</Text>}
            {isError && <Text>Error</Text>}
            {isSuccess && <TransactionList transactions={transactions} />}
            <CreateTransactionForm />
        </SafeAreaView>
    </>
}
