import api from "./api";

type AuthenticationResponse = {
    user: UserActivation,
    token: {
        value: string,
        expires: string
    }
}

export async function authenticateUser(): Promise<AuthenticationResponse> {
    const response = await api.post("auth", {
        email: "felipe@gmail.com",
        password: "12345678",
    });
    return response.data;
}