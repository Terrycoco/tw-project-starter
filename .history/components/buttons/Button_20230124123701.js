const Button = ({ onClick, children, ...props }) => {
  const handleClick = (e) => {
    onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out`}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
