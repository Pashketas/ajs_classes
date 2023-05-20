export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    this.name = name;
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Undead' || type === 'Zombie' || type === 'Daemon') {
      this.type = type;
    } else {
      throw new Error('Выберите один из шести классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;
  }

  set health(value) {
    if (value < 0) {
      this.$health = 0;
    } else if (value > 100) {
      this.$health = 100;
    } else {
      this.$health = value;
    }
  }

  get health() {
    return this.$health;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Персонаж повержен, уровень не может быть повышен');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
