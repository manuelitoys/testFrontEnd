import { useSelector } from "react-redux"
import { itemsApi } from "../api";

export const useItemDescription = () => {

    const item = useSelector( state => state );
    
    const itemDescription = async ( id: any ) => {
          
        try {
            /** Peticion a la API y respuesta de información */
            const resp = await itemsApi.post('/items/id', id);
            
            return resp.data;

        } catch (error) {
            console.log(error);
        }
    }

    return {
        item,
        itemDescription,
    }

}