import * as PIXI from 'pixi.js'

export class Sprio {
  constructor (container, radius) {
    const lineWidth = 2;
    const lineColor = 0xcccccc;
    const span = 20 + (Math.floor(Math.random() * 30) * 2);
    const radius1 = radius - span - (lineWidth / 2);
    const radius2 = span;
    const ratio = ((4 + Math.floor(Math.random() * 8)) * 2) - 1;
    //const inc = Math.PI / Math.pow(2, 6 + Math.floor(Math.random() * 4));
    const inc = Math.PI / 512;
    const isHypotrochoid = Math.random() < 0.5;
    const pointStart = new PIXI.Point(isHypotrochoid ? radius1 + radius2 : radius1 - radius2, 0);
    const point = new PIXI.Point(pointStart.x, pointStart.y);
    const graphics = new PIXI.Graphics();

    graphics.lineStyle(lineWidth, lineColor);
    graphics.moveTo(point.x, point.y);
    
    for (let theta = inc; theta < Math.PI * 2; theta += inc) {
      const x1 = radius1 * Math.cos(theta);
      const x2 = radius2 * Math.cos(theta * ratio);
      const x = isHypotrochoid ? x1 + x2 : x1 - x2;
      const y = radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);

      point.set(x, y);
      graphics.lineTo(point.x, point.y);
    }

    graphics.lineTo(pointStart.x, pointStart.y);

    container.addChild(graphics);

    return graphics;
  }
}

export class Circles {
  constructor (container, radius) {
    const values = [5, 10, 20, 25, 50, 100];
    const inc = values[Math.floor(Math.random() * values.length)];
    const graphics = new PIXI.Graphics();

    for (let i = 0; i < radius / inc; i++) {
      graphics.beginFill(i % 2 == 0 ? 0x111111 : 0xffffff);
      graphics.drawCircle(i * 0, i * 0, radius - (i * inc));
      graphics.endFill();
    }

    container.addChild(graphics);

    return graphics;
  }
}

export default class {
  constructor (element) {
    const dimension = 200;
    const dimensionHalf = dimension / 2;
    const container = new PIXI.Container();
    const app = new PIXI.Application({ 
      width: dimension,
      height: dimension,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0xffffff
    });

    container.x = dimensionHalf;
    container.y = dimensionHalf;

    element.appendChild(app.view);
    element.addEventListener('click', () => {
      this.createArt(container, dimensionHalf);
    });

    app.stage.addChild(container);

    this.createArt(container, dimensionHalf);
  }
  
  createArt(container, dimensionHalf) {
    const choice = Math.floor(Math.random() * 4);

    if (this.art) {
      this.art.destroy();
    }
    
    switch (choice) {
      case 3:
        this.art = new Circles(container, dimensionHalf);
        break;
      default:
        this.art = new Sprio(container, dimensionHalf);
        break;
    }
  }
}
