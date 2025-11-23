import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      Error. The page you're looking for does not exist. Please navigate back to
      the Almighty's HomePage{" "}
      <Link to={"/"} end>
        here
      </Link>
    </div>
  );
}
