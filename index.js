const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bgContainer">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button buttonText="Like" className="likeBtn" />
      <Button buttonText="Comment" className="commentBtn" />
      <Button buttonText="Share" className="shareBtn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
