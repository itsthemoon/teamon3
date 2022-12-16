import HeaderBoxesCSS from "./HeaderBoxes.module.css";
import rightArrow from "../../images/right-arrow.png";

function HeaderBoxes(props) {
    const header = props.header;
    const text = props.text;

    return (
        <div className={HeaderBoxesCSS.headerBox}>
            <h1 className={HeaderBoxesCSS.header}>{header}</h1>
            <p className={HeaderBoxesCSS.text}>{text}</p>
            <img
                src={rightArrow}
                className={HeaderBoxesCSS.rightArrow}
                alt="right arrow"
                />
        </div>
    )
}

export default HeaderBoxes