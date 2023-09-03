import React from "react";
import Navi from "./Navi";
import { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
state={currentCategory:""}

changeCategory = (category) => {
  this.setState({currentCategory:category.CategoryName})
  }

  render() {
    let CategoryInfo = { title: "Category List" };
    let ProductInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navi />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <CategoryList   currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={CategoryInfo} />
            </Col>
            <Col md="9">
              <ProductList info={ProductInfo} currentCategory={this.state.currentCategory} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
