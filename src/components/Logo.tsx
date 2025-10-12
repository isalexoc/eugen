import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex h-full w-full items-center">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-1 sm:p-2">
        <Image
          src="/images/logo/lotuslogo.png"
          alt="Red Lotus International Logo"
          width={250}
          height={40}
          className="h-auto w-24 object-cover sm:w-32 md:w-36 lg:w-40 xl:w-44"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
