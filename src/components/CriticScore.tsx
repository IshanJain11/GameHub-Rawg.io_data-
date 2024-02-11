import { Badge } from "@chakra-ui/react";

export interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return <Badge colorScheme={score > 90 ? "green" : "yellow"}>{score}</Badge>;
};

export default CriticScore;
