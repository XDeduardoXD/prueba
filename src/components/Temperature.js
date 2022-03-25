import './css/temperature.css'

export const Temperature = ({ room, value }) => {
    return(
        <div className= "container-fluid" >
        <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-sm-12 col-xs-12">
                <div className="card text-white">
                    <div className="div1 p-4 p-md-5 ">
                        <h5>{room}</h5>
                        <h1>{value}<sup>°C </sup> </h1>
                        <p className="my-0">Feels like 14</p>
                        <h4 className="my-0">Mostly clear</h4>
                    </div>
                    <div className="div2"> </div>
                </div>
            </div>
        </div>
</div >)
}