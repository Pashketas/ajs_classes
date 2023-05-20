import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('check creation of the Character', () => {
  const character = new Character('Челикс', 'Swordsman', 20, 25);
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Swordsman');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(20);
  expect(character.defence).toEqual(25);
});

test('throwing fail for unexpected name', () => {
  expect(() => new Character('Челикозаврес', 'Swordsman', 20, 25)).toThrow('Имя персонажа должно быть от 2 до 10 символов');
});

test('throwing fail for unexpected type', () => {
  expect(() => new Character('Челикс', 'Dinosaur', 20, 25)).toThrow('Выберите один из шести классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('character get levelUp', () => {
  const character = new Character('Челикс', 'Swordsman', 20, 20, 35, 3);
  character.levelUp();
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(4);
  expect(character.attack).toEqual(24);
  expect(character.defence).toEqual(24);
  character.health = -10;
  expect(character.health).toEqual(0);
  expect(() => character.levelUp()).toThrow('Персонаж повержен, уровень не может быть повышен');
});

test('character get damaged and heals', () => {
  const character = new Character('Челикс', 'Swordsman', 20, 20, 35, 3);
  character.damage(20);
  expect(character.health).toEqual(19);
  character.health = 150;
  expect(character.health).toEqual(100);
});

test('check creation of the Bowman', () => {
  const character = new Bowman('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Bowman');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(25);
  expect(character.defence).toEqual(25);
});

test('check creation of the Swordsman', () => {
  const character = new Swordsman('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Swordsman');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(40);
  expect(character.defence).toEqual(10);
});

test('check creation of the Magician', () => {
  const character = new Magician('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Magician');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(10);
  expect(character.defence).toEqual(40);
});

test('check creation of the Daemon', () => {
  const character = new Daemon('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Daemon');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(10);
  expect(character.defence).toEqual(40);
});

test('check creation of the Undead', () => {
  const character = new Undead('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Undead');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(25);
  expect(character.defence).toEqual(25);
});

test('check creation of the Zombie', () => {
  const character = new Zombie('Челикс');
  expect(character).toBeDefined();
  expect(character.name).toEqual('Челикс');
  expect(character.type).toEqual('Zombie');
  expect(character.health).toEqual(100);
  expect(character.level).toEqual(1);
  expect(character.attack).toEqual(40);
  expect(character.defence).toEqual(10);
});
