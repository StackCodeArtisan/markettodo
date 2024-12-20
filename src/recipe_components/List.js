
const List = ({categories}) => {

    return(
        <div className="row  py-5" style={{ backgroundColor: "#F2F2F2 !important" }}>
            <div className="col-md-10 offset-md-1">
                <h3 style={{ marginBottom: 30 }} className="text-center">
                Recipes
                </h3>
                <div className="row">

                    {
                        categories && categories.length > 0 ? 

                             categories.map(function(cat){
                                 return(
                                    <div className="col-md-4 my-4" key={cat.categories}>
                                    <img src={cat.strCategoryThumb} className="img-fluid" />
                                    <div className="descriptions pix">
                                    <h6>{cat.strCategory}</h6>
                                    <p>
                                        {cat.strCategoryDescription.slice(0, 100)}
                                    </p>
                                    </div>
                                </div>
                            )
                        })
                        
                        :

                        <p className="alert alert-danger">No Category</p>
                    }
             
               
                </div>
            </div>
        </div>

    )
}
export default List