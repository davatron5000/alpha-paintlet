registerPaint('alpha', class {
  static get inputProperties() {
    return ['--bg-alpha', '--bg-color']
  }

  paint(ctx, size, props) {
    ctx.globalAlpha = props.get('--bg-alpha');
    ctx.fillStyle = props.get('--bg-color');
    ctx.fillRect(0, 0, size.width, size.height);
  }
})
