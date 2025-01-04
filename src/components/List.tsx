import {Category} from "@/apiService.ts";

export default function List({categories}: { categories: Category[] }) {

    return (
        <div className="row  py-5" style={{backgroundColor: "#F2F2F2 !important"}}>
            <div className="col-md-10 offset-md-1">
                <h3 style={{marginBottom: 30}} className="text-center">
                    Recipes
                </h3>
                <div className="row">

                    {
                        categories && categories.length > 0 ?

                            categories.map(function (c) {
                                return (
                                    <div className="col-md-4 my-4" key={c.idCategory}>
                                        <img src={c.strCategoryThumb} className="img-fluid"/>
                                        <div className="descriptions pix">
                                            <h6>{c.strCategory}</h6>
                                            <p>
                                                {c.strCategoryDescription.slice(0, 100)}
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