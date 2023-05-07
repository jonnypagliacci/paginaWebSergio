import "../componentStyle/contactanos.css"

export default function Contacto(){
    return(
        <>
        <figure className="figure">
            <h3 style={{position:"absolute", marginTop:25}}>
            Contactanos
            </h3>
            <img src="contactanos.jpg" className="figure-img img-fluid rounded" alt="..."/>
        </figure>
        <figure className="figure1">
            <p className="lead">
            Si quiere dejar algún comentario, estamos para escucharlo.
            Deje sus comentarios, le atenderemos a la brevedad.
            </p>
        </figure>
        <div className="container">
            <form action="https://formsubmit.co/dr.sergio.valdovinos@gmail.com" method="POST">

                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input className="form-control form-control-sm " placeholder="Nombre completo" name="name" type="text" id="name"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control form-control-sm " placeholder="Email" name="email" type="email" id="email"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="telefono">Telefono</label>
                    <input className="form-control form-control-sm" placeholder="Telefono" name="telefono" type="number" id="telefono"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="descripcion">Comentario</label>
                    <textarea className="form-control" placeholder="Escriba aquí su comentario" name="comentario" id="descripcion" cols={30} rows={10}></textarea>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>

            </form>
        </div>
        </>
    )
};