import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ModalBottomPrice,
  ModalBottomTitle,
  ModalBottomWrapper,
  ModalContent,
  ModalHeader,
  Overlay,
  PopularSearches,
  SearchItem,
  SearchModalWrapper,
  SpecialCategories,
} from "@/styles/Header/Navbar/SearchModal";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const specialCategories = [
  "6 Taksit + 0 Faiz",
  "Hediye Çeklerim",
  "Faizsiz 25.000 TL",
  "Faturaya Ek Telefonlar",
];

const popularSearches = [
  "Tıraş Makineleri",
  "Bluetooth Hoparlörler",
  "Çantalar",
  "Laptop Çantaları",
  "Powerbank ve Taşınabilir Şarj Cihazları",
  "Termos",
  "Spor - Dizi - Film Yayın Paketleri",
];

const SearchModal = ({
  handleClickOutside,
  modalRef,
}: {
  handleClickOutside: React.MouseEventHandler<HTMLDivElement>;
  modalRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <>
      <Overlay onClick={handleClickOutside} />
      <SearchModalWrapper ref={modalRef}>
        <ModalContent>
          <ModalHeader>Sana Özel Kategoriler</ModalHeader>
          <SpecialCategories>
            {specialCategories.map((category, index) => (
              <SearchItem key={index}>{category}</SearchItem>
            ))}
          </SpecialCategories>
          <ModalHeader>Popüler Aramalar</ModalHeader>
          <PopularSearches>
            <Swiper
              slidesPerView={2}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[Navigation]}
            >
              {popularSearches.map((popular, index) => (
                <SwiperSlide key={index}>
                  <SearchItem>{popular}</SearchItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </PopularSearches>
          <ModalBottomWrapper>
            <Image
              src="/images/tiras-gecici.webp"
              alt="Tıraş Makinesi"
              width={70}
              height={50}
            />
            <ModalBottomTitle>
              Goldmaster Boss GM-8192 10 in 1 Erkek Bakım Seti
            </ModalBottomTitle>
            <ModalBottomPrice>849 TL</ModalBottomPrice>
          </ModalBottomWrapper>
          <Link href="#">Tüm Tıraş Makinelerini Göster</Link>
        </ModalContent>
      </SearchModalWrapper>
    </>
  );
};

export default SearchModal;
