import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 10, defence = 40, health = 100, level = 1) {
    super(name, type, attack, defence, health, level);
  }
}
