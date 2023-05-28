function ItemDescription({ description }: any) {
  
    const { item } = description;
   
    return (
        <>
            <div className="container containerDescription">
                <div className="row cardDescription">
                    <div className="col-8">
                        <img className="imgDescription" src={ item.picture } alt={ item.title } /> 
                        <div className="descriptionDescription">
                            <h2>Descripción del producto</h2>
                            <p>{ item.description }</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="infoDescription">
                            { item.condition } -  { item.sold_quantity } vendidos
                        </div>
                        <div className="titleDescription">
                            <h2>{ item.title }</h2>
                        </div>
                        <div className="priceDescription">  
                            <p>$ { item.price.decimals }</p>
                        </div>
                        <button className="btnDescription">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDescription;