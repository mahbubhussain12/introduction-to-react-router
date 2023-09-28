import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumend
        <div className="users">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
           
          ))}
        </div>
      </p>
    </div>
  );
};

export default Users;
