import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  TextArea,
  SubmitButton,
} from "@/styles/ProductDetail/Features/Modal";
import { addComment, addQa } from "@/server/posts";
import { notify } from "@/lib/notify";

interface ModalProps {
  isOpen: boolean;
  productId: string;
  type?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, productId, type, onClose }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (text.length < 10) {
      notify("İçerik en az 10 karakter olmalı", "error");
      return;
    }

    if (type === "reviews") {
      if (rating === 0) {
        notify("Lütfen yıldız seçiniz", "error");
        return;
      }
      await addComment(
        { userName: "Geçici User", comment: text, rating },
        productId
      );
      notify("Yorumunuz başarıyla eklendi", "success");
    } else {
      await addQa(text, productId);
      notify("Sorunuz başarıyla iletildi", "success");
    }

    setText("");
    setRating(0);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            {type === "reviews" ? "Yorum Yaz" : "Soru Sor"}
          </ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          {type === "reviews" && (
            <Rating
              value={rating}
              onChange={setRating}
              style={{ maxWidth: "100px" }}
            />
          )}
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="İçeriği buraya yazın"
          />
          <SubmitButton onClick={handleSubmit}>Gönder</SubmitButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
