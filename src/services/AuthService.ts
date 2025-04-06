
export const login = async (email: string|undefined, password: string|undefined) => {
    if (email === "admin@gmail.com" && password === "admin") {
        return {
            message: "user logged in successfully",
            user: {
                name: "Admin",
                role: "ADMIN",
                ps: "1 Town PS",
                email,
                password
            }
        }
    }
    if (email === "r1@gmail.com" && password === "r1") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                ps: "1 Town PS",
                email,
                password
            }
        }
    }
    if (email === "r2@gmail.com" && password === "r2") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                ps: "2 Town PS",
                email,
                password
            }
        }
    }
    if (email === "r3@gmail.com" && password === "r3") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                ps: "3 Town PS",
                email,
                password
            }
        }
    }
    if (email === "r4@gmail.com" && password === "r4") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                ps: "4 Town PS",
                email,
                password
            }
        }
    }
    if (email === "r5@gmail.com" && password === "r5") {
        return {
            message: "user logged in successfully",
            user: {
                name: "admin",
                role: "ROLE",
                ps: "Rural PS",
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

