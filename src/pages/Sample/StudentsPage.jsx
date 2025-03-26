import { useState } from "react"

import home from './images/home.png'
import MenuBtn from "../../components/sideMenu/MenuBtn";
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

 
export default function StudentsPage(){
    
    const [isActive, setActive] = useState(false)

    function handleSideMenu(){
        console.log("hello");
        setActive(!isActive)
    }

    return(
        <>
            <div className="mainCont">
                <div className={isActive ? 'active-side-menu' : 'side-menu'}>

                    <MenuBtn icons={isActive ? halfburger : hamburger} text='' onPress={handleSideMenu} toolTip={isActive ? null : 'Menu'} />

                    {isActive 
                        ? <div className="avatar">
                            <div className="avatar-container">
                                <img 
                                    src="https://avatarfiles.alphacoders.com/375/thumb-1920-375159.jpeg" 
                                />
                            </div>
                        </div>
                        : ''
                    }

                    {isActive 
                        ? <div className="name-container">
                            <h1 className="user-name">Suosuo Frieren</h1>
                            <h5 className="user-email">virgojl@students.nu-moa.edu.ph</h5>
                        </div> 
                        : ''
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
                    // goTo={'/'} 
                    toolTip={isActive ? null : 'Analytics'} 
                    />

                    <MenuBtn 
                    icons={report} 
                    text={isActive ? 'Reports' : ''} 
                    // goTo={'/'} 
                    toolTip={isActive ? null : 'Reports'} 
                    />

                    <MenuBtn 
                    icons={leaderboard} 
                    text={isActive ? 'Leaderboard' : ''} 
                    // goTo={'/'} 
                    toolTip={isActive ? null : 'Leaderboard'} 
                    />

                    <MenuBtn 
                    icons={question} 
                    text={isActive ? 'Manage Question' : ''} 
                    // goTo={'/'} 
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
                    goTo={'/students'} 
                    toolTip={isActive ? null : 'Manage Students'} 
                    />  

                    <MenuBtn 
                    icons={profile} 
                    text={isActive ? 'Profile Settings' : ''} 
                    // goTo={'/'} 
                    toolTip={isActive ? null : 'Profile Settings'} 
                    />

                    <MenuBtn 
                    icons={account} 
                    text={isActive ? 'Account Management' : ''} 
                    // goTo={'/'} 
                    toolTip={isActive ? null : 'Account Management'} 
                    />

                    {isActive 
                        ?<div className="logout-container">
                            <button className="logout-btn">LOGOUT</button>
                        </div> 
                        : ''
                    } 

                </div>

                <div className={isActive ? "active-main-content" : 'main-content'}>

                    <div className="header">
                        <div>
                            <h1 className="text-black">Manage Students</h1>
                        </div>
                    </div>
                    
                    <div className="body">

                    </div>
                </div> 

            </div>
        </>
    )
}