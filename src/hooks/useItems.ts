import { useDispatch, useSelector } from "react-redux"
import { itemsApi } from "../api";

export const useItems = () => {

    const search = useSelector( state => state );
    const dispatch = useDispatch();

    const searchItems = async ( search: any ) => {
          
        try {
            
            const resp = await itemsApi.post('/items', search);
            console.log( resp );

        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        search,
        searchItems
    }

}