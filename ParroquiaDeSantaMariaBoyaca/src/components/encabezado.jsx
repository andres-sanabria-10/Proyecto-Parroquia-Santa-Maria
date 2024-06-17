const encabezado = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 pe-5 mb-4 border-bottom me-auto">
            <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none pe-5">
                <img className="bi me-2 ms-3" width="50" height="42" src="/src/img/parroquia.png" alt="Logo" />
                <span className="fs-4">Parroquia de Santa María</span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="/" role="button">Inicio</a></li>
                <button className="nav-link" data-bs-toggle="collapse" data-bs-target="#collapseContent" aria-expanded="false" aria-controls="collapseContent">Noticias</button>
                <li className="nav-item">
                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">Inicio de sesión</a>
                </li>
            </ul>

{

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Inicio de sesión</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
  }  </header>

        
    )
}

export default encabezado
