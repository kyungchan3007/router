import { useParams } from "react-router-dom";
import { users } from "../../db";

export default function User() {
  const params = useParams();
  return (
    <div>
      <h1>
        {params.userId} {users[Number(params.userId) - 1].name}
      </h1>
    </div>
  );
}
