export function deepClone(
  object: Record<any, any>,
  mapAlreadySearched = new Map(),
) {
  if (mapAlreadySearched.has(object))
    throw new Error("deepClone: Recursive reference!");
  const l: Record<any, any> = {};
  mapAlreadySearched.set(object, true);

  for (const a of Object.keys(object)) {
    if (typeof l[a] !== "object")
      l[a] = deepClone(object[a], mapAlreadySearched);
    else l[a] = object[a];
  }
  return l;
}
