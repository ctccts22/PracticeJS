var score = 83;

if(score >= 90 && score <= 100) {
    console.log('A');
} else if(score >= 80 && score <= 89) {
    console.log('B');
} else if(score >= 70 && score <= 79) {
    console.log('C');
} else if(score >= 60 && score <= 69) {
    console.log('D');
} else if(score >= 0 && score <= 59) {
    console.log('E');
}

var score = 83;
var grade = '';
if(score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >=70) {
    grade = 'C';
} else if (score >=60) {
    grade = 'D';
}else {
    grade = 'F';
}

var score = 83;
var grade = '';
var result = '';
if(score <= 100 && score >= 0) {
    if(score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >=70) {
        grade = 'C';
    } else if (score >=60) {
        grade = 'D';
    }else {
        grade = 'F';
    }
    // console.log('해당과목의 학점은 '+ grade +' 입니다.');
    // console.log(`해당과목의 학점은 ${grade} 입니다.`);
    result = `해당과목의 학점은 ${grade} 입니다.`;
} else {
    // console.log('유효하지 않은 값입니다.');
    result = '유효하지 않은 값입니다.'
}
console.log(result);


let databaseScore = 60;
let jsScore = 70;

var result = '';

if (jsScore >= 61) {
    if (databaseScore >= 61) {
        result = '데이터베이스점수 61점 이상으로 pass 입니다';
    } else {
        result = '데이터베이스점수 61점 미만으로 fail 입니다.'
        }
    console.log(result);
    } if (jsScore >=61){
        result = `자바스크립트점수 61점 이상으로 pass 입니다.`;
    } else {
        result = '자바스크립트 61점 미만으로 fail 입니다.'
    }
    console.log(result);

let subject = 'javascript';
score = 56;
result = 'fail';
let print = '';

if(score <= 100 && score >= 0) {
    if(subject == 'javascript') {
        if (score >= 70) result = 'pass';
    }
        if (subject == 'database') {
            if (score >= 60) result = 'pass';
        }
        print = `교과: ${subject}, 점수: ${score}점,
         이수여부: ${result}`;
    } else {
        print = '점수를 100~0 까지 입력하세요';
    }
console.log(print);

var score = 83;
result= '';
switch (score) {
    case (score >= 90):
        result=`해당과목은 A입니다`;
        break;
    case (score >= 80):
        result=`해당과목은 B입니다`;
        break;
    case (score >= 70 && score <= 79):
        result=`해당과목은 C입니다`;
        break;
    case (score >= 60 && score <= 69):
        result=`해당과목은 D입니다`;
        break;
    case (score >= 0 && score <= 59):
        result=`해당과목은 F입니다`;
        break;
}
console.log(result);