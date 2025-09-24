import { Link } from "react-router-dom";

const LinkTo = (prop) => {
    const {text, to} = prop;

    return(
        <Link to={to} className="block px-4 py-2 hover:bg-gray-100">{text}</Link>
    )
}

export default LinkTo;