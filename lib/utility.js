export function match(regex, xs) {
  let _match = xs => xs.match(regex);
  return typeof xs === 'undefined' ? _match : _match(xs);
}

export function add(a, ...b) {
  let _add = (...b) => b.reduce((m, n) => m + n, a);
  return b.length === 0 ? _add : _add(...b);
}
