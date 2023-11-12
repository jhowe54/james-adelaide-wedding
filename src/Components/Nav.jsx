import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Nav() {
  const [activePage, setActivePage] = useState("home");
  const pages = [
    { name: "Home", path: "home", id: "home" },
    { name: "Schedule", path: "schedule", id: "schedule" },
    { name: "Travel", path: "travel", id: "travel" },
    { name: "Registry", path: "registry", id: "registry" },
    { name: "Wedding Party", path: "wedding-party", id: "wedding-party" },
    { name: "Gallery", path: "gallery", id: "gallery" },
    { name: "Things To Do", path: "things-to-do", id: "things-to-do" },
    { name: "FAQs", path: "faqs", id: "faqs" },
  ];

  return (
    <div>
      {pages &&
        pages.map((page) => {
          return (
            <Link style={{borderBottom: page.id === activePage ? "2px solid white" : "none"}} onClick={() => setActivePage(page.id)} key={page.id} className="m-4 p-1" to={page.path}>
              {page.name}
            </Link>
          );
        })}
    </div>
  );
}

export default Nav;
