import { useState } from "react";
import Fixtures from "../components/Fixtures";
import Shop from "../components/Shop";

function Home() {

    const [activeMenu, setMenu] = useState('FIXTURES')

    return (

        <>
            <div>

                {/*Home Banner*/}
                <div className='h-32 w-full relative w-full'>
                    <div className='bg-[url(./src/assets/home/banner.jpg)] h-full w-full bg-cover bg-center' />
                    
                </div>

                <div className='flex h-64'>

                    <div className='w-2/10 bg-[var(--color-primary)] text-white flex flex-col'>
                        
                        <button onClick={() => setMenu('FIXTURES')} className='block cursor-pointer h-10 mt-2'>FIXTURES</button>
                        <button onClick={() => setMenu('SHOP')} className='block cursor-pointer h-10'>SHOP</button>

                    </div>

                    <div className='w-8/10 overflow-x-auto flex items-center scroll-smooth no-scrollbar'>
                        {activeMenu === 'FIXTURES' && <Fixtures />}
                        {activeMenu === 'SHOP' && <Shop />}
                    </div>

                </div>

                <div>

                    <div className='h-10 w-full bg-[var(--color-primary)] flex items-center justify-center'>
                        <p className='text-white'>LAST NEWS</p>
                    </div>

                    <div className='h-64 w-full bg-black'>
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home;