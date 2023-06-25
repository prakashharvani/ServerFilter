
const Server = ({ props }: any) => {
 
    return (
       

            <div className="card m-2" style={{ width: '18rem' }}>
                {/* <Image src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Server {props?.index +1}</h5>


                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props?.card?.Model}</li>
                        <li className="list-group-item">{props?.card?.RAM}</li>
                        <li className="list-group-item">{props?.card?.HDD}</li>
                        <li className="list-group-item">{props?.card?.Price}</li>
                        <li className="list-group-item">{props?.card?.Location}</li>
                    </ul>

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
       
    )
}
export default Server;
