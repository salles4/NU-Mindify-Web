import { useState } from "react";
import MenuBtn from "../../components/sideMenu/MenuBtn";
import home from '../Sample/images/home.png'
import hamburger from '../Sample/images/hamburger.png'
import halfburger from '../Sample/images/halfburger.png'
import analytic from '../Sample/images/analytic.png'
import report from '../Sample/images/report.png'
import leaderboard from '../Sample/images/leaderboard.png'
import question from '../Sample/images/question.png'
import glossary from '../Sample/images/glossary.png'
import student from '../Sample/images/student.png'
import profile from '../Sample/images/profile.png'
import account from '../Sample/images/account.png'

export default function Glossary() {

    const [isActive, setActive] = useState(false)
    const [selected, setSelected] = useState('manage glossary')

    function handleSideMenu(){
        setActive(!isActive)
        console.log(isActive);
        
    }

    function handleSelect(menu){
        setSelected(menu);
    }

    return (
        <>
            <div className="mainCont">
                <div className={isActive ? 'active-side-menu' : 'side-menu'}>
                <MenuBtn 
                    icons={isActive ? halfburger : hamburger} 
                    text='' 
                    onPress={handleSideMenu} 
                    active={isActive} 
                    className="no-hover" 
                    toolTip={'Menu'}
                />

                    {isActive ? 
                        <div className="avatar">
                            <div className="avatar-container">
                                <img 
                                    src="https://avatarfiles.alphacoders.com/375/thumb-1920-375159.jpeg" 
                                />
                            </div>
                        </div>
                        : ''
                    }

                    {isActive ? 
                        <div className="name-container">
                            <h1 className="user-name">Suosuo Frieren</h1>
                            <h5 className="user-email">virgojl@students.nu-moa.edu.ph</h5>
                        </div>
                        : ''
                    }

                    <MenuBtn 
                        icons={home} 
                        text={isActive ? 'Dashboard' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('dashboard')}
                        isSelected={selected === 'dashboard'}
                        goTo={'/'}
                        toolTip={'Dashboard'}
                    />
                    <MenuBtn 
                        icons={analytic} 
                        text={isActive ? 'Analytics' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('analytics')}
                        isSelected={selected === 'analytics'}
                        toolTip={'Analytics'}
                    />
                    <MenuBtn 
                        icons={report} 
                        text={isActive ? 'Reports' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('reports')}
                        isSelected={selected === 'reports'}
                        toolTip={'Reports'}
                    />
                    <MenuBtn 
                        icons={leaderboard} 
                        text={isActive ? 'Leaderboard' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('leaderboard')}
                        isSelected={selected === 'leaderboard'}
                        toolTip={'Leaderboard'}
                    />
                    <MenuBtn 
                        icons={question} 
                        text={isActive ? 'Manage Question' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('manage question')}
                        isSelected={selected === 'manage question'}
                        toolTip={'Manage Question'}
                    />
                    <MenuBtn 
                        icons={glossary} 
                        text={isActive ? 'Manage Glossary' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('manage glossary')}
                        isSelected={selected === 'manage glossary'}
                        goTo={'/glossary'}
                        toolTip={'Manage Glossary'}
                    />
                    <MenuBtn 
                        icons={student} 
                        text={isActive ? 'Manage Students' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('manage students')}
                        isSelected={selected === 'manage students'}
                        toolTip={'Manage Students'}
                    />
                    <MenuBtn 
                        icons={profile} 
                        text={isActive ? 'Profile Settings' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('Profile settings')}
                        isSelected={selected === 'Profile settings'}
                        toolTip={'Profile Settings'}
                    />
                    <MenuBtn 
                        icons={account} 
                        text={isActive ? 'Account Management' : ''} 
                        active={isActive} 
                        onPress={() => handleSelect('account management')}
                        isSelected={selected === 'account management'}
                        toolTip={'Account Management'}
                    />
                    
                    {isActive ?
                        <div className="logout-container">
                            <button className="logout-btn">LOGOUT</button>
                        </div>
                        : ''
                    }
                    
                </div>

                <div className={isActive ? "active-main-content" : 'main-content'}>
                    <h1>Selected: {selected}</h1>
                </div>
            </div>
        </>
    );
}