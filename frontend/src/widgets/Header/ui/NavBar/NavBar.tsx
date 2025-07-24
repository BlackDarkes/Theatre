import { Link } from "react-router";

export const NavBar = () => {
  return (
    <ul>
      <li><Link to={"./"}></Link></li>
      <li><Link to={"./"}></Link></li>
      <li><Link to={"/news"}></Link></li>
      <li><Link to={"/about"}></Link></li>
    </ul>
  );
}