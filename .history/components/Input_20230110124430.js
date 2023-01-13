const Input = (props) => {
  return (
    <div class="mb-3 xl:w-96">
      <label
        for="exampleFormControlInput4"
        className="form-label inline-block mb-1 text-gray-700 text-xs"
      >
        Form control sm
      </label>
      <input
        type="text"
        className="
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput4"
        placeholder="Form control sm"
      />
    </div>
  );
};

export default Input;
