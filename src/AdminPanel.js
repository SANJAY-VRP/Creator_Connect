import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import './AdminPanel.css'; // Import the CSS file for styling if needed
import UploadsList from './AdminUploads';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrashAlt, faPalette, faVideo, faMagic, faPen, faSearch, faChartBar, faUsers, faBullhorn, faBriefcase, faGlobe, faEnvelope, faFilm, faBuilding, faChalkboardTeacher, faMailBulk, faAd, faYoutube } from '@fortawesome/free-solid-svg-icons';





const AdminPanel = () => {

 

  const [statistics, setStatistics] = useState({
    userCount: 0,
    uploadCount: 0,
    jobCount: 0,
    applicantCount: 0
  });

  const [users, setUsers] = useState([]);

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/counts');
        const data = response.data.counts;

        // Update statistics state
        const newStatistics = {
          userCount: data.find(item => item.label === 'Users').value,
          uploadCount: data.find(item => item.label === 'Uploads').value,
          jobCount: data.find(item => item.label === 'Jobs').value,
          applicantCount: data.find(item => item.label === 'Applicants').value
        };
        setStatistics(newStatistics);

        // Update chart
        if (chartRef.current) {
          const ctx = chartRef.current.getContext('2d');
          new Chart(ctx, {
            type: 'pie', // Change to pie chart
            data: {
              labels: ['Users', 'Uploads', 'Jobs', 'Applicants'],
              datasets: [{
                label: 'Count',
                data: [newStatistics.userCount, newStatistics.uploadCount, newStatistics.jobCount, newStatistics.applicantCount],
                backgroundColor: [
                  'rgba(255, 0, 0, 0.8)',
                  'rgba(255, 255, 0, 1)',
                  'rgba(39, 255, 0, 1)',
                  'rgba(0, 174, 255, 0.8)'
                ],
                borderColor: [
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(0, 0, 0, 1)'
                
                ],
                borderWidth: 1
               
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get('/api/users/all');
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
    fetchUsers();
  }, []);

  const handleRemoveUser = async (email) => {
    try {
      await axios.delete(`/api/users/delete/${email}`);
      const updatedUsers = users.filter(user => user.email !== email);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='border'>
       <center className='adminpanel'>Admin Panel</center>
    <div className="containerad flex">
      
      
      <div className="left-panel">
      <center className='satistics'>Statistics</center>
        
      <div className="chart-container">
        
         <div>
     
         <canvas id='chart' ref={chartRef}></canvas>
         </div>
          <div className="statistics-container">
         
          <div className='parentcountbox'>
            <div className='countbox'>
<center>            <FontAwesomeIcon icon={faUsers}className="icon1234"  /></center>
               <p>Users</p>
               <p>{statistics.userCount}</p></div>
            <div className='countbox'>  
            <FontAwesomeIcon icon={faFilm} className="icon1234" />
            <p>Uploads</p>
    <center>        <p>{statistics.uploadCount}</p></center></div>
          </div>
          <div className='parentcountbox'>
            <div className='countbox'>
            <FontAwesomeIcon icon={faBriefcase} className="icon1234" />
              <center>  <p>Jobs</p> <p> {statistics.jobCount}</p></center></div>
            <div className='countbox'> 
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon1234"  />
         <center>   <p>Applicants</p>   <p>{statistics.applicantCount}</p></center></div>
          </div>
         
      
       
        </div>
        </div>

       
        <h2>Admin Panel</h2>
        <div className='t-container' >
          <h3 >Users</h3>
          <table>
            <thead className='lightblue'>
              <tr>
                <th>Profile_Picture</th>
                <th>Email</th>
                <th>Name</th>
                <th>PhoneNumber</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr  key={user.email}>
                
                  <td className='pimg'>
                    <center><img  src={user.image} alt="Profile" /></center></td> {/* Display the profile picture */}
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNumber}</td>
                 
                  <td  className='remove'>
                   <button onClick={() => handleRemoveUser(user.email)}>
                    <center> <FontAwesomeIcon className='red' icon={faTrashAlt} /></center>  
</button>
                   </td>
            
                </tr>
              ))}
            </tbody>
        
          </table>
        </div>
      
      </div>

      <div className="right-panel">
        <UploadsList />
      </div>
   
    </div>

 

    </div>
  );
};

export default AdminPanel;
