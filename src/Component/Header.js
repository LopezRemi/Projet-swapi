import vador from '../images/vador.png'

function Header() {
    return (
        <div>
            <header className="bg-black py-5">
                <section className="container text-center text-white">
                    <h1 className=" font-face-gm text-warning">Star Wars Api</h1>
                </section>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="pouet"></a>
                    <img height="100" src={vador} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-warning" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;