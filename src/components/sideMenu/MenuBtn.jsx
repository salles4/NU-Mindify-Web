import { Link } from "react-router-dom";

export default function MenuBtn({ icons, text, onPress, active, isSelected, goTo, toolTip }) {
    return (
       
            <div 
                className={`${active ? 'active-btn-container' : 'btn-container'} ${isSelected ? 'selected' : ''}`} 
                onClick={onPress}
            >
                 <a className="tooltip tooltip-right" data-tip={toolTip}>
                    <div className={`${active ? '' : 'center-tooltip'}`}>

                        <Link to={goTo}>
                            <button className={active ? 'active-btn-icon' : 'btn-icon'}>
                                <img src={icons} alt="menu icon" className='menu-icon' />
                                {active ? <h1 className='menu-text'>{text}</h1> : ''}
                            </button>
                        </Link>
                    </div>
                </a>
            </div>
       
    );
}
