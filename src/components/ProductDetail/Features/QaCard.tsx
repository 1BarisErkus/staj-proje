import {
  Answer,
  AnswerContainer,
  AnswerHeader,
  CardContainer,
  Question,
  QuestionText,
} from "@/styles/ProductDetail/Features/Qa";

interface QuestionAnswerCardProps {
  questionDate: string;
  questionText: string;
  answerDate: string;
  storeName: string;
  answerText: string;
}

const QuestionAnswerCard: React.FC<QuestionAnswerCardProps> = ({
  questionDate,
  questionText,
  answerDate,
  storeName,
  answerText,
}) => {
  const displayQuestionDate = new Date(questionDate).toLocaleDateString(
    "tr-TR"
  );
  const displayAnswerDate = new Date(answerDate).toLocaleDateString("tr-TR");

  return (
    <CardContainer>
      <Question>
        <QuestionText>
          <span>Soru</span> <span>{displayQuestionDate}</span>
        </QuestionText>
        <div>{questionText}</div>
      </Question>
      <AnswerContainer>
        {answerText !== "" ? (
          <>
            <AnswerHeader>
              <span>{storeName}</span> yanıtladı {displayAnswerDate}
            </AnswerHeader>
            <Answer>{answerText}</Answer>
          </>
        ) : (
          <Answer>Cevap Bekleniyor...</Answer>
        )}
      </AnswerContainer>
    </CardContainer>
  );
};

export default QuestionAnswerCard;
