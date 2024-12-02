const buttonSpace = {
  display: "felx",
};
const buttonStyle = {
  padding: "1rem",
  margin: "1rem",
  pointer: "cursor",
};

function Button1() {
  return (
    <div style={buttonSpace}>
      <button style={buttonStyle}>SHARE</button>
      <button style={buttonStyle}>LEARN MORE</button>
    </div>
  );
}

export default Button1;
