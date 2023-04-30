import React, { Fragment } from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Fragment>
      <Image src="/fullLogo.png" alt="Corridoor Logo" width={600} height={200} />
    </Fragment>
  );
};

export default Logo;
