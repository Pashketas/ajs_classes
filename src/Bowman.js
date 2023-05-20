import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', attack = 25, defence = 25, health = 100, level = 1) {
    super(name, type, attack, defence, health, level);
  }
}
