interface Category {
    id: number
    name: string
    default_category: boolean
    user_id: number | null
    created_at: string
    updated_at: string
    deleted_at: string | null
}

interface Account {
    id: number
    type: string
    name: string
    balance: number
    currency_code: string
    user_id: number
    external_id: number | null
    subtype: string | null
    number: string | null
    owner: string | null
    tax_number: string | null
    bank_account_data_id: number | null
    credit_account_data_id: number | null
    fi_connection_id: number | null
    created_at: string
    updated_at: string
    deleted_at: string | null
}

interface Transaction {
    id: number
    external_id: number | null
    user_id: number
    account_id: number | null
    description: string | null
    amount: number
    currency_code: string
    transaction_date: string
    category_id: number | null
    status: string | null
    type: string | null
    operation_type: string | null
    account?: Account
    category?: Category
    created_at: string
    updated_at: string
    deleted_at: string | null
}

interface User {
    id: number
    name: string
    email: string
    phone_number: string | null
    created_at: string
    updated_at: string
}