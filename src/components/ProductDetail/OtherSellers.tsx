import React from "react";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardRating,
  CardTitle,
  Currency,
  Price,
  Shipping,
  StyledCol,
} from "@/styles/ProductDetail/OtherSellers";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuShoppingCart } from "react-icons/lu";

interface OtherSellersProps {
  data: {
    seller: string;
    price: number;
    rating: number;
  }[];
}

const OtherSellers: React.FC<OtherSellersProps> = ({ data }) => {
  return (
    <>
      <Container>
        <Row>
          <StyledCol>
            <h2>Diğer Satıcılar</h2>
            <CustomSwiper
              slidesPerView={1}
              breakpoints={{
                1000: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              navigation={true}
            >
              {data.map((item, index) => (
                <CustomSwiperSlide key={index}>
                  <Card>
                    <CardHeader>
                      <CardRating>{item.rating}</CardRating>
                      <CardTitle>{item.seller}</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Col size={6}>
                        <Price>
                          {item.price} <Currency>TL</Currency>
                        </Price>
                      </Col>
                      <Col size={6}>
                        <Button>
                          Ekle <LuShoppingCart />
                        </Button>
                        <Shipping>1 iş gününde kargoda.</Shipping>
                      </Col>
                    </CardBody>
                  </Card>
                </CustomSwiperSlide>
              ))}
            </CustomSwiper>
          </StyledCol>
        </Row>
      </Container>
    </>
  );
};

export default OtherSellers;
