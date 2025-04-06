export const fetchData = async () => {
    try {
        const response = await fetch(`https://police-backend-prototype.onrender.com/api/v1/criminals/`);
        console.log(`https://police-backend-prototype.onrender.com/api/v1/criminals/`);
        const data = await response.json();
        console.log(data);
        alert(`Fetched total records : ${data.noOfRecords}`);

        return data;
    } catch (error) {
        console.error(error);
        alert("error while getting the data");
        
        return error;
    }
}

export const deleteRecord = async (id:any) => {
    try {
        const response = await fetch(`https://police-backend-prototype.onrender.com/api/v1/criminals/${id}/`, {
            method: "DELETE"
        });
        console.log(`https://police-backend-prototype.onrender.com/api/v1/criminals/${id}/`);
        
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
