import { TextSizeProps } from "@/types/TextSizeProps";
import Link from "next/link";

export default function Logo({ textSize = "xl" }: TextSizeProps) {
  return (
    <Link href="/" className={`text-${textSize} font-semibold`}>
      Ecom Store
    </Link>
  );
}
