export const ThickLine = (props) => {
  return (
    <div
      className={`${
        props.color ? props.color : 'bg-black'
      } w-full mt-12 mb-5 h-1`}
    >
      {/* LINE */}
    </div>
  );
};

export const ThinLine = (props) => {
  return (
    <div
      className={`${
        props.color ? props.color : 'bg-black'
      } w-full mb-6 h-[2px]`}
    >
      {/* LINE */}
    </div>
  );
};
