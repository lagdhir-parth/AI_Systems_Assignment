import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptionsClasses = "font-bold hover:text-gray-300 transition";

  return (
    <div className="bg-(--navbar-color) text-(--navbar-text) p-4 flex justify-center items-center gap-10">
      <Link to="/" className={navOptionsClasses}>
        Home
      </Link>
      <Link to="/category" className={navOptionsClasses}>
        Category Generator
      </Link>
      <Link to="/proposal" className={navOptionsClasses}>
        Proposal Generator
      </Link>
    </div>
  );
};

export default Navbar;
