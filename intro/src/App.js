import React from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navi />
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <CategoryList />
          </Col>
          <Col md='9'>
            <ProductList /> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
