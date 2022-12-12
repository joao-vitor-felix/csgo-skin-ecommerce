import { CategoryItem } from '../CategoryItem/CategoryItem';
import './CategoryItemList.scss';

export const CategoryItemList = ({ categories }) => {
  return (
    <section className="category-item-list-container">
      {categories.map((categories) => (
        <CategoryItem key={categories.id} categories={categories} />
      ))}
    </section>
  );
};
