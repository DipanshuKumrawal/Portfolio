import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Interests And Skills</h1>
        <p className="pl-desc">
          Besides programming i have a interest in reading novels, playing badminton, watching webseries, hanging out with friends and  always up for body weight training.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}

       
      </div>
    </div>
  );
};

export default ProductList;