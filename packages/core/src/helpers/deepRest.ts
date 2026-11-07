export function deepRest(
  from: Record<string, any>,
  with_: Record<string, any>
): Record<string, any> {
  const result = { ...from };

  for (const a of Object.keys(with_)) {
    const value = with_[a];

    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      result[a] = deepRest(
        from[a] && typeof from[a] === "object" && !Array.isArray(from[a])
          ? from[a]
          : {},
        value
      );
    } else {
      result[a] = value;
    }
  }

  return result;
}