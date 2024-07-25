import { Logo, Nav, NavLink, TopWrapper } from "@/styles/Header/Top";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import Image from "next/image";
import { useRouter } from "next/router";

const Top = () => {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Col>
          <TopWrapper>
            <Logo href="https://www.turkcell.com.tr/">
              <Image
                src="/images/turkcell.png"
                alt="logo"
                width={35}
                height={20}
                priority
              />
              <span>turkcell.com.tr</span>
            </Logo>
            <Nav>
              <NavLink href="#">Favorilerim</NavLink>
              <NavLink href="#">Kampanyalar</NavLink>
              {router.pathname === "/" && (
                <>
                  <NavLink href="#">Yardım</NavLink>
                  <NavLink href="#">Neden Pasaj?</NavLink>
                  <NavLink href="#">Pasaj Blog</NavLink>
                  <NavLink href="#">Sipariş Sorgulama</NavLink>
                </>
              )}
            </Nav>
          </TopWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Top;
