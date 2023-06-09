/** Search
 * Componente para la busqueda de información
 */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string";

import { useItems } from "../../hooks";
import ItemList from "../items/itemList/item-list";

const _logo: string  = 'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png';

const Search = () => {

    //* Hooks
    const navigate = useNavigate();
    const location = useLocation();  //Captura de parametros enviados por URL
    const { search = '' } = queryString.parse( location.search )
    
    const  [ resultItems, setResultItems ] = useState(''); //Actualizar la busqueda
    const [ state, setState ] = useState(false); //Renderizar el componente ItemList
    const { searchItems } = useItems();   
    const [searchItem, setSearchItem] = useState('')
    
    /**Función para enviar los datos de busqueda a la API */
    const searchSubmbit = ( e: any ) => {
        e.preventDefault();
        _searchItems( searchItem )
        navigate(`/items?search=${ searchItem }`)
    }
    
    /**Función que consulta la API */
    const _searchItems = ( searchItem: any ) => 
    {    
        if ( searchItem.trim().length < 1 ) return
        searchItems( { search: searchItem } )
            .then(( e:any )=> { 
                setResultItems(e)
                setState(true)
            }) 
    }
    /**Permite renderizar el componente 1 vez */
    useEffect(() => {
        _searchItems( search )
    }, [])

    return(
        <>
            <div className="container containerSearch">
                <div className="row mx-auto">
                    <div className="col-2">
                        <img src={_logo} alt="Logo Mercado Libre" />
                    </div>
                    <div className="col-10">
                        <div className="inputGroup">
                            <form 
                                className="form"
                                onSubmit={ searchSubmbit }
                                >
                                <input 
                                    className="formControl" 
                                    name="search"
                                    placeholder='Nunca dejes de buscar' 
                                    type="text" 
                                    value={ searchItem }
                                    onChange={ ( e ) => setSearchItem( e.target.value ) }
                                    />
                                <button 
                                    className="btnSearch" 
                                    type="submit" >
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                (state) && <ItemList itemsList={ resultItems } />
            }
           
            
            
        </>
    )
}

export default Search;
