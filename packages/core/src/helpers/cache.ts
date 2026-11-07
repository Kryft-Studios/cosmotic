//cache because yes
export function doCaching(
  cacheBool: { bool: boolean },
  theCache: { val: any },
  fn: () => any,
) {
  cacheBool.bool = true;
  return (theCache.val = fn());
}
export default function cache<A extends any>(fn: () => A) {
  const uh: { val: A | undefined } = { val: undefined };
  const lwkCached = { bool: false };
  return {
    [Symbol.name]: "Lazy Cached Object",
    valueOf: () => (lwkCached.bool ? uh.val : doCaching(lwkCached, uh, fn)),
  };
}
