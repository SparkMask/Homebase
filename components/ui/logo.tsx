import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/NewSparkLogo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="SparkMask">
      <Image src={logo} alt="SparkMask Logo" width={32} height={34} />
      
    </Link>
  );
}
