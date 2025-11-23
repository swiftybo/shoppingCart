import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }}>Error!</h1>
      <div style={{ textAlign: "center" }}>
        The page you're looking for does not exist. Please navigate back to the
        Almighty's HomePage{" "}
        <Link to={"/"} end>
          here
        </Link>
      </div>
    </>
  );
}
