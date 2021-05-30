const startTexts = [
    ['안녕하세요!', '엄마표영어 자가진단 테스트에 참여해 주셔서 감사드립니다.', '(⌒▽⌒)'],
    ['엄마표영어 자가진단 테스트의 결과를 통해', '본인의 엄마표영어 역량과 실행전 부족한 점을 보완할 수 있는 기회를 제공할 예정입니다.'],
    ['개선을 위해 제공되는 정보는', '엄마표영어 멘토링 교육, 영어 홈스쿨링 프로그램 개발의', '고도화를 위한 기초자료로 활용될 거예요.', 'φ(*⌒▽⌒)ノ'],
];
const serveyCategory = [
    'environment', 'understanding', 'executive', 'skil', 'efficacy'
]
const serveyQuestion = {
    environment: [
        //환경
        '나는 규칙적인 시간을 내어 엄마표영어를 할 수 있다.',
        '나에게는 엄마표영어를 하는 데 도움을 주거나 지지해줄 가족이나 지인이 있다.',
        '나에게는 엄마표영어와 관련해서 조언을 해줄 수 있는 전문가가 있다.',
        '나는 엄마표영어와 관련한 모임, 스터디, 카페 활동 등에 참여하고 있다.',
    ],
    understanding: [
        //이해
        '나는 아이의 입장에서 먼저 생각한 후에 행동을 결정한다.',
        '나는 아이의 제스처나 표정, 신체 접촉, 움직임, 자세, 목소리 등의 비언어적인 행동의 숨은 뜻을 알 수 있다.',
        '나는 아이의 행동을 보면 현재 아이의 상태에 대하여 파악할 수 있다.',
        '나는 아이의 여러 특성 및 성향을 세심하게 파악하여 그에 맞추어 엄마표 영어를 하기 위한 태도를 보인다.',
    ],
    executive:[
        //실행력
        '나는 도전해보고 싶은 엄마표영어 교육 방법이 있다면 주저하지 않고 일단 아이에게 적용해본다.',
        '나는 체력의 한계를 느끼는 날에는 계획했던 엄마표영어 학습량을 조절해가며 한다.',
        '나는 아이와 함께 엄마표영어를 하는 시간 외에도 종종 더 나은 엄마표영어 학습 방법에 대해 생각한다.',
        '나는 지금 하고 있는 엄마표영어 방법에서 문제점이 발견된다면 빠르게 문제점을 수정할 것이다.',
    ],
    skil:[
        //기술
        '나는 아이에게 알맞은 교재나 영어책을 고를 수 있다.',
        '우리 아이의 영어책은 내가 읽고 충분히 이해할 수 있다.',
        '아이에게 영어책을 읽어줄 때, 나는 간단한 영어로 질문을 할 수 있다.',
        '나는 기본적인 영어단어를 소리내어 잘 읽을 수 있다.',
    ],
    efficacy:[
        //자기효능감
        '나는 매체를 통해 배우는 엄마표영어 교육 내용을 잘 이해한다.',
        '나는 엄마표영어에서 사용하는 자료를 충분히 활용할 수 있다.',
        '노력을 통해 내가 세운 엄마표영어의 목표를 달성할 수 있을 것이라고 생각한다.',
        '나는 엄마표영어로 우리 아이의 영어 성장을 도울 수 있을 것이라고 생각한다.',
    ],
}
let serveyScore = ['0'];

const prevPageCount = 8;
const maxServeyCount = 20;
const speed = 50;
const stay = 500;
let page = 1;
let serveyIndex = 1;
var typingBool = false; 
var typingIdx=0; 
var ulIndex = 0;
var liIndex = 0;
var liLength = startTexts[ulIndex].length;


//설문 데이터
let result = {
    gender : null,
    age: null,
    childGender: null,
    childAge: null,
    working: null,
    english: null,
    environment: 0,
    understanding: 0,
    executive: 0,
    skil: 0,
    efficacy: 0,
}

$(document).on('click', '.btn--back', function(){
    prevPage();
});


$(document).on('click', '#btn--start', function(){
    nextPage();
    startTyping();
});

$(document).on('click', '#btn--next', function(){
    nextPage();
});

$(document).on('click', '.gender__btn', function(){
    const data = $(this).text();
    setServeyData('gender', data);

    $(this).prevAll().removeClass('on');
    $(this).nextAll().removeClass('on');
    $(this).addClass('on');

    nextPage();
});

$(document).on('click', '.age__btn', function(){
    const data = $('#age').val();
    if(data === ''){
        alert('나이는 필수값입니다.');
        $('#age').focus();
        return false;
    }
    setServeyData('age', data);
    nextPage();
});

$(document).on('click', '.child-gender__btn', function(){
    const data = $(this).text();
    setServeyData('childGender', data);

    $(this).prevAll().removeClass('on');
    $(this).nextAll().removeClass('on');
    $(this).addClass('on');

    nextPage();
});

$(document).on('click', '.child-age__btn', function(){
    const data = $('#child-age').val();
    if(data === ''){
        alert('나이는 필수값입니다.');
        $('#child-age').focus();
        return false;
    }
    setServeyData('childAge', data);
    nextPage();
});

$(document).on('click', '.working__btn', function(){
    const data = $(this).text();
    setServeyData('working', data);

    $(this).prevAll().removeClass('on');
    $(this).nextAll().removeClass('on');
    $(this).addClass('on');

    nextPage();
});

