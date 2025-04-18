import { User } from "../types/User";

export const fetchData = async (user: User | null) => {
    let url = "";
    if (user) {
        try {
            if (user.role === "ADMIN") {
                url = `https://police-backend-prototype.onrender.com/api/v1/beats`;
            }
            else {
                const ps = encodeURIComponent(user.ps);
                url = `https://police-backend-prototype.onrender.com/api/v1/beats?currentPoliceStation=${ps}`;
            }

            const response = await fetch(url);
            console.log(url);

            const data = await response.json();
            console.log(data);
            alert(`Fetched total records : ${data.data.length}`);

            return data;
        } catch (error) {
            console.error(error);
            alert("error while fetching data");

            return error;
        }
    }
    else {
        return {
            error: "Error user"
        }
    }
}

export const fetchUpMapData = async () => {
    let url = "";
    try {
        url = `https://police-backend-prototype.onrender.com/api/v1/beats/un-mapped`;
        
        const response = await fetch(url);
        console.log(url);

        const data = await response.json();
        console.log(data);
        alert(`Fetched total records : ${data.data.length}`);

        return data;
    } catch (error) {
        console.error(error);
        alert("error while fetching data");

        return error;
    }
    
    
}

export const uploadRecords = async (file: any, setUploading: any) => {
    if (!file) {
        alert('Please select a file first');
        return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`https://police-backend-prototype.onrender.com/api/v1/beats/upload-records/`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);

        alert(`data uploaded successfully. ${data.message}`);
    } catch (error) {
        console.error(error);
        alert("data uploaded successfully");

    } finally {
        setUploading(false);
    }
};

export const updateStatus = async (id: any) => {

    try {
        
        let url = `https://police-backend-prototype.onrender.com/api/v1/beats/${id}/update-status`;

        const response = await fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type" : "application/json"
            })
        });
        console.log(url);

        const data = await response.json();
        console.log(data);
        // alert(`Fetched total records : ${data.data.length}`);

        return data;
    } catch (error) {
        console.error(error);
        // alert("error while fetching data");

        return error;
    }


}
export const updatePS = async (id: any, ps: any) => {

    try {
        ps = encodeURIComponent(ps);
        let url = `https://police-backend-prototype.onrender.com/api/v1/beats/${id}/update-station?ps=${ps}`;
        // https://police-backend-prototype.onrender.com/api/v1/beats/6800c06ad2f9f9746550ab6b/?ps

        const response = await fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type" : "application/json"
            })
        });
        console.log(url);

        const data = await response.json();
        console.log(data);
        // alert(`Fetched total records : ${data.data.length}`);

        return data;
    } catch (error) {
        console.error(error);
        // alert("error while fetching data");

        return error;
    }

}
