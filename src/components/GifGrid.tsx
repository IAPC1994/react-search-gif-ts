import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './';

interface Props{
    category: string;
}

export const GifGrid = ({ category }:Props) => {

    const { data:images, loading } = useFetchGifs( category );
    return (
        <>
            { loading && <p>Loading...</p> }
            <div className='card__container'>
                
                {
                    images.map( img => (
                        <GifGridItem  key={ img.id } {...img} />
                    ))
                }
            </div>
        </>
    )
}
