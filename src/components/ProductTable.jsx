import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
