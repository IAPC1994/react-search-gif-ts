import { useState } from "react"
import { AddGifQuery } from "./components/AddGifQuery";
import { GifGrid } from "./components";

interface Props{
    defaultGifs: string[]
}

export const SearchGifApp = ({ defaultGifs }:Props) => {

    const [gifs, setGifs] = useState<string[]>( defaultGifs );

    return (
        <>
            <div className="nav">
                <div className="nav__container">
                    <div className="nav__title">
                        <h2>Search Gif App</h2>
                    </div>
                    <AddGifQuery setGifs={ setGifs }/>
                </div>
            </div>

            <div className="gif__container">
                {
                    gifs.map( gif => 
                        <GifGrid key={ gif } category={ gif } />
                    )
                }
            </div>
        </>
    )
}
