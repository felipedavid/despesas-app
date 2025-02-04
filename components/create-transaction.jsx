import React, {useState} from "react";
import {Button, TextInput, ToastAndroid} from "react-native";
import {useMutation, useQueryClient} from "react-query";
import {CreateTransaction} from "@/api/transactionsApi";

export default function CreateTransactionForm() {
    const queryClient = useQueryClient();
    const createTransactionMutation = useMutation(CreateTransaction)

    const [form, setForm] = useState({
        description: "",
        amount: 0,
        category_id: 0
    })

    function onChange(e) {
        setForm((_form) => ({
            ..._form,
            [e.target.name]: e.target.value,
        }))
    }

    function onSubmit(e) {
        const {description, amount, category_id} = form;
        if (description === "" || amount === 0 || category_id === 0) {
            alert("Please fill all fields")
            return;
        }

        createTransactionMutation.mutate(form, {
            onSuccess: () => {
                setForm({
                    description: "",
                    amount: 0,
                    category_id: 0
                })
                queryClient.invalidateQueries("transaction")
                ToastAndroid.alert("Transaction created successfully")
            }
        })
    }

    return <>
        <TextInput
            name="description"
            value={form.description}
            onChangeText={onChange}
            placeholder="Description"
        />
        <TextInput
            name="amount"
            value={form.amount}
            onChangeText={onChange}
            placeholder="Amount"
        />
        <TextInput
            name="category_id"
            value={form.category_id}
            onChangeText={onChange}
            placeholder="Category ID"
        />
        <Button title="Create Transaction" onPress={onSubmit}/>
    </>
}