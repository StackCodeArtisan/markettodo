export default function Footer() {
    return (
        <div className="row footer" id="footer">
            <div className="col-md-4">
                <h5 className="section-title ps-3">Restaurants around me</h5>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> Mama Put
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> Street Delight
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> ABC Restaurant
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> Home Away from Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> Mama's Kitchen
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-arrow-right"/> Street Tables
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <h5 className="section-title">Contact Us</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Fullname
                        </label>
                        <input
                            type="text"
                            className="form-control noround"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Message
                        </label>
                        <textarea className="form-control noround" defaultValue={""}/>
                    </div>
                    <button type="submit" className="btn btn-success col-12 noround">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}