$(document).on('click', '.english__btn', function(){
    const data = $(this).text();
    setServeyData('english', data);

    $(this).prevAll().removeClass('on');
    $(this).nextAll().removeClass('on');
    $(this).addClass('on');

    nextPage();
});

$(document).on('click', '.servey__score', function(){
    const score = $(this).attr('id');
    serveyScore[serveyIndex] = score;
    serveyIndex++;

    $(this).prevAll().removeClass('on');
    $(this).nextAll().removeClass('on');
    $(this).addClass('on');

    console.log(serveyScore);

    nextPage();
});

$(document).on('click', '.result__btn', function(){
    $('#loading').css('display', 'flex');

    let category = '';
    let categoryIndex = 0;

    for(var i=1; i<serveyScore.length; i++){
        category = serveyCategory[categoryIndex];
        result[category] += parseInt(serveyScore[i]);

        if(i % 4 === 0) categoryIndex++;
    }

    $.ajax({
        type: 'GET',
        url: 'https://script.google.com/macros/s/AKfycbzwp6R1syuVqojcQdp1o5WstEWZkP8Zkylknx0K70uh-tK-gGUIt2amHOidcKqxt-xFlw/exec',
        data: {
            '성별': result.gender,
            '나이': result.age,
            '아이성별': result.childGender,
            '아이나이': result.childAge,
            '구분': result.working,
            '사용여부': result.english,
            '환경': result.environment,
            '이해': result.understanding,
            '실행력': result.executive,
            '기술': result.skil,
            '자기효능감': result.efficacy
        },
        success: function(){
            const scoreParam = `?environment=${result.environment}&understanding=${result.understanding}&executive=${result.executive}&skil=${result.skil}&efficacy=${result.efficacy}`;

            const resultURL = `/result.html${scoreParam}`;
            location.href = resultURL;
        }
    });
});

function setServeyText(){
    let html = '';
    let texts = [];
    let target = '';
    let pageCount = prevPageCount;
    for(var i=0; i < serveyCategory.length; i++){
        texts = serveyQuestion[serveyCategory[i]];
        for(var j=0; j < texts.length; j++){
            pageCount++;        
            html = `
            <div class="page__container question__container servey__container" id="page-${pageCount}">
                <div class="servey__header">
                    <div class="wrap">
                        <i class="fas fa-arrow-left btn--back"></i>
                        <p class="servey__count">${serveyIndex}/${maxServeyCount}</p>
                    </div>
                </div>
                <div class="servey__text">
                    <div class="wrap">
                        <p class="servey__question" id="${serveyCategory[i]}_${j}">
                        </p>
                    </div>
                </div>
                <div class="servey__btn">
                    <div class="wrap">
                        <div class="score__btn mt-80 on">
                            <p class="servey__score btn--success" id="1">매우<br>그렇지않다</p>
                            <p class="servey__score btn--success" id="2">그렇지<br>않다</p>
                            <p class="servey__score btn--success" id="3">보통<br>이다</p>
                            <p class="servey__score btn--success" id="4">그렇다</p>
                            <p class="servey__score btn--success" id="5">매우<br>그렇다</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('#servey__container').append(html);
            target = `#${serveyCategory[i]}_${j}`;
            $(target).text(texts[j]);
            serveyIndex++;
        }
    }
    serveyIndex = 1;
}

function setServeyData(target, data){
    result[target] = data;
}

function nextPage(){
    page++;
    $('.page__container').removeClass('on');
    $(`#page-${page}`).addClass('on');
}

function prevPage(){
    page--;
    $('.page__container').removeClass('on');
    $(`#page-${page}`).addClass('on');
    if(serveyIndex > 1) serveyIndex--;
}

function startTyping(){
    // 타이핑될 텍스트를 가져온다 
    var typingTxt = startTexts[ulIndex][liIndex];
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        $(`#page-${page} .index__title`).append(`<p id="text-${ulIndex}${liIndex}"></p>`);
        typingBool=true; 
        var tyInt = setInterval(typing, speed); // 반복동작 
    } 
        
    function typing(){ 
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(`#text-${ulIndex}${liIndex}`).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else{ //한문장이끝나면
            if(liIndex<liLength-1){
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++; 
                //다음문장을 타이핑하기위한 셋팅
                typingIdx=0;
                typingBool = false; 
                typingTxt = startTexts[ulIndex][liIndex];

                $(`#page-${page} .index__title`).append(`<p id="text-${ulIndex}${liIndex}"></p>`);
        
                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료
        
                setTimeout(function(){
                    tyInt = setInterval(typing, speed);
                }, stay);
            } else if(liIndex==liLength-1){
                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);

                if(ulIndex < startTexts.length-1){
                    //사용했던 변수 초기화
                    typingBool = false; 
                    liIndex=-1;
                    typingIdx=0;
                    ulIndex++;
                    liLength = startTexts[ulIndex].length;
                    $(`#page-${page} .index__title`).empty();
    
                    setTimeout(function(){
                        tyInt = setInterval(typing, speed);
                    }, stay);
                }else {
                    $(`#page-${page} .common__btn`).addClass('on');
                    clearInterval(tyInt);
                }
            }
        } 
    }  
}