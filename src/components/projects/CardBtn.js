import { Link } from "react-router-dom";

const CardBtn = ({ text, url }) => {
    return (
        <div class="card-btn">
            <Link to={url} target="_blank" rel="noreferrer">
                {text}
            </Link>
        </div>
    );
};
export default CardBtn;
