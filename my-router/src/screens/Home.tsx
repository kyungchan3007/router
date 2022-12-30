import { Link } from "react-router-dom";
import { users } from "../db";

export default function Home() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <Link to={`/users/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
