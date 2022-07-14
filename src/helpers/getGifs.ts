import { GIFInterfaces } from '../interface/gifInterfaces';

export const getGifs = async( gifCategory:string ) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( gifCategory ) }&limit=9&api_key=gYXIx5ykWN2LvOu63kApbVKTLzHW94qj`;
    const resp = await fetch( url );
    const {data}:GIFInterfaces = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}
