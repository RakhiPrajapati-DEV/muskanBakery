import React, { useState } from 'react';
import axios from 'axios';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/Contact/Messages');
      setMessages(res.data);
      setVisible(true);
    } catch (err) {
      console.error('Error fetching messages:', err);
      alert('Failed to load messages');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/Contact/${id}`);
      const updatedMessages = messages.filter(message => message._id !== id);
      setMessages(updatedMessages);

      alert('Messages deleted successfully');
    }
    catch (err) {
      alert('failed to delete the message');
    }
  };

  return (
    <div style={{ padding: '6px' }}>
      <button onClick={fetchMessages} className="btn btn1">Show Messages</button>

      {visible && (
        <div style={{ marginTop: '20px', overflowX: 'auto',margin:'1rem'}}>
          <table border="2" cellPadding="10" cellSpacing="0" style={{ width: '80%', borderCollapse: 'collapse',marginLeft:'8rem'}}>
            <thead style={{ background: '#f2f2f2',fontSize:'1.3rem',fontWeight:'400' }}>
              <tr>
                <th style={{width:'10rem',padding:'1rem 2rem'}}>Username</th>
                <th style={{width:'10rem',padding:'1rem 2rem'}}>Email</th>
                <th style={{width:'10rem',padding:'1rem 2rem'}}>Phone</th>
                <th style={{width:'10rem',padding:'1rem 2rem'}}>Message</th>
                <th style={{width:'10rem',padding:'1rem 2rem'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, i) => (
                <tr key={i}>
                  <td style={{padding:'1rem 2rem'}}>{msg.UserName}</td>
                  <td style={{padding:'1rem 2rem'}}>{msg.email}</td>
                  <td style={{padding:'1rem 2rem'}}>{msg.Phone}</td>
                  <td style={{padding:'1rem 2rem'}}>{msg.message}</td>
                  <td>
                    <button className="btn btn1" onClick={() => handleDelete(msg._id)} style={{ background: 'red', color: 'white',padding:'1rem 2rem',fontSize:'0.8rem',marginBottom:'1rem' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Messages;
