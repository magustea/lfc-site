import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fixtures() {

    const API_KEY = 'api key here!!!!';

    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {

        const fetchFixtures = async () => {
            
            try {

                const response = await axios.get('/api/teams/64/matches?status=SCHEDULED', { headers: { 'X-Auth-Token': API_KEY } } );
        
                const filtered = response.data.matches
                    .filter(m => ['PL', 'CL'].includes(m.competition.code))
                    .slice(0, 5);
                
                setFixtures(filtered);

            } catch (error) {

                console.error("Loading error:", error); 

            }
            
        };

        fetchFixtures();
    }, []);

    return (
        <>
            <div className='flex'>

                {fixtures.map((match) => (

                    <div key={match.id} className='h-72 w-64 flex-shrink-0 shadow flex flex-col justify-between p-2'>
                        
                        <div className='flex justify-between items-center text-sm pb-10'>

                            <p>{match.competition.name}</p>
                            <p>{new Date(match.utcDate).toLocaleDateString('en-gb')}</p>

                        </div>

                        <div className='flex flex-col gap-4 my-auto'>

                            <div className='flex items-center gap-3'>

                                <img src={match.homeTeam.crest} className='w-8 h-8 object-contain' />

                                <p className='text-sm'>{match.homeTeam.shortName}</p>

                            </div>

                            <div className='flex items-center gap-3'>

                                <img src={match.awayTeam.crest} className='w-8 h-8 object-contain' />

                                <p className='text-sm'>{match.awayTeam.shortName}</p>

                            </div>

                            <div className='text-center py-5'>

                                {new Date(match.utcDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}

                            </div>

                        </div>


                    </div>

                ))}

            </div>
        </>
    );
}

export default Fixtures;