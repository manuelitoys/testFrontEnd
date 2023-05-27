import { useSelector } from "react-redux"
import { itemsApi } from "../api";

export const useItems = () => {

    const search = useSelector( state => state );
    
    const searchItems = async ( search: any ) => {
          
        try {
            
            const resp = await itemsApi.post('/items', search);

            return resp.data;

        } catch (error) {
            console.log(error);
        }
    }

    return {
        search,
        searchItems,
    }

}