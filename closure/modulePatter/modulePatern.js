//  Quando criamos um objeto, o javascript interpreta o "{" como um inicio de um block

let speed = 0;

export let car = {
  acelerate: () => speed + 10,
  slowDown: () => speed - 10,
  showSpeed: () => console.log(speed),
};
