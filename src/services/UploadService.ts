export const uploadFile = async (file: any, setUploading: any) => {
    if (!file) {
        alert('Please select a file first');
        return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        
        alert("data uploaded successfully");
    } catch (error) {
        console.error(error);
        alert('Error uploading file');
    } finally {
        setUploading(false);
    }
};