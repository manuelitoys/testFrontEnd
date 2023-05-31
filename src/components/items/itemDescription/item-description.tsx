import { useParams } from "react-router-dom";
import Search from "../../search/search";
import { useEffect, useState } from "react";
import { useItemDescription } from "../../../hooks";

function ItemDescription() {

    //*Hooks
    const { id } = useParams();
    const { itemDescription } = useItemDescription();
    const [ _item, setItem ] = useState({
        title: '',
        description: '',
        picture: '',
        condition: '',
        sold_quantity: '',
        price: {
            decimals: ''
        }
    })

    const _description = async ( id: any ) => {
        await itemDescription({ id: id })
                .then((e) => {
                    setItem(e.item)
                })
    }

    const _format = new Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })

    useEffect(() => {
        _description( id )
    }, [])
    
    return (
        <>
            <Search />
            <div className="container containerDescription">
                <div className="row cardDescription">
                    <div className="col-8">
                        <img className="imgDescription"  src={ _item.picture } alt={ _item.title } /> 
                        <div className="descriptionDescription">
                            <h2>Descripción del producto</h2>
                            <p>{ _item.description }</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="infoDescription">
                            { _item.condition } -  { _item.sold_quantity } vendidos
                        </div>
                        <div className="titleDescription">
                            <h2>{ _item.title }</h2>
                        </div>
                        <div className="priceDescription">  
                            <p> { _format.format( parseInt(_item.price.decimals) ) }</p>
                        </div>
                        <button className="btnDescription">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDescription;