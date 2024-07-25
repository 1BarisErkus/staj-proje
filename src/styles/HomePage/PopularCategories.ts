import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word; /* Taşmayı engellemek için */
  overflow-wrap: break-word; /* Taşmayı engellemek için */
  max-width: 110px; /* Maksimum genişlik ayarlayarak kelimenin alt satıra kaymasını sağlamak için */
  text-align: center; /* Ortalamak için */
`;
