import { Lock } from 'lucide-react';
import { CSSProperties } from 'react'; // Import the CSSProperties type for styles
import { useNavigate } from 'react-router-dom';

const NoAccess = () => { 

  // Function to go back to the previous route
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to go back to the previous route
  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        {/* Example of a lock icon using font-awesome */}
        <Lock color='blue' size={50}></Lock>
      </div>
      <h1 style={styles.message}>You don't have access to this page</h1>
      <button onClick={goBack} style={styles.button}>
        Go Back
      </button>
    </div>
  );
};

// Corrected TypeScript typing for the styles object
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Ensuring it's a valid value for flexDirection
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '20px',
    color: '#ff0000', // Red color for the icon
  },
  iconStyle: {
    fontSize: '3rem',
    color: '#ff0000',
  },
  message: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default NoAccess;
