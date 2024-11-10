// checkConnection.js
export const checkDatabaseConnection = async () => {
    try {
      const response = await fetch('http://3.111.58.101:5000/api/checkConnection');
      const data = await response.json();
      if (response.ok) {
        console.log('Database connection successful', data.columns);  // Log the column names
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Error checking database connection:', error);
    }
  };
  