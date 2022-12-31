import { useOutletContext } from "react-router-dom";

interface IMyname {
  Myname: string;
}

export default function Followers() {
  const { Myname } = useOutletContext<IMyname>();

  return (
    <div>
      <h1>myName{Myname}</h1>
    </div>
  );
}
