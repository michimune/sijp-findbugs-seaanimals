import { SeaAnimal } from './sea-animal';

describe('SeaAnimal', () => {
  it('should create an instance', () => {
    expect(new SeaAnimal()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let nimo = new SeaAnimal({
      order: 1,
      name: 'Nimo',
      mammal: false
    });
    expect(nimo.name).toEqual('Nimo');
    expect(nimo.mammal).toEqual(false);
  })
});
