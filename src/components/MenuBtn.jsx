
export default function MenuBtn({ icons, text, onPress }) {
    return (
        <div className='btn-container'>
            <button onClick={onPress}>
                <img src={icons} alt="menu icon" className='menu-icon' />
            </button>
            <h1 className='menu-text'>{text}</h1>
        </div>
    );
}
