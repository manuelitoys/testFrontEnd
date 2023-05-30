import { useState } from "react";
import { useItemDescription } from "../../../hooks";
import ItemDescription from "../itemDescription/item-description";


function ItemList({ itemsList, state }: any) {

    //*Hooks
    const { itemDescription } = useItemDescription();
    const [description, setDescription] = useState('')
    const [ elemntDom, setElementDom] = useState(state)

    const { items } = itemsList; 
     
    const _description = async (id: string) => {
        await itemDescription({ id: id })
            .then((e) => {
                setDescription(e)
            })
        setElementDom(!state)
    }

    if(!elemntDom){
        return(
            <ItemDescription description={ description } />
        )
    }else{
        return (
            <>
                <div className="container containerItemList mx-auto">
                    {
    
                        items.map(({ id, title, price, picture }: any, index: number) => {
                            if (index < 4) {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col">
                                            <div className="card">
                                                <img src={picture} alt="Image Example" className="imgItem" />
                                                <div className="contentTextItem">
                                                    <div className="titleItem" onClick={() => _description(id)} role="button">
                                                        {title}
                                                    </div>
                                                    <div className="priceItem">
                                                       $ {price.decimals}
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
    

}

export default ItemList;