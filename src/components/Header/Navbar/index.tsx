import Image from "next/image";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Button, CartBadge } from "@/styles/Header/Navbar";
import { IoPersonCircleOutline, IoChevronDownSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import Search from "./Search";
import { useState } from "react";
import AuthModal from "./AuthModal";
import Link from "next/link";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Row>
        <Col size={2}>
          <Link href="/">
            <Image
              src="/images/pasaj-logo-new.webp"
              alt="Pasaj Logo"
              width={116}
              height={40}
              priority
            />
          </Link>
        </Col>
        <Col size={6}>
          <Search />
        </Col>
        <Col size={2}>
          <Button $withicon $border onClick={openModal}>
            <span>
              <IoPersonCircleOutline size={24} />
            </span>
            Giriş Yap
            <span>
              <IoChevronDownSharp size={24} />
            </span>
          </Button>
          <AuthModal
            isOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={closeModal}
          />
        </Col>
        <Col size={2}>
          <Button $primary $withicon>
            <span>
              <BsCart4 size={24} />
            </span>
            Sepet
            <CartBadge>0</CartBadge>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
