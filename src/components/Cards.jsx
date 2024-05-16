import Card from './Card'
import { cardData } from '@/data'

const Cards = () => {
    return (
        <>
            <div className='container max-w-6xl mx-auto py-10'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6'>

                    {cardData.map(item =>
                        <Card
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            imgSrc={item.imgSrc}

                        />)}
                </div>
            </div>
        </>
    )
}

export default Cards