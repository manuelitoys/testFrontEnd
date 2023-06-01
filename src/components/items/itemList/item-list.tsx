/** Item List:
 * Componente para mostrar la lista de productos */

import { useNavigate } from "react-router-dom";


function ItemList( { itemsList }: any ) {    

/** Si no hay items no renderiza nada */
    if(!itemsList){
        return( <></> )
    }
/** Parametros recibidos del componente Search */
    let { items } = itemsList; 
    let navigate = useNavigate();

    /** Dar formato de moneda al precio */
    const _format = new Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })
     
    /** Redirige a la ventana de descripción */
    const _description = (id: any) => {
        navigate(`/items/${ id }`)
    }

    return (
        <>
            <div className="container containerItemList mx-auto">
                {

                    items.map(({ id, title, price, picture }: any, index: number) => {
                        if (index < 4) {
                            return (
                                <div className="row" key={ index }>
                                    <div className="col">
                                        <div className="card">
                                            <img src={ picture } alt="Image Example" className="imgItem" />
                                            <div className="contentTextItem">
                                                <div className="titleItem" onClick={() => _description(id)} role="button">
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