import DirectoryItem from "../directory-item/directory-item.component";
import "./categories-directory.styles.scss";

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
