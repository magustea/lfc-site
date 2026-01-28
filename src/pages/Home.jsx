import { useState } from "react";
import Fixtures from "../components/Fixtures";
import Shop from "../components/Shop";

function Home() {

    const [activeMenu, setMenu] = useState('FIXTURES')

    return (

        <>
            <div>

                {/*Home Banner*/}
                <div className='h-32 w-full bg-slate-300 relative w-full'>
                    <div className='bg-[url(./src/assets/home/banner.jpg)] h-full w-full bg-cover bg-center' />
                    
                </div>

                <div className='flex'>

                    <div className='h-72 w-2/10 bg-[var(--color-primary)] text-white flex flex-col'>
                        
                        <button onClick={() => setMenu('FIXTURES')} className='block cursor-pointer h-10'>FIXTURES</button>
                        <button onClick={() => setMenu('SHOP')} className='block cursor-pointer h-10'>SHOP</button>
                        <button>MENU3</button>

                    </div>

                    <div className='w-8/10 overflow-x-auto flex items-center scroll-smooth no-scrollbar'>
                        {activeMenu === 'FIXTURES' && <Fixtures />}
                        {activeMenu === 'SHOP' && <Shop />}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home;