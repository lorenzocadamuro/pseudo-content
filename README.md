# Pseudo-content
Read the content of a pseudo-element.

## Install

```sh
bower install pseudo-content
```

## Use

```css
#foo:before {
  content: 'bar';
}
```

```javascript
var foo = document.getElementById('foo'),
    fooPseudoContent = pseudoContent(foo, 'before');

console.log(fooPseudoContent.get()); // bar
console.log(fooPseudoContent.is('bar')); // true
```