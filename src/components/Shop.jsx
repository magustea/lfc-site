import { FaExternalLinkSquareAlt } from "react-icons/fa";


function Shop() {

    const PRODUCTS = [
        { id: 1, name: 'Home Kit', img: '/src/assets/shop/home-kit.webp' },
        { id: 2, name: 'Away Kit', img: '/src/assets/shop/away-kit.webp' },
        { id: 3, name: 'Third Kit', img: '/src/assets/shop/third-kit.webp' },
        { id: 4, name: 'Collectables', img: '/src/assets/shop/collectables.webp' },
    ]


    return (
        <>
            <div className='h-64 w-full flex '>
                {PRODUCTS.map((product) => (
                    <div className='w-48 h-full bg-[var(--color-secondary)] flex-shrink-0'>

                        <div className='h-50 bg-cover bg-center' style={{ backgroundImage: `url(${product.img})` }} />
                        <div className='text-center flex flex-col text-white block cursor-pointer inset-shadow-sm pt-1'>
                            <p className='font-bold'>{product.name}</p>
                            <p className='flex items-center justify-center gap-2'>Buy Now <FaExternalLinkSquareAlt /> </p>
                        </div>

                    </div>
                ))}
                    

            </div>
        </>
    )
}

export default Shop;