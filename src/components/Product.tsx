import { ReactNode } from "react";

interface Props {
  header: String;
  title: String;
  description: String;
  onClose: () => void;
}

const Product = ({ header, title, description, onClose }: Props) => {
  const divStyle = { width: "18rem" };
  const btnStyle = { float: "right" as "right"};

  return (
    <div className="card text-bg-info mb-4" style={divStyle}>
      <div className="card-header">
        {header}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="card"
          aria-label="Close"
          onClick={onClose}
          style={btnStyle}
        ></button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Product;
