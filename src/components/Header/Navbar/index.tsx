import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { getBasket } from "@/server/basket";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Button, CartBadge } from "@/styles/Header/Navbar";
import Search from "./Search";
import AuthModal from "./AuthModal";
import { BsCart4 } from "react-icons/bs";
import { IoPersonCircleOutline, IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session.data?.user as { uid: string })?.uid),
    enabled: !!session.data,
  });

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
          <Button $primary $withicon onClick={() => router.push("/basket")}>
            <span>
              <BsCart4 size={24} />
            </span>
            Sepet
            <CartBadge>{data?.length > 0 ? data?.length : 0}</CartBadge>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
