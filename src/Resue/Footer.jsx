import React from 'react'

const Footer = () => {
    return (
        <div className='comb'>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="/About" className="nav-link px-2 text-body-secondary">About</a></li>
                        <li className="nav-item"><a href="/Gallery" className="nav-link px-2 text-body-secondary">Gallery</a></li>
                        <li className="nav-item"><a href="/Team" className="nav-link px-2 text-body-secondary">Team</a></li>
                        <li className="nav-item"><a href="/Contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
