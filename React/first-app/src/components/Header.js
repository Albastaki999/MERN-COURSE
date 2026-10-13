const Header = ({ color1 = "red", color2 }) => {
  // Empty Fragment
  // return (
  //   <>
  //     <div>Hello</div>
  //     <div>Hi</div>
  //   </>
  // );

  return (
    <div>
      This is a header with primary color {color1} and secondary color {color2}
    </div>
  );
};

export default Header;
