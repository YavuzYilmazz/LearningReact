import React from "react";
import Navi from "./Navi";
import { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
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
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}
              />
            </Col>
            <Col md="9">
              <ProductList
                products={this.state.products}
                info={ProductInfo}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
