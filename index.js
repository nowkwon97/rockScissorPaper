// 가위바위보
// ga(가위) ba(바위) bo(보자기)
// 가위는 주먹한테 지고 보자기는 이긴다.
// 바위는 보자기한테 지고 가위는 이긴다.
// 보자기는 가위한테 지고 바위한테 이긴다.
function gamBamBo(me, you) {
    var ga, ba, bo;
    ga = 'ga';
    ba = 'ba';
    bo = 'bo';
    // 가위가 바위한테 붙으면 false, 보자기한테 붙으면 true 식으로 조건을 짜보자.
    // me가 가위고 you가 바위라면 식으로..
    // 가위, 바위, 보 3개의 경우만 들어오게끔 만들자.
    // me가 'ga', 'ba', 'bo'가 아닐시 에러
    if (me === 'ga') {
    }
    else if (me === 'ba') {
    }
    else if (me === 'bo') {
    }
    else {
        console.error('똑바로 혀');
        return;
    }
    // you가 'ga', 'ba', 'bo'가 아닐시 에러
    if (you === 'ga') {
    }
    else if (you === 'ba') {
    }
    else if (you === 'bo') {
    }
    else {
        console.error('똑바로 혀');
        return;
    }
    // 첫 번째(me, 나) 매개변수가 가위인 경우
    if (me === ga && you === ba) {
        return false;
    }
    else if (me === ga && you === bo) {
        return true;
    }
    else if (me === ga && you === ga) {
        console.error('다시');
    }
    // 첫 번째(me, 나) 매개변수가 바위인 경우
    if (me === ba && you === bo) {
        return false;
    }
    else if (me === ba && you === ga) {
        return true;
    }
    else if (me === ba && you === ba) {
        console.error('다시');
    }
    // 첫 번째(me, 나) 매개변수가 보자기인 경우
    if (me === bo && you === ga) {
        return false;
    }
    else if (me === bo && you === ba) {
        return true;
    }
    else if (me === bo && you === bo) {
        console.error('다시');
    }
}
;
console.log(gamBamBo('ga', 'asdba'));
// 가위 바위 보 중 랜덤으로 고르는 함수를 만들어보자.
// 배열 안에 가위 바위 보가 들어있다고 가정.
// 랜덤으로 배열안에 요소들을 골라보자.
function randomMachine() {
    var rules = ["ga", "ba", "bo"];
}
console.log(Math.random);
