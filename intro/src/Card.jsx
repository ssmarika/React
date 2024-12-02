import Button1 from "./Button1";
import LizardDes from "./LizardDes";
import LizardHeading from "./LizardHeading";
import LizardPic from "./LizardPic";

const cardStyle = {
  boxShadow:
    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  margin: "5rem 0",
  width: "400px",
};

function Card() {
  return (
    <div style={cardStyle}>
      <LizardPic />
      <LizardHeading />
      <LizardDes />
      <Button1 />
    </div>
  );
}

export default Card;
