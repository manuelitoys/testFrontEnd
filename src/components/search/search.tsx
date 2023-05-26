import { useState } from "react";
import { useItems } from "../../hooks";

const _logo: string  = 'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png';

const Search = () => {

    //* Hooks
    const  [ search, useSearch ] = useState('');
    const { searchItems } = useItems();
    
    const searchSubmbit = ( e: any ) => {
        e.preventDefault();
        searchItems({ search: search })
    }

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
                                    value={ search }
                                    onChange={ e => useSearch(e.target.value) }
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
        </>
    )
}

export default Search;
