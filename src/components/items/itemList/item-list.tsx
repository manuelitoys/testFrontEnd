import { useNavigate } from "react-router-dom";


function ItemList( { itemsList }: any ) {    


    if(!itemsList){
        return( <></> )
    }

    let { items } = itemsList; 
    let navigate = useNavigate();

    const _format = new Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })
     
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