/** Item List:
 * Componente para mostrarla lista de productos */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrump from "../breadcrump";


function ItemList( { itemsList }: any ) {    

/** Si no hay items no renderiza nada */
    if(!itemsList){
        return( <></> )
    }
/** Parametros recibidos del componente Search */
    let { items } = itemsList; 
    let navigate = useNavigate();

/** Filtro para obtener la categoria con mas resultados */
    let maxNumber = 0
    let categoryItems = {
        name: '',
        results: 0
    }

    items.map(( cate:any )=>{
        cate.categories.filter(( c:any )=> {
            if( maxNumber < c.results ) {
                maxNumber = c.results
                categoryItems = {
                    name: c.name,
                    results: c.results
                }
            }
        })
    })
    
    /** Dar formato de moneda al precio */
    const _format = new Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })
     
    /** Redirige a la ventana de descripción */
    const _description = async (_id: any, category_id: any) => {   
        await items.filter((id: any) =>  {
            if(id.id == _id){
                id.categories.filter((id :any)=> {
                    if(id.id == category_id) localStorage.setItem('breadCrump',id.name) 
                })
            }
        })
        navigate(`/items/${ _id }`)
        
        
    }

    useEffect(()=> {}, [])

    return (
        <>
            <BreadCrump breadCrump={ categoryItems } />
            <div className="container containerItemList mx-auto">
                {

                    items.map(({ id, title, price, picture, category_id }: any, index: number) => {
                        if (index < 4) {
                            return (
                                <div className="row" key={ index }>
                                    <div className="col">
                                        <div className="card">
                                            <img aria-label="itemImage" src={ picture } alt="Image Example" className="imgItem" />
                                            <div className="contentTextItem">
                                                <div className="titleItem" aria-label="titleItem" onClick={() => _description(id, category_id)} role="button">
                                                    { title }
                                                </div>
                                                <div className="priceItem">
                                                    { _format.format(price.decimals) }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })

                }
            </div>
        </>
    );    

}

export default ItemList;