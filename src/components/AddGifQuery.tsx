import { useState } from 'react';

interface Props{
    setGifs: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddGifQuery = ({ setGifs }:Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e:any) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setGifs( gifs => [ inputValue, ...gifs ]);
            setInputValue('');
        }
    }

    return (
        <>
            <div className="nav__input">
                <form onSubmit={ handleSubmit }>
                    <input 
                        type='text'
                        value={ inputValue }
                        onChange={ handleInputChange }
                        placeholder='Write any word and press Enter'
                    />
                </form>
            </div>
        </>
    )
}
