// 가위바위보
// ga(가위) ba(바위) bo(보자기)
// 가위는 주먹한테 지고 보자기는 이긴다.
// 바위는 보자기한테 지고 가위는 이긴다.
// 보자기는 가위한테 지고 바위한테 이긴다.

function gamBamBo(me: string, you: string) {
  const rules = ['ga', 'ba', 'bo'];
  // let ga, ba, bo;
  // ga = 'ga';
  // ba = 'ba';
  // bo = 'bo';
  // 가위가 바위한테 붙으면 false, 보자기한테 붙으면 true 식으로 조건을 짜보자.
  // me가 가위고 you가 바위라면 식으로..
  // 가위, 바위, 보 3개의 경우만 들어오게끔 만들자.

  // me가 'ga', 'ba', 'bo'가 아닐시 에러
  if (me === 'ga'){
        
  }else if(me === 'ba'){

  }else if(me ==='bo'){

  }else {
      console.error('똑바로 혀');
      return
  }
  // you가 'ga', 'ba', 'bo'가 아닐시 에러
  if (you === 'ga'){
      
  }else if(you === 'ba'){

  }else if(you ==='bo'){

  }else {
      console.error('똑바로 혀');
      return
  }


  // 첫 번째(me, 나) 매개변수가 가위인 경우
  if(me === rules[0] && you === rules[1]) {
    return false;
  } else if(me === rules[0] && you === rules[2]) {
    return true;
  } else if(me === rules[0] && you === rules[0]) {
    console.error('다시');
  }
  // 첫 번째(me, 나) 매개변수가 바위인 경우
  if(me === rules[1] && you === rules[2]) {
    return false;
  } else if(me === rules[1] && you === rules[0]) {
    return true;
  } else if(me === rules[1] && you === rules[1]) {
    console.error('다시');
  }
  // 첫 번째(me, 나) 매개변수가 보자기인 경우
  if(me === rules[2] && you === rules[0]) {
    return false;
  } else if(me === rules[2] && you === rules[1]) {
    return true;
  } else if(me === rules[2] && you === rules[2]) {
    console.error('다시');
  }
};

console.log(gamBamBo('ga', 'ba'));

// 가위 바위 보 중 랜덤으로 고르는 함수를 만들어보자.
// 배열 안에 가위 바위 보가 들어있다고 가정.
// 랜덤으로 배열안에 요소들을 골라보자.
// function randomGamBamBoMachine(min: number, max: number) : number {
//   return Math.ceil(Math.random()*(max-min)-1); // 0, 1, 2
// }

// console.log(randomGamBamBoMachine(0, 3)); // 0, 1, 2
function randomGamBamBoMachine(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min; // 0, 1, 2
}

console.log(randomGamBamBoMachine(0, 2)); // 0, 1, 2


// 랜덤 함수를 이용하여 랜덤 감밤보를 해보자.
// 랜덤 함수를 이용하여 배열을 랜덤으로 참조하면 될 것같다.
// 
// function randomGamBamBo(me. you) {

// }