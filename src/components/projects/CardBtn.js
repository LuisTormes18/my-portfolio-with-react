
const CardBtn = ({ text, url }) => {
    return (
        <div class="card-btn">
            <a href={url} target="_blank" rel="noreferrer">
                {text}
            </a>
        </div>
    );
};
export default CardBtn;
