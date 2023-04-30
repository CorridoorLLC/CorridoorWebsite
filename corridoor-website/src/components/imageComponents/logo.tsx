import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Fragment>
      <Link href="/">
        <Image
          src="/fullLogo.png"
          alt="Corridoor Logo"
          width={700}
          height={200}
        />
      </Link>{" "}
    </Fragment>
  );
};

export default Logo;
