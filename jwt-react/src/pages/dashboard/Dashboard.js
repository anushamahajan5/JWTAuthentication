import React, { useEffect, useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//replace the fetch url with http://localhost:5000/api/users if u are running on localhost
const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // Redirect to login if token is not present
      navigate("/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jwtauthentication-6.onrender.com/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUsers(result);
        } else {
          console.error("Error fetching users:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token, navigate]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Dashboard</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

