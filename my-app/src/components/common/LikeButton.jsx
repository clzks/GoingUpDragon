import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { MdThumbUp, MdThumbUpOffAlt } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";

function LikeButton() {
  return (
    <div>
      <FaThumbsUp color="blue" size="40px" /> {/* 채워진 엄지 */}
      <FaRegThumbsUp color="gray" size="40px" /> {/* 테두리 엄지 */}
      <MdThumbUp color="green" size="40px" />{" "}
      {/* Material Design 채워진 엄지 */}
      <MdThumbUpOffAlt color="black" size="40px" />{" "}
      {/* Material Design 테두리 엄지 */}
      <FiThumbsUp color="orange" size="40px" /> {/* Feather 스타일 엄지 */}
    </div>
  );
}

export default LikeButton;
