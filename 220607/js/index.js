const root = document.getElementById("root");
root.innerHTML =
`
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
  </ul>
`
// 함수만 만들면 compoment되는 것



// 리턴을 div로 넣을 수 도 있음

// const ul = document.createElement("ul");
// root.appendChild(ul);

// let liElement = [];

// for(let i=0;i<10;i++){
//   liElement.push( `<li>${i}</li>`)
// }
// console.log(liElement.join(""))
// ul.innerHTML = liElement.join(""); // 구분자 , 를 없애는 join


/*
createElement : -> 부모자식 관계가 너무 복잡해
엉뚱한데 붙는데 어떻게 안되니?
innerHTML에 문자열로 tag를 작성함

한줄로 쭉 잡혀도 상관없는 특성을 기가 막히게 활용


.textContent : html을 해석하지 않은
.innerHTML : html을 해석함

문자열을 잘 다루면 붙이기만 하면됨
문자열 === 배열
자바스크립트로 "복잡도"를 낯출수 있게 된다
--> createElement로 애좀 먹어봤어야 알 수 있음
--> 배열 메서드 다시 한번 외울것
술어 :  DOM API에 의전하니 코드가 어려워진다 -> 최대한 안쓰려고하는 기조
*/