import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( gifCategory:string ) => {

    const [state, setState] = useState({
        data:[{
            id: '',
            title: '',
            url:''
        }],
        loading: true
    });

    useEffect(() => {
      getGifs( gifCategory )
        .then( imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [gifCategory])
    

  return state;

}
