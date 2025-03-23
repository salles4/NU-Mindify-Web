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

    function handleGlossary(){

    }

    return (
        <>
            <div className="mainCont">
                <div className={isActive ? 'active-side-menu' : 'side-menu'}>
                    
                     <MenuBtn icons={isActive ? halfburger : hamburger} text='' onPress={handleSideMenu} />

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

                    <Link to={'/'}><MenuBtn icons={home} text={isActive ? 'Dashboard' : ''} /></Link>
                    <MenuBtn icons={analytic} text={isActive ? 'Analytics' : ''} />
                    <MenuBtn icons={report} text={isActive ? 'Reports' : ''} />
                    <MenuBtn icons={leaderboard} text={isActive ? 'Leaderboard' : ''} />
                    <MenuBtn icons={question} text={isActive ? 'Manage Question' : ''} />
                    <Link to={'/glossary'}><MenuBtn icons={glossary} text={isActive ? 'Manage Glossary' : ''} /></Link>
                    <MenuBtn icons={student} text={isActive ? 'Manage Students' : ''} />
                    <MenuBtn icons={profile} text={isActive ? 'Profile Settings' : ''} />
                    <MenuBtn icons={account} text={isActive ? 'Account Management' : ''} />
                    
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
