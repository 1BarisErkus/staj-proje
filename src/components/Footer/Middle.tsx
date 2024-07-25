import {
  LanguageSelector,
  MiddleRight,
  MiddleSection,
  SocialMedia,
} from "@/styles/Footer";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Middle = () => {
  return (
    <MiddleSection>
      <LanguageSelector>
        <Link href="#">Türkçe</Link> | <Link href="#">English</Link> |{" "}
        <Link href="#">عربى</Link> | <Link href="#">русский</Link>
      </LanguageSelector>
      <MiddleRight>
        <span>Bizi Takip Edin</span>
        <SocialMedia>
          <Link href="#">
            <BsTwitterX />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
          <Link href="#">
            <FaLinkedin />
          </Link>
        </SocialMedia>
      </MiddleRight>
    </MiddleSection>
  );
};

export default Middle;
