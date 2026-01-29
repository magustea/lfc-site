import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fixtures() {

    const API_KEY = '9d2bd7b0c4aa42ab85afe64a8ff27de7';

    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {

        const fetchFixtures = async () => {
            
            try {

                const response = await axios.get('/api/teams/64/matches?status=SCHEDULED', { headers: { 'X-Auth-Token': API_KEY } } );
        
                const filtered = response.data.matches
                    .filter(m => ['PL', 'CL'].includes(m.competition.code))
                    .slice(0, 10);
                
                setFixtures(filtered);

            } catch (error) {

                console.error("Loading error:", error); 

            }
            
        };

        fetchFixtures();
    }, []);

    return (
        <>
            <div className='flex h-full items-center'>

                {fixtures.map((match) => (

                    <div key={match.id} className='w-48 flex-shrink-0 flex flex-col p-2'>
                        
                        <div className='items-center text-sm'>

                            <p>{match.competition.name}</p>
                            
                            <p>{new Date(match.utcDate).toLocaleDateString('en-GB')}</p>

                        </div>

                        <div className='flex flex-col justify-center pt-5 gap-2'>

                            <div className='flex items-center gap-3'>

                                <img src={match.homeTeam.crest} className='w-8 h-8 object-contain' />

                                <p className='text-sm'>{match.homeTeam.shortName}</p>

                            </div>

                            <div className='flex items-center gap-3'>

                                <img src={match.awayTeam.crest} className='w-8 h-8 object-contain' />

                                <p className='text-sm'>{match.awayTeam.shortName}</p>

                            </div>

                            <div className='text-center pt-5'>

                                {new Date(match.utcDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}

                            </div>

                        </div>


                    </div>

                ))}

            </div>
        </>
    );
}

export default Fixtures;