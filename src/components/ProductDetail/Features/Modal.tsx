import { FC, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser } from "@/server/user";
import { addComment, addQa } from "@/server/posts";
import { User } from "@/common/types";
import { notify } from "@/lib/notify";
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

type ModalProps = {
  userId?: string;
  isOpen: boolean;
  productId: string;
  type?: string;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({
  userId,
  isOpen,
  productId,
  type,
  onClose,
}) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [user, setUser] = useState<User>();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (userId) {
      getUser(userId).then((data) => setUser(data));
    }
  }, [userId]);

  const { mutate: commentMutate, isPending: commentPending } = useMutation({
    mutationFn: (newComment: {
      userName: string;
      comment: string;
      rating: number;
    }) => addComment(newComment, productId),

    onSuccess: () => {
      notify("Yorumunuz başarıyla eklendi", "success");
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      onClose();
    },

    onError: () => {
      notify("Yorum eklenirken bir hata oluştu", "error");
    },
  });

  const { mutate: qaMutate, isPending: qaPending } = useMutation({
    mutationFn: (question: string) => addQa(question, productId),

    onSuccess: () => {
      notify("Sorunuz başarıyla iletildi", "success");
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      onClose();
    },

    onError: () => {
      notify("Soru iletilirken bir hata oluştu", "error");
    },
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (text.length < 10) {
      notify("İçerik en az 10 karakter olmalı", "error");
      return;
    }

    if (type === "reviews") {
      if (rating === 0) {
        notify("Lütfen yıldız seçiniz", "error");
        return;
      }
      commentMutate({
        userName: user ? user.name : "John Doe",
        comment: text,
        rating,
      });
    } else {
      qaMutate(text);
    }

    setText("");
    setRating(0);
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
          <SubmitButton
            onClick={handleSubmit}
            disabled={commentPending || qaPending}
          >
            Gönder
          </SubmitButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
