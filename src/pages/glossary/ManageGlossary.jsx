import { useRef, } from "react";
import terms from '../../data/GlossaryTerms.json'

export default function ManageGlossary() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const termRefs = useRef({});
    
    const groupedTerms = terms.reduce((acc, term) => {
        const firstLetter = term.word[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(term);
        return acc;
    }, {});

    

    const scrollToLetter = (letter) => {
        if (termRefs.current[letter]) {
            termRefs.current[letter].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div className="glossary-header">
                <h1 className="glossary-title">Manage Glossary</h1>

                <div className="glossary-search-container">
                    <div className="glossary-search-holder">
                        <button className="search-btn"></button>
                        <input type="text" placeholder="Search" className="search-input" />
                    </div>
                </div>

                <div className="glossary-letters-btn-container">
                    {letters.map((letter, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToLetter(letter)}
                            className="bg-green-500 text-white hover:bg-green-600 "
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="glossary-body">
                {letters.map((letter) => (
                    <div key={letter} ref={(el) => (termRefs.current[letter] = el)}>
                        <h2 className="text-2xl font-bold my-4">{letter}</h2>
                        {groupedTerms[letter]?.length > 0 ? (
                            <div className="space-y-4">
                                {groupedTerms[letter].map((term, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-lg font-semibold">{term.word}</h3>
                                        <p className="text-gray-600">{term.meaning}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400 italic">No terms available</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
