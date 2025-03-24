import { Link } from "react-router-dom";

export default function MenuBtn({ icons, text, onPress, goTo, toolTip }) {
    return (
        <div className='btn-container' >
            <a className="tooltip tooltip-right" data-tip={toolTip}>
                <Link to={goTo} className='btn-container'>
                    <button onClick={onPress}>
                        <img src={icons} alt="menu icon" className='menu-icon' />
                    </button>
                    <h1 className='menu-text'>{text}</h1>
                </Link>
            </a>          
        </div>
    );
}
