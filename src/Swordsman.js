import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman', attack = 40, defence = 10, health = 100, level = 1) {
    super(name, type, attack, defence, health, level);
  }
}
