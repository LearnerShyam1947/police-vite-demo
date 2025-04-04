
export const login = async (email: string|undefined, password: string|undefined) => {
    if (email === "admin@gmail.com" && password === "admin") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                email,
                password
            }
        }
    }

    return {
        error: "Invalid user details"
    }

    // try {
    //     const response = await fetch(
    //         `${import.meta.env.VITE_API_URL}api/v1/auth/login`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         }
    //     );

    //     return await response.json();
        
    // } catch (error) {
    //     console.log(`error while make api call : ${error}`);
    //     return null;
    // }
}

export const register = async (data: any) => {
    data = {...data, username: `${data.firstName} ${data.lastName}`}
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api/v1/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        return await response.json();
        
    } catch (error) {
        console.log(`error while make api call : ${error}`);
        return null;
    }
}

