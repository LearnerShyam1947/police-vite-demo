
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
    if (email === "onetownps@gmail.com" && password === "onetownps") {
        return {
            message: "user logged in successfully",
            user: {
                name: "1 Town PS",
                role: "ROLE",
                ps: "1 Town PS",
                email,
                password
            }
        }
    }
    if (email === "twotowmps@gmail.com" && password === "twotowmps") {
        return {
            message: "user logged in successfully",
            user: {
                name: "2 Town PS",
                role: "ROLE",
                ps: "2 Town PS",
                email,
                password
            }
        }
    }
    if (email === "threetownps@gmail.com" && password === "threetownps") {
        return {
            message: "user logged in successfully",
            user: {
                name: "3 Town PS",
                role: "ROLE",
                ps: "3 Town PS",
                email,
                password
            }
        }
    }
    if (email === "fourtownps@gmail.com" && password === "fourtownps") {
        return {
            message: "user logged in successfully",
            user: {
                name: "4 Town PS",
                role: "ROLE",
                ps: "4 Town PS",
                email,
                password
            }
        }
    }
    if (email === "ruralps@gmail.com" && password === "ruralps") {
        return {
            message: "user logged in successfully",
            user: {
                name: "Rural PS",
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
    //         ``https://police-backend-prototype.onrender.comapi/v1/auth/login`,
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


