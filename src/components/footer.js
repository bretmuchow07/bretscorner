import React from 'react';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons';



function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Container className="d-flex">
                    <p className="text-muted">© 2025 Bret's Corner </p>
                    <p className="text-muted"> Made with ❤️ by Bret </p>
                <FontAwesomeIcon icon={faHouse} />
                </Container>
                </div>
        </footer>
    );
}
export default Footer;