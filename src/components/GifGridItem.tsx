
interface Props{
    title: string;
    url: string;
}

export const GifGridItem = ({ title, url }:Props) => {
    return (
        <>
            <div className='card__grid'>
                <img src={ url } alt={ title }/>
                <div className="text__center">
                    <p>{ title }</p>
                </div>
            </div>
        </>   
    )
}
