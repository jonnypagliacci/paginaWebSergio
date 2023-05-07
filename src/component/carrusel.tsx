

export default function Carrusel(){
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-100" style={{maxHeight : 650, paddingTop : 50}}>
                <div className="carousel-item active">
                <img src="imagen1.jpg" className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div className="carousel-item">
                <img src="imagen2.jpg" className="d-block w-100"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div className="carousel-item">
                <img src="imagen3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};