import { useState } from "react";




export default function ManageGlossary() {


    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const terms = [
        {
          "word": "Confidentiality",
          "meaning": "An attribute of information that describes how data is protected from disclosure or exposure to unauthorized individuals or systems."
        },
        {
          "word": "Integrity",
          "meaning": "An attribute of information that describes how data is accessible and correctly formatted for use without interference or obstruction."
        },
        {
          "word": "Availability",
          "meaning": "An attribute of information that describes how data is accessible and correctly formatted for use without interference or obstruction."
        },
        {
          "word": "Asset",
          "meaning": "An asset refers to anything of value to an organization or individual that needs protection from potential threats"
        },
        { "word": "Object", "meaning": "It is the target entity of the attack." },
        {
          "word": "Access",
          "meaning": "A subject or object's ability to use manipulate, modify, or affect another subject or object."
        },
        {
          "word": "Practices",
          "meaning": "These are exemplary actions that an organization identifies as ideal and seeks to emulate."
        },
        {
          "word": "Guidelines",
          "meaning": "Provides examplle and recommendation to assist users in complying with thhe new policy."
        },
        {
          "word": "Procedures",
          "meaning": "The process to changge your password."
        },
        {
          "word": "Policies",
          "meaning": "Employee must use strong password on their accounts. Must change password regularly."
        },
        {
          "word": "Active attack",
          "meaning": "An active attack in the context of information security refers to any type of attack where the attacker actively interacts with or manipulates a system, network, or data to achieve their objectives, often with the goal of disrupting, altering, or compromising the system's functionality or integrity."
        },
        {
          "word": "Direct Attack",
          "meaning": "Perpetrated by a hacker using a PC to break into a system."
        },
        {
          "word": "Indirect Attack",
          "meaning": "a hacker compromising a system and using it to attack other systems."
        },
        {
          "word": "Supply chain attack",
          "meaning": "The attacker targets the supplier or partners of the organization to gain access to the organization's network and systems."
        },
        {
          "word": "Chief Information Officer (CIO)",
          "meaning": "Responsible for overall technology strategy and infrastructure. Includes management of IT systems, software, networks, hardware, and data to support business operations."
        },
        {
          "word": "Chief Information Security Officer (CISO)",
          "meaning": "Focuses on the security of organization's information, systems, and data. Primary responsibility is to protect the organization from cyber threats and ensure complaince with data protection regulations."
        },
        {
          "word": "Team Leader",
          "meaning": "A project manager who may also be a departmental line manager or staff unit manager, and who understands proejct management, personnel management, and infromation security technical requirements."
        },
        {
          "word": "Copyright",
          "meaning": "Intellectual property protection for literary, artustic, and musical works."
        },
        {
          "word": "Threat",
          "meaning": "Anything that can exploit vulnerability and obtain, damage, or destroy an asset."
        },
        {
          "word": "Phreaker",
          "meaning": "Hacker who manipulates telephone system to make calls"
        },
        {
          "word": "Craker",
          "meaning": "Hacker who removes or bypass copyright protection that prevents duplication"
        },
        {
          "word": "Packet monkey",
          "meaning": "Script Kiddie that uses automated exploits to engage in DOS attacks"
        },
        {
          "word": "Dictionary Password Attack",
          "meaning": "Type of attack that involves trying common words and phrases to guess a password"
        },
        {
          "word": "Brute Force Attack",
          "meaning": "Attempt to guess a password with every possible combination."
        },
        {
          "word": "Rainbow Table Attack",
          "meaning": "Table of hash values and corresponding plain text for attacker that stole a system's encrypted password file."
        },
        {
          "word": "Pharming",
          "meaning": "Redirection of web traffic from legit to illegit to collect personal info"
        },
        {
          "word": "Packet Snipping",
          "meaning": "Method of detecting and assessing packet data sent over a network"
        },
        {
          "word": "Spoofing",
          "meaning": "Criminal who impersonates another individual or organization"
        },
        {
          "word": "Phishing",
          "meaning": ""
        },
        {
          "word": "Spam",
          "meaning": "Undesiried email, transmitted in bulk"
        },
        {
          "word": "Mail Bomb",
          "meaning": "attack designed to overwhelm receiever with excessivie quantities of email"
        },
        {
          "word": "GDPR",
          "meaning": "Data privacy law applies across the European Union"
        },
        {
          "word": "Information Aggregation ",
          "meaning": "Non private data piece when put together may violate privacy"
        },
        {
          "word": "Strategic Planning",
          "meaning": "Management specifying long term goals of org"
        },
        {
          "word": "Defens in Depth",
          "meaning": "Protection strategy that uses multiple layers and types of controls"
        },
        {
          "word": "Security Perimiter",
          "meaning": "Boundary of org's security effort"
        },
        {
          "word": "Redundancy",
          "meaning": "Multiple tech that prevent failure of one system"
        },
        {
          "word": "Security Domain",
          "meaning": "Area of trust where info assets share same protection"
        },
        {
          "word": "Incident Response Planning",
          "meaning": "Actions taken to anticipate detect and mitigate effects of incident"
        },
        {
          "word": "Disaster Recovery Planning",
          "meaning": "Intended efforts in the event of disaster. Focus on restoring system after disaster"
        },
        {
          "word": "Business Continuity Planning ",
          "meaning": "Occurs concurrently with Disaster Recovery Plan when damage is major"
        },
        {
          "word": "Cold Site",
          "meaning": "Backup location"
        },
        {
          "word": "Hot Site",
          "meaning": "Complete with all systems and equipment needed to resume with minimal delay."
        },
        {
          "word": "Warm Site",
          "meaning": "Complete with some systems and equipment needed to resume with reasonable delay."
        },
        {
          "word": "Time-Share",
          "meaning": "Allows org to co-lease hot, warm, or cold site with other business or orgs"
        },
        {
          "word": "Sequential Roster",
          "meaning": "alert roster - one person contact each person on the roster"
        },
        {
          "word": "Hierarchical Roster",
          "meaning": "alert roster - one person calls few other people who also calls others"
        },
        {
          "word": "Database shadowing",
          "meaning": "offsite data storage, realtime databse duplicate"
        },
        {
          "word": "Risk Appetite",
          "meaning": "amount of risk willing to accept"
        },
        {
          "word": "Residual Risk",
          "meaning": "Amount of risk even after applying level of controls"
        },
        {
          "word": "Acceptance Control Strategy",
          "meaning": "willing to accept current level of residual risk"
        },
        {
          "word": "Penetration Testing",
          "meaning": "Authorized attack to evaluate security"
        },
        {
          "word": "Vulnerability Assessment",
          "meaning": "review of security weaknesses of system"
        },
        {
          "word": "Cross site scripting",
          "meaning": "vulnerability found on web app when attacker injects scripts into web page"
        },
        {
          "word": "SQL Injection",
          "meaning": "common web hack"
        },
        {
          "word": "Buffer overflow",
          "meaning": "critical risk when program writes more data in buffer."
        },
        {
          "word": "Buffer overflow",
          "meaning": "critical risk when program writes more data in buffer."
        },
        {
          "word": "Black box",
          "meaning": "Tester has no knowledge of the environment other than testing scope"
        },
        {
          "word": "White box",
          "meaning": "Tester has all info"
        },
        {
          "word": "Gray box",
          "meaning": "Hybrid of two, given info about env"
        },
        {
          "word": "LINDDUN",
          "meaning": "threat modeling for org that wants risk management with emphasis on assets and organizational processes."
        },
        {
          "word": "STRIDE",
          "meaning": "by Microsoft, focused on type of threats and categorize them. for system with complex interactions"
        },
        {
          "word": "PASTA",
          "meaning": "simulate potential attacks. high-level approach to understand attacker's perspective"
        },
        {
          "word": "OCTAVE",
          "meaning": "emphasizes on org risk management perspective"
        },
        {
          "word": "Complete Mediation ",
          "meaning": "It is a security principle that ensures every access request is checked and validated before granting access to sensitive resources"
        },
        {
          "word": "Pull Request Review ",
          "meaning": "A type of code review, particularly in collaborative environments like GitHub, GitLab, or Bitbucket, where team members review proposed changes before they are merged into the main codebase"
        },
        {
          "word": "Over-the-shoulder Review ",
          "meaning": "Ad hoc reviews are informal and spontaneous. Developers may spontaneously ask team members to take a quick look at their code or discuss changes without a formal process."
        },
        {
          "word": "Secure Coding ",
          "meaning": "It is a method of writing software and source code that's shielded from cyber-attacks"
        },
        {
          "word": "Authorization ",
          "meaning": "It is the process of determining if a user has permission to access a resource or perform an action"
        },
        {
          "word": "Authentication ",
          "meaning": "The process of verifying the identity of a user (e.g., through username/password, tokens, or biometrics)."
        },
        {
          "word": "Reflected XSS ",
          "meaning": "The type of XSS in which malicious script is reflected off the web server and requires the victim to click on a crafted link for phishing attacks"
        },
        {
          "word": "Stored XSS ",
          "meaning": "The malicious script is permanently stored on the server (e.g., in a database, comment section, or user profile). Every time a user loads the page, the script runs"
        },
        {
          "word": "DOM XSS ",
          "meaning": "This happens when the attack is executed through the client-side script. The malicious data doesn't necessarily come from the server but rather from the DOM (Document Object Model) itself, causing the client-side script to execute the injected code."
        },
        {
          "word": "Network Hardening ",
          "meaning": "It refers to safeguarding the fundamental communication architecture of numerous servers and computer systems utilizing a specific network"
        },
        {
          "word": "Server Hardening ",
          "meaning": "Server hardening is a broad technique that involves applying advanced security measures at the hardware, firmware, and software layers to secure a server’s data, ports, components, functions, and rights."
        },
        {
          "word": "Software Hardening",
          "meaning": "Software hardening, also known as application hardening, consists of updating or adding new security precautions to safeguard both native and externally supplied applications that are installed on your server."
        },
        {
          "word": "Operating System Hardening ",
          "meaning": "Operating system hardening entails applying patches and adopting cutting-edge security measures (OS). Having updates, patches, and service packs loaded automatically is one of the greatest ways to get the operating system into a hardened condition"
        },
        {
          "word": "Loss Magnitude ",
          "meaning": "represents the financial impact or severity of the loss event when it occurs "
        },
        {
          "word": "Active reconnaissance",
          "meaning": "the pen-testers engage directly with the target system to gather information in active recon"
        },
        {
          "word": "Ad-hoc review ",
          "meaning": "review the developers may spontaneously ask team members to take a quick look at their code or discuss changes without a formal process"
        },
        {
          "word": "SQL ",
          "meaning": "injection is a common form of code injection that hackers use to access a website’s database"
        },
        {
          "word": "Input Validation ",
          "meaning": "ensures that data is checked against expected patterns and formats before processing"
        }
      ]
      

    return (
        <>
            <div className="glossary-header">
                <div className="glossary-title-container">
                    <h1 className="glossary-title">Manage Glossary</h1>
                </div>

                <div className="glossary-search-container">
                    <div className="glossary-search-holder">
                        <button className="search-btn">

                        </button>
                        <input type="text" placeholder="Search" className="search-input">

                        </input>
                    </div>
                </div>

                <div className="glossary-letters-btn-container">
                    {letters.map((elem, index) => 
                        <div style={{width: 40, height: 40, backgroundColor: 'green'}} key={index}>
                            <h1>{elem}</h1>
                        </div>
                        
                    )}
                </div>
            </div>
            <div className="glossary-body">

            </div>
        </>
    );
}