import React from 'react'
import '../../css/title-styles/Title.css'

function Title() {
    return (
        <div className='container'>
            <div className='row navigation-bar'>
                <div className='col-7 my-auto'>
                    <a href='/' className='link-1'>
                        Compras nacionales
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href='/' className='link-2'>
                        Solicitud de compra
                    </a>
                </div>
            </div>

            <div className='row principal-title'>
                <div className='col-5'>
                    Solicitud de compra
                </div>
            </div>

            <div className='row bottom-navbar'>
                <div className='col-7'>
                    <a>
                        Nuevo documento
                    </a>
                    <a>
                        Aceptar documento
                    </a>
                    <a>
                        Historial de documentos
                    </a>
                    <hr></hr>
                </div>
            </div>
            
        </div>
    )
}

export default Title

