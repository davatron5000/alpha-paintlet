# alpha-paintlet

A CSS Paint worklet that takes a background color and an alpha color and makes creates an alpha background.

## Usage

Include the Paint worklet in your JS...

```js
CSS.paintWorklet.addModule('path/to/alpha.js')
```

Then in your CSS...

```css
#my-div {
  --bg-color: #FF0000; /* rbg/hsl/etc value */
  --bg-alpha: 0.23;
  background: paint(alpha)
}
```
