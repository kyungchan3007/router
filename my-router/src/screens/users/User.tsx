import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export default function User() {
  const params = useParams();
  return (
    <div>
      <h1>
        {params.userId} {users[Number(params.userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet
        context={{
          Myname: users[Number(params.userId) - 1].name,
        }}
      />
    </div>
  );
}
