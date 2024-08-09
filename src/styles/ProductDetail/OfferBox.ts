import styled from "styled-components";

export const BoxContainer = styled.div<{ selected?: boolean }>`
  position: relative;
  border: ${({ selected }) =>
    selected ? "1px solid #1d4ed8" : "1px solid #e5e7eb"};
  border-radius: 8px;
  padding: 16px 30px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ selected }) => (selected ? "#f3f4f6" : "#fff")};
  box-shadow: ${({ selected }) =>
    selected ? "0 0 10px rgba(0,0,0,0.1)" : "none"};
  cursor: pointer;
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0.5rem;
`;

export const MainText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1d4ed8;
  margin-left: 12px;
`;

export const SubText = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

interface PriceProps {
  type?: string;
}

export const Price = styled.span<PriceProps>`
  font-size: ${({ type }) => (type === "old" ? "14px" : "20px")};
  font-weight: bold;
  color: ${({ type }) => (type === "old" ? "#6b7280" : "#1d4ed8")};

  ${({ type }) => type === "old" && "text-decoration: line-through;"}
`;

export const Tag = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  color: #fff;
  padding: 2px 8px;
  border-end-end-radius: 4px;
  border-start-start-radius: 4px;
  font-size: 12px;
  margin-right: 8px;
  max-width: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PriceWrapper = styled.div`
  position: relative;
  margin: 0.5rem 1.5rem 0.5rem 0;
`;

export const PriceDetail = styled.span<PriceProps>`
  position: absolute;
  font-size: 10px;
  font-weight: 600;
  color: ${({ type }) => (type === "old" ? "#6b7280" : "#1d4ed8")};
  width: 100%;

  span {
    color: #16bffc;
  }
`;
