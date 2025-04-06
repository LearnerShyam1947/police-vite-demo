export const fetchData = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/criminals`);
        const data = await response.json();
        console.log(data);
        alert(`Fetched total records : ${data.noOfRecords}`);

        return data;
    } catch (error) {
        console.error(error);
        alert("data uploaded successfully");
        
        return error;
    }
}

export const deleteRecord = async (id:any) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/criminals/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
        
        if(data.message) {
            return data;
        }
        else {
            throw new Error(data.error)
        }

    } catch (error) {
        return error;
    }
}
