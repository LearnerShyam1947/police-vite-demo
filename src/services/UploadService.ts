export const uploadFile = async (file: any, setUploading: any) => {
    if (!file) {
        alert('Please select a file first');
        return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/criminals/upload-records`, {
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