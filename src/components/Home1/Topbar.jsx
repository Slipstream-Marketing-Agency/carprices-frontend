import React from "react";
import Link from "next/link";

function Topbar() {
  return (
    <div className="top-bar">
      <div className="company-logo">
        <Link legacyBehavior href="/">
          <a>
            <img
              src="/assets/img/car-prices-logo.png"
              alt="logo"
              width={200}
              height={120}
            />
          </a>
        </Link>
      </div>
      <div className="search-area">
        <form>
          <div className="form-inner">
            <input type="text" placeholder="Search car names or brands" />
            <button type="submit">
              <i className="bi bi-search" />
            </button>
          </div>
        </form>
      </div>
      <div className="topbar-right">
        <ul>
          <li>
            <button
              type="button"
              className="primary-btn1"
              data-bs-toggle="modal"
              data-bs-target="#signUpModal01"
            >
              English
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
