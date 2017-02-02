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
var foo = document.getElementById('foo');

// as second parameter you can pass the pseudo element as string - 'before' or 'after'
var fooPseudoContent = pseudoContent(foo);

console.log(fooPseudoContent.get()); // mobile
console.log(fooPseudoContent.is('mobile')); // true
```
