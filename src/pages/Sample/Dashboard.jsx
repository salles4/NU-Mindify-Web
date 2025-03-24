import { useState } from "react";
import { Link } from "react-router-dom";
import home from './images/home.png'
import MenuBtn from "../../components/MenuBtn";
import hamburger from './images/hamburger.png'
import halfburger from './images/halfburger.png'
import analytic from './images/analytic.png'
import report from './images/report.png'
import leaderboard from './images/leaderboard.png'
import question from './images/question.png'
import glossary from './images/glossary.png'
import student from './images/student.png'
import profile from './images/profile.png'
import account from './images/account.png'



export default function Dashboard() {

    const [isActive, setActive] = useState(false)

    function handleSideMenu(){
        console.log("hello");
        setActive(!isActive)
    }

    return (
        <>
            <div className="mainCont">
                <div className={isActive ? 'active-side-menu' : 'side-menu'}>
                    
                    <MenuBtn 
                        icons={isActive ? halfburger : hamburger} 
                        text='' 
                        onPress={handleSideMenu} 
                        toolTip={isActive ? null : 'Menu'} 
                    />

                    {isActive ? 
                        <div className="avatar">
                            <div className="avatar-container">
                                <img 
                                    src="https://avatarfiles.alphacoders.com/375/thumb-1920-375159.jpeg" 
                                />
                            </div>
                        </div>
                        :
                        ''
                    }

                    {isActive ? 
                        <div className="name-container">
                            <h1 className="user-name">Suosuo Frieren</h1>
                            <h5 className="user-email">virgojl@students.nu-moa.edu.ph</h5>
                        </div>
                        :
                        ''
                    }

                    <MenuBtn 
                        icons={home} 
                        text={isActive ? 'Dashboard' : ''} 
                        goTo={'/'} 
                        toolTip={isActive ? null : 'Dashboard'} 
                    />
                    <MenuBtn 
                        icons={analytic} 
                        text={isActive ? 'Analytics' : ''} 
                        toolTip={isActive ? null : 'Analytics'} 
                    />
                    <MenuBtn 
                        icons={report} text={isActive ? 'Reports' : ''} 
                        toolTip={isActive ? null : 'Reports'} 
                    />
                    <MenuBtn 
                        icons={leaderboard} 
                        text={isActive ? 'Leaderboard' : ''} 
                        toolTip={isActive ? null : 'Leaderboard'}  
                    />
                    <MenuBtn 
                        icons={question} 
                        text={isActive ? 'Manage Question' : ''} 
                        toolTip={isActive ? null : 'Manage Question'} 
                    />
                    <MenuBtn 
                        icons={glossary} 
                        text={isActive ? 'Manage Glossary' : ''} 
                        goTo={'/glossary'} 
                        toolTip={isActive ? null : 'Manage Glossary'} 
                    />
                    <MenuBtn 
                        icons={student} 
                        text={isActive ? 'Manage Students' : ''} 
                        toolTip={isActive ? null : 'Manage Students'} 
                    />
                    <MenuBtn 
                        icons={profile} 
                        text={isActive ? 'Profile Settings' : ''} 
                        toolTip={isActive ? null : 'Profile Settings'} 
                    />
                    <MenuBtn 
                        icons={account} 
                        text={isActive ? 'Account Management' : ''} 
                        toolTip={isActive ? null : 'Account Management'} 
                    />
                    
                    {
                        isActive ?
                        <div className="logout-container">
                            <button className="logout-btn">LOGOUT</button>
                        </div>
                        :
                        ''
                    } 
                    
                </div>

                <div className={isActive ? "active-main-content" : 'main-content'}>
                    <h1>Dashboard to</h1>
                </div> 
            </div>
        </>
    );
}
