# Pseudo content
Read the content of a pseudo-element.

## Install

```sh
npm install pseudo-content
```

## Use

```css
@media (max-width: 414px) {
  #foo:before {
    content: 'mobile';
  }
}
```

```javascript
var foo = document.getElementById('foo'),
    fooPseudoContent = pseudoContent(foo, 'before');

console.log(fooPseudoContent.get()); // mobile
console.log(fooPseudoContent.is('mobile')); // true
```
