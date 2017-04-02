// @flow
function foo(x: ?string): string {
  if (x) {
    return x;
  }
  return 'default string';
}

console.log(foo('abobora'));
