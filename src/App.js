import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './screens/About';
import Contact from './screens/Contact';
import Blog from './screens/Blog';
const App = () => {
    return (
        <>
            <Router>
                <Container fluid>
                    <NavbarComponent />
                </Container>
                <main className="py-3">
                    <Container>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                    </Container>
                </main>
                <Container fluid>
                    <Footer />
                </Container>
            </Router>
        </>
    );
};

export default App;
