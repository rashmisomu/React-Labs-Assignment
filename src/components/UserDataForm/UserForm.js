import './UserForm.css'; 

import { v4 as uuidv4 } from 'uuid'; 
import { TextField, Button, Grid } from '@mui/material'; 
import { useState, useEffect } from 'react';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  
  const [unsavedChanges, setUnsavedChanges] = useState(false); // State to track unsaved changes
  const [savedData, setSavedData] = useState(null); // State to store the saved data
  const [savedUserId, setSavedUserId] = useState(null); // State to store the user ID of the saved data

  // Effect for handling unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // Display confirmation message
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUnsavedChanges(true); // Set unsaved changes to true
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!formData.name || !formData.address || !formData.email || !formData.phone) {
      alert('Please fill in all the required fields.');
      return;
    }
   
    const userId = uuidv4();

    // Save data to local storage
    localStorage.setItem(userId, JSON.stringify(formData));

    // Store saved data and user ID
    setSavedData(formData);
    setSavedUserId(userId);

    // Reset form data and unsaved changes
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
    });
    setUnsavedChanges(false);
    alert('Data successfully submitted!');
  
  };

  

  return (
    <div className="form">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

     
      {savedData && (
        <div className="saved-data">
          <h2>Saved Data</h2>
          <p>User ID: {savedUserId}</p>
          <pre>{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserDataForm;
