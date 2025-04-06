export const fetchData = async (ps: any) => {
    try {
        ps = encodeURIComponent(ps);
        const response = await fetch(`https://police-backend-prototype.onrender.com/api/v1/beats?currentPoliceStation=${ps}/`);
        console.log(`https://police-backend-prototype.onrender.com/api/v1/beats?currentPoliceStation=${ps}/`);
        // console.log(await response.text());
        
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
