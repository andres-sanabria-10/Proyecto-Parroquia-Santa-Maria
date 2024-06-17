

const login = () => {
  return (
    <div className="container-fluid ">
      {<div className="row g-0">
        <div className="d-none d-md-flex col-md-6 col-lg-5 bg-image"></div>
        <div className="col-md-6 col-lg-7">
          <div className="login d-flex align-items-center ">
            <div className="container">
              <div className="col-md-6 col-lg-11 mx-auto" style={{ backgroundColor: 'antiquewhite' }}>
                <center>
                  <img id="imagen" src={'/src/img/evento.jpg'} className="img-thumbnail" alt="no carga" />
                </center>
              </div>

              <div className="collapse" id="collapseContent">
                <div className="col-md-5 col-lg-11 mx-auto" style={{ backgroundColor: 'antiquewhite' }}>
                  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={'/src/img/bau.png'} className="d-block w-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Incripción curso Bautismal</h5>
                          <p>Inicion 15/05/2024   Fin: 15/07/2024</p>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval={2000}>
                        <img src={'/src/img/Matrimonio.png'} className="d-block w-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Documentos necesarios para el matrimonio</h5>
                          <p>Listado en pdf</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={'/src/img/paloma.png'} className="d-block w-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Incripción curso de Confirmacion</h5>
                          <p>Inicion 15/05/2024   Fin: 15/07/2024.</p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default login
