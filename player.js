class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - 50;
    this.velocityY = 0;
    this.gravity = 0.5;
  }

  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -10;
    }
  }

  move() {
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 16,
      this.size - 16,

      currentObs.x,
      currentObs.y,
      currentObs.size - 16,
      currentObs.size - 16
    );

    return isColliding;
  }
}
