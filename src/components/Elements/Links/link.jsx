import { Link } from "react-router-dom";

const LinkTo = (prop) => {
    const {text} = prop;

    return(
        <Link to="" className="block px-4 py-2 hover:bg-gray-100">{text}</Link>
    )
}

export default LinkTo;