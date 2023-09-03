import React from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'

function App() {
  let CategoryInfo = { title: "Category List" }
  let ProductInfo = { title: "Product List" }

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
            <CategoryList info={CategoryInfo}/>
          </Col>
          <Col md='9'>
            <ProductList info={ProductInfo}/> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
