let time = 100;
const Arr = ['| ', '/ ', '- ', '\\ ', '| ', '/ ', '- ', '\\ ', '| ', '\n'];

const spinner = () => {
  for (const elem of Arr) {
    setTimeout(() => {
      process.stdout.write(`\r${elem}`);
    }, time);
    time += 200;
  }
};

spinner();
