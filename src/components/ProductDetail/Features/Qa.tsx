import { Button, HeadWrapper, Input } from "@/styles/ProductDetail/Features/Qa";
import QuestionAnswerCard from "./QaCard";
import { useState } from "react";
import Modal from "./Modal";

interface QaProps {
  qas: {
    questionDate: string;
    questionText: string;
    answerDate: string;
    storeName: string;
    answerText: string;
  }[];
  productId: string;
}

const Qa: React.FC<QaProps> = ({ qas, productId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <HeadWrapper>
        <Input type="dropdown" placeholder="Satıcı" />
        <Button onClick={openModal}>Satıcıya Sor</Button>
      </HeadWrapper>
      {qas.map((qa, index) => (
        <QuestionAnswerCard
          key={index}
          questionDate={qa.questionDate}
          questionText={qa.questionText}
          answerDate={qa.answerDate}
          storeName={qa.storeName}
          answerText={qa.answerText}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={productId}
        type="qa"
      />
    </>
  );
};

export default Qa;
