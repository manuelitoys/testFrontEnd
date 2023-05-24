
function Search() {

    const logo:string  = 'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png';

    return(
        <>
            <div className="container containerSearch">
                <div className="row mx-auto">
                    <div className="col-3">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-6">
                        <div className="inputGroup">
                            <input type="text" placeholder='Nunca dejes de buscar' className="formControl"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search