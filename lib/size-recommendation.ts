import {
  Product,
  SizeChartRule,
  SizeRecommendationInput,
  SizeRecommendationResult
} from "@/lib/types";

function getPenalty(rule: SizeChartRule, height: number, weight: number) {
  const heightPenalty =
    height < rule.heightMin
      ? rule.heightMin - height
      : height > rule.heightMax
        ? height - rule.heightMax
        : 0;

  const weightPenalty =
    weight < rule.weightMin
      ? rule.weightMin - weight
      : weight > rule.weightMax
        ? weight - rule.weightMax
        : 0;

  return heightPenalty * 0.6 + weightPenalty * 1.4;
}

function chooseMatch(matches: SizeChartRule[], fitPreference: SizeRecommendationInput["fitPreference"]) {
  if (fitPreference === "slim") return matches[0];
  if (fitPreference === "oversized") return matches[matches.length - 1];
  return matches[Math.floor(matches.length / 2)];
}

export function getSizeRecommendation(
  product: Product,
  input: SizeRecommendationInput
): SizeRecommendationResult {
  if (product.freeSize || product.sizes.includes("Free Size")) {
    return {
      recommendedSize: "Free Size",
      message: "This item is marked as Free Size.",
      fitNote:
        "Check the garment notes for drape and styling. This piece is intended to suit a flexible range of body shapes.",
      confidence: "high",
      matchedExactly: true
    };
  }

  const sortedChart = [...product.sizeChart].sort((a, b) => {
    return product.sizes.indexOf(a.label) - product.sizes.indexOf(b.label);
  });

  const exactMatches = sortedChart.filter(
    (rule) =>
      input.height >= rule.heightMin &&
      input.height <= rule.heightMax &&
      input.weight >= rule.weightMin &&
      input.weight <= rule.weightMax
  );

  if (exactMatches.length > 0) {
    const chosen = chooseMatch(exactMatches, input.fitPreference);
    const midpointHeight = (chosen.heightMin + chosen.heightMax) / 2;
    const midpointWeight = (chosen.weightMin + chosen.weightMax) / 2;
    const closeness = Math.abs(input.height - midpointHeight) + Math.abs(input.weight - midpointWeight);

    return {
      recommendedSize: chosen.label,
      message: `Recommended size: ${chosen.label}`,
      fitNote:
        input.fitPreference === "slim"
          ? "Chosen toward the neater end of your matching range."
          : input.fitPreference === "oversized"
            ? "Chosen toward the roomier end of your matching range."
            : "Chosen for the most balanced regular fit within your matching range.",
      confidence: closeness < 10 ? "high" : "medium",
      matchedExactly: true
    };
  }

  const nearest = sortedChart
    .map((rule) => ({ rule, penalty: getPenalty(rule, input.height, input.weight) }))
    .sort((a, b) => a.penalty - b.penalty)[0];

  const smallest = sortedChart[0];
  const largest = sortedChart[sortedChart.length - 1];

  const belowAll = input.height < smallest.heightMin && input.weight < smallest.weightMin;
  const aboveAll = input.height > largest.heightMax && input.weight > largest.weightMax;

  if (belowAll) {
    return {
      recommendedSize: smallest.label,
      message: `Nearest possible size: ${smallest.label}`,
      fitNote: "You are below the standard chart range, so this item may fit loosely.",
      confidence: "low",
      matchedExactly: false
    };
  }

  if (aboveAll) {
    return {
      recommendedSize: largest.label,
      message: `Nearest possible size: ${largest.label}`,
      fitNote: "You are above the standard chart range, so this item may fit tightly.",
      confidence: "low",
      matchedExactly: false
    };
  }

  return {
    recommendedSize: nearest.rule.label,
    message: `Nearest possible size: ${nearest.rule.label}`,
    fitNote:
      "Your measurements sit between stored size bands. This recommendation is the closest available match, so check the fit notes before ordering.",
    confidence: "medium",
    matchedExactly: false
  };
}
