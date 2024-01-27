import React from 'react';

const Footer = () => {
  return (
    <div className="blockcode">
    <br/>
      <footer className="page-footer shadow bg-dark text-white"> {/* Klasat e shtuara: bg-dark dhe text-white */}
        <div className="d-flex flex-column mx-auto py-5" style={{ width: '80%' }}>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <a href="/" className="d-flex align-items-center p-0 text-white">{/* Teksti i bardhë */}
                <span className="ms-3 h5 font-weight-bold">FILMA SHQIP</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                Faqja më e madhe shqiptare për filma dhe seriale në cilësi HD, tani edhe për smartphone-in tuaj!
              </p>
              <span className="mt-4">
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-facebook"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-twitter"></i>
                </button>
                <button className="btn btn-dark btn-flat p-2">
                  <i className="fa fa-instagram"></i>
                </button>
              </span>
            </div>
            <div>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Filma Shqip
              </p>
              <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Resurset
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Rreth Nesh
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Kontakt
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Blogu
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Ndihmat
              </p>
              <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Email
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Regjistrohu
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Kyquni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Tjera
              </p>
              <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Privacy Policy
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    DMCA
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white" href="/"> {/* Teksti i bardhë */}
                    Removal
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <small className="text-center mt-5">&copy; Filma Shqip &copy; 2024. Të gjithë të drejtat e rezervuara.</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
