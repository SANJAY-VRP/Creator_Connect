import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayingUser.css';
import UserDetails from './UsersDetails'; // Import UserDetails component


function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users/all');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-container">
      {selectedUser && (
        <UserDetails 
          user={selectedUser}
          username={selectedUser.name}  // Pass username
          userImage={selectedUser.image}  // Pass userImage
          onClose={handleCloseDetails} 
        />
      )}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
      </div>
      <div className="users-grid">
        {filteredUsers.map(user => (
          <div key={user._id} className="user-card">
            <div className='pimagebg'>
              <img src={user.image} alt="User" />
            </div>
            <div className="user-info">
              <center><h1 className='namee'>{user.name}</h1></center> 
              <center><p  className='nameee'>{user.message}</p> </center> 
              <center><h2  className='nameeee'>{user.skill}</h2> </center> 
              <center>  <button className='buttonblue' onClick={() => handleViewDetails(user)}>View More</button></center> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
