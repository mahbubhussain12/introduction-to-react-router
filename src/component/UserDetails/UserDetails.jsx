import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name, website, email, phone, username} = user;
    const handleGoBack = ()=>{
      navigate(-1)
    }
    const usersStyle = {
      border: "2px solid yellow",
      padding: "5px",
      borderRadius: "20px",
      marginTop: "30px",
      backgroundColor: "yellow",
     
    };
  
    return (
    <div style={usersStyle}>
      <h2>Details about user: {name}</h2>
      <p>Website:{website}</p>
      <p>Email:{email}</p>
      <p>phone:{phone}</p>
      <p>User Name:{username}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
