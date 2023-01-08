import { Link } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { title, imageUrl } }) => (
  <DirectoryItemContainer>
    <BackgroundImage imageUrl={imageUrl} />
    <DirectoryItemBody>
      <Link to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
    </DirectoryItemBody>
  </DirectoryItemContainer>
);

export default DirectoryItem;
