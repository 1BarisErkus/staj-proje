import { FC, useState } from "react";
import Section from "../Section";
import {
  FaqContainer,
  AccordionItem,
  AccordionButton,
  AccordionContent,
  Answer,
} from "@/styles/Category/Faqs";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Siparişlerim ne zaman kargoya verilir?",
    answer: "Siparişleriniz ortalama 2 iş günü içerisinde kargoya verilir.",
  },
  {
    id: 2,
    question: "Siparişimi nasıl iade edebilirim?",
    answer:
      "Siparişlerinizi iade etmek için müşteri hizmetleri ile iletişime geçebilirsiniz.",
  },
  {
    id: 3,
    question: "Kredi kartı bilgilerim güvenli mi?",
    answer:
      "Kredi kartı bilgileriniz 256 bit SSL sertifikası ile korunmaktadır.",
  },
  {
    id: 4,
    question: "Ürünlerin garantisi var mı?",
    answer: "Tüm ürünlerimiz orijinal olup garantilidir.",
  },
];

const Faqs: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <Section title="Sıkça Sorulan Sorular">
      <FaqContainer>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id}>
            <AccordionButton onClick={() => toggleFaq(faq.id)}>
              {faq.question}
            </AccordionButton>
            <AccordionContent $isopen={openFaq === faq.id}>
              <Answer>{faq.answer}</Answer>
            </AccordionContent>
          </AccordionItem>
        ))}
      </FaqContainer>
    </Section>
  );
};

export default Faqs;
