import { useNavigate } from "react-router-dom"; // instead of Link router-component
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  <DirectoryItemContainer onClick={onNavigateHandler}>
    <BackgroundImage imageUrl={imageUrl} />
    <DirectoryItemBody>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </DirectoryItemBody>
  </DirectoryItemContainer>;
};

export default DirectoryItem;
