import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((categories) => (
        <CategoryItem key={categories.id} categories={categories} />
      ))}
    </div>
  );
};

export default Directory;
