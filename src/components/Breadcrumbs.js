import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ paths }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light p-3 rounded">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        {/* Home */}
                    </Link>
                </li>

            </ol>
        </nav>
    );
};

export default Breadcrumbs;