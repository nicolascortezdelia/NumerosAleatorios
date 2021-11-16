function getRandomArbitrary(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
  }

  for (let i = 1; i <= 10; ++i){
      console.log(getRandomArbitrary(0,999));
  }