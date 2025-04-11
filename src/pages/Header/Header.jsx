import "./Header.css";
function Header() {
    return (
        <header className="container-fluid header m-0 px-3">
            <div className="row align-items-center">
                {/* Logo và Toggle nằm trên 1 row */}
                <div className="d-flex justify-content-between align-items-center col-12 col-md-5">
                    <h1 className="text-portfolio m-0">portfolio</h1>

                    {/* Toggle button chỉ hiện khi < 992px */}
                    <button
                        className="navbar-toggler d-md-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list nav-icon"></i>
                    </button>
                </div>

                {/* Nav chỉ hiện khi ≥ 992px */}
                <div className="d-none d-md-flex justify-content-end col-md-7">
                    <nav className="d-flex flex-row align-items-center gap-3 nav">
                        <a href="#about" className="text-nav text-portfolio">About</a>
                        <a href="#skills" className="text-nav text-portfolio">Skills</a>
                        <a href="#projects" className="text-nav text-portfolio">Projects</a>
                        <a href="#contact" className="text-nav text-portfolio">Contact</a>
                    </nav>
                </div>
            </div>

            {/* Nav collapse dành cho mobile/tablet */}
            <div className="collapse d-md-none mt-3" id="navbarNav">
                <nav className="d-flex flex-column align-items-start gap-2 nav px-3 py-2">
                    <a href="#about" className="text-nav text-portfolio">About me</a>
                    <a href="#skills" className="text-nav text-portfolio">Skills</a>
                    <a href="#projects" className="text-nav text-portfolio">Projects</a>
                    <a href="#contact" className="text-nav text-portfolio">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;