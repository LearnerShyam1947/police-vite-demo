export const uploadFile = async (file: any, setUploading: any) => {
    if (!file) {
        alert('Please select a file first');
        return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`https://police-backend-prototype.onrender.com/api/v1/criminals/upload-records/`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        
        alert(`data uploaded successfully. ${data.message}`);
    } catch (error) {
        console.error(error);
        alert("Error while uploading");
        
    } finally {
        setUploading(false);
    }
};