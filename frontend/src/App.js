import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './UI-Components/Header';
import Footer from './UI-Components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>"SITE NAME"</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
};

export default App