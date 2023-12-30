import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}

function MetaCritic({ score }: Props) {
  return <Badge>{score}</Badge>;
}

export default MetaCritic;
