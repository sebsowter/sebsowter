import * as PIXI from 'pixi.js'

export class SprioGraph {
  constructor (radius) {
    const lineWidth = 2;
    const lineColor = 0xcccccc;
    const patternWidth = 20 + Math.floor(Math.random() * 60);
    const radius1 = radius - patternWidth - (lineWidth / 2);
    const radius2 = patternWidth;
    const inc = Math.PI / 512;
    const isHypotrochoid = Math.random() < 0.5;
    const ratioRandom = 4 * (1 + Math.floor(Math.random() * 3));
    const ratio = ratioRandom + (isHypotrochoid ? 1 : -1);
    const graphics = new PIXI.Graphics();

    graphics.lineStyle(lineWidth, lineColor);
    graphics.moveTo(radius1 + (isHypotrochoid ? radius2 : -radius2), 0);
    
    for (let theta = inc; theta < Math.PI * 2; theta += inc) {
      const x1 = radius1 * Math.cos(theta);
      const x2 = radius2 * Math.cos(theta * ratio);
      const x = x1 + (isHypotrochoid ? x2 : -x2);
      const y1 = radius1 * Math.sin(theta);
      const y2 = radius2 * Math.sin(theta * ratio);
      const y = y1 + y2;

      graphics.lineTo(x, y);
    }

    return graphics;
  }
}

export class ConcentricCircles {
  constructor (radius) {
    const lineWidthList = [5, 10, 25, 50, 100];
    const lineWidthIndex = Math.floor(Math.random() * lineWidthList.length);
    const lineWidth = lineWidthList[lineWidthIndex];
    const colorList = [0x111111, 0xffffff];
    const graphics = new PIXI.Graphics();

    for (let i = 0; i < radius / lineWidth; i++) {
      graphics.beginFill(colorList[i % 2]);
      graphics.drawCircle(0, 0, radius - (i * lineWidth));
      graphics.endFill();
    }

    return graphics;
  }
}

export class Circles {
  constructor (radius) {
    const circlesTotal = 4 * (1 + Math.floor(Math.random() * 3));
    const circlesRadius = 8 + Math.floor(Math.random() * 32);
    const graphics = new PIXI.Graphics();
    const segment = Math.PI * 2 / circlesTotal;

    for (let i = 0; i < circlesTotal; i++) {
      graphics.beginFill(0x111111);
      graphics.drawCircle((radius - circlesRadius) * Math.cos(i * segment), (radius - circlesRadius) * Math.sin(i * segment), circlesRadius);
    }

    graphics.endFill();

    return graphics;
  }
}

export default class {
  constructor (element) {
    const width = 200;
    const app = new PIXI.Application({ 
      width,
      height: width,
      antialias: true,
      transparent: true,
      resolution: 1
    });

    this.radius = width / 2;

    this.container = new PIXI.Container();
    this.container.x = this.radius;
    this.container.y = this.radius;

    element.appendChild(app.view);
    element.addEventListener('click', () => {
      this.createArt();
    });

    app.stage.addChild(this.container);

    this.createArt();
  }
  
  startInterval() {
    clearInterval(this.interval);

    this.interval = setInterval(() => this.createArt(), 5000);
  }
  
  createArt() {
    this.startInterval();

    if (this.art) {
      this.container.removeChild(this.art);
      this.art.destroy();
    }
    
    this.art = this.getArt(this.radius);

    this.container.addChild(this.art);
  }
  
  getArt(radius) {
    const choice = Math.floor(Math.random() * 4);
    
    switch (choice) {
      case 3:
        return new ConcentricCircles(radius);
      case 2:
        return new Circles(radius);
      default:
        return new SprioGraph(radius);
    }
  }
}
