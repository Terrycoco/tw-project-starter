const FlexLayout = (props) => {
  return <div className="flex flex-col tablet:flex-row">{props.children}</div>;
};

export default FlexLayout;
