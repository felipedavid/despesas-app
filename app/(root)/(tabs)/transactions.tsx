import { View, Text } from "react-native";
import FetchTransactions from "@/components/transactions";

function Transactions() {
    return (
        <View>
            <Text className="mt-20">Transactions page</Text>
            <FetchTransactions/>
        </View>
    );
}

export default Transactions;
