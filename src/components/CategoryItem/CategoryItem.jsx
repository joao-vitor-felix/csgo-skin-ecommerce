import "./CategoryItem.scss";

const CategoryItem = ({ categories }) => {
  const { title, imageUrl } = categories;
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: "#101820" }}>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
