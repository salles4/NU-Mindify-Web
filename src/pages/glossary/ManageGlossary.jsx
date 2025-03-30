import { useState } from "react";


export default function ManageGlossary() {


    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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