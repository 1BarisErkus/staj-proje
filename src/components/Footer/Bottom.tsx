import Image from "next/image";
import Link from "next/link";
import { BottomLinks, BottomWrapper, Copyright } from "@/styles/Footer/Bottom";

const Bottom = () => {
  return (
    <BottomWrapper>
      <BottomLinks>
        <Link href="#">Gizlilik ve Güvenlik</Link>
        <Link href="#">Tarife Karşılaştırma</Link>
      </BottomLinks>
      <Copyright>
        <Image
          src="/images/guven-damgasi-icon.webp"
          alt="etbis"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/images/etbis-qr-code.webp"
          alt="etbis"
          width={35}
          height={40}
          priority
        />{" "}
        &copy; 2024 Turkcell
      </Copyright>
    </BottomWrapper>
  );
};

export default Bottom;
