export const fetchData = async (ps: any) => {
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/beats?currentPoliceStation=${ps}`);
        const data = await response.json();
        console.log(data);
        alert(`Fetched total records : ${data.data.length}`);

        return data;
    } catch (error) {
        console.error(error);
        alert("data uploaded successfully");
        
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/beats/upload-records`, {
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
