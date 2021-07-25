const scoreTexts = {
    pawn: {
        img: '/content/media/img/pawn.jpeg',
        title: '<span>폰</span>새나는 첫 걸음!',
        subtitle: '엄마표영어, 가즈압',
        detail: [
            '엄마표영어 신의 경지로 가는 길, 당신의 첫 걸음을 응원합니다! 체스판 앞으로만 움직일 수 있는 <span>폰</span>처럼 지금 현재 당신은 앞으로 전진하는 의욕 가득 엄마!'
        ]
    },
    knight: {
        img: '/content/media/img/knight.jpeg',
        title: '데이 앤 <span>나이트</span>!',
        subtitle: '나는야 열정 가득 성장형',
        detail: [
            '장애물을 건너 뛰며 짧은 거리에서 가장 강한 힘을 가진 <span>나이트</span>! 처음 시작한 칸의 색과 마지막 도착한 칸의 색이 다른 <span>나이트</span>처럼 눈부신 성장이 기대되는 당신은 성장형 엄마! 짧은 거리를 보며 나아가는 것도 중요하지만, 장기적인 목표를 세우고 느긋하게 나아가는 것도 중요하다는 것, 기억하세요!'
        ]
    },
    bishop: {
        img: '/content/media/img/bishop.jpeg',
        title: '어느 <span>숍</span> 다녀오셨<span>숍</span>?',
        subtitle: '엄마표영어 맛집 기운 솔솔~',
        detail: [
            '빈칸이 보이면 어디든 전진~ 빈칸이 있으면 제한없이 몇 칸이라도 이동 가능한 <span>비숍</span>처럼 빈틈을 채우려 노력하는 여기가 바로 엄마표영어 맛집! 망설이지 마요~ 지금 당장 <span>비숍</span>처럼 전진해보세요!'
        ]
    },
    king: {
        img: '/content/media/img/king.jpeg',
        title: '내가 <span>킹</span>이로소이다!',
        subtitle: '엄마표영어 고수의 기운이 스멀스멀',
        detail: [
            '두근두근, 엄마표영어 고수의 기운이 느껴지는 당신!<br>',
            '체스판 위에서 어느 방향으로든 한 칸씩 전진할 수 있는 <span>킹</span>처럼 ‘1일 1 작은 목표 성취’ 공식을 추천합니다!<br>',
            '하루에 한 가지 작은 목표를 이루고 하루의 마무리를 스스로에 대한 보상으로 끝낸다면 고지는 코앞!'
        ]
    },
    rook: {
        img: '/content/media/img/rook.jpeg',
        title: '<span>룩</span> 앳 유!',
        subtitle: '내 눈앞의 엄마표영어 고수',
        detail: [
            '체스판 위, 가는 길에 내 편이 있으면 특히 강력해지는 룩처럼 당신을 이끌어주는 엄마표영어 코치가 있다면 더 멀리 나아갈 가능성이 있는 당신! 눈부신 당신이여, 여기까지 오느라 수고 많으셨습니다! 코치의 도움으로 파워업하면 엄마표영어 신의 경지가 눈앞에!'
        ]
    },
    queen: {
        img: '/content/media/img/queen.jpeg',
        title: '야스 <span>퀸</span>!',
        subtitle: '엄마표영어 뒤집어 놓겠네',
        detail: [
            '진정한 <span>퀸</span>은 바로 당신입니다! 체스판 위 가로, 세로, 대각선 어느 방향으로든 자유로운 움직임을 보이는 전천후 기물인 <span>퀸</span>! 전문적인 코칭이 더해진다면 엄마표영어 전문가가 될 수도 있겠는 걸요?'
        ]
    },
};
const resultTexts = {
    understanding: {
        textResult : [
            '코칭파워 업! <strong>[아이에 대한 이해]</strong>',
        ],
        textDetail : [
            `
            엄마표영어 파워를 충전하기 위해 당신에게 필요한 것은 아이에 대한 이해입니다. 
            엄마표영어는 애착 관계가 형성된 부모가 자신의 자녀에게 직접! 영어를 가르친다는 점에서 다른 교육 방법과 차별되는 강점을 지닙니다.
            `,
            `
            부모는 이미 아이의 취향과 성향을 이해하고 있기 때문에, 아이가 학습 시 어떻게 느낄지 고려하며 아이에게 딱 맞는 학습 방법과 학습 내용을 선택할 수 있습니다. 이때문에 아이는 같은 내용을 배우더라도 자신의 마음과 행동을 잘 이해해주는 부모와 학습할 때 새로운 내용에 더욱 개방적인 태도를 보이게 된답니다.
            `,
            `
            아이에 대한 이해를 넓히기 위해 오늘부터 아이의 행동을 주의 깊게 관찰하고 전문적인 테스트를 통해 아이의 성격 특성을 파악해보세요. 지금보다 더 눈부신 우리 아이의 성장을 보게 될 거예요!
            `,
            `
            <p class="result__recommend">[원데이 리터러시 스타트]를 추천합니다. 아이의 성향과 성격 특성에 맞는 알맞은 영어 학습 방법을 확인할 수 있어요!</p>
            `
        ]
    },
    environment: {
        textResult : [
            '코칭파워 업! <strong>[지지적인 엄마표영어 환경]</strong>'
        ],
        textDetail : [
            `엄마표영어 파워를 충전하기 위해 당신에게 필요한 것은 지지적인 엄마표영어 환경입니다.`,
            `성공적인 엄마표영어를 위해 중요한 것은 규칙적인 시간, 손을 덜어줄 가족과 지인, 그리고 무엇보다 전문가의 도움입니다. 즉, 엄마표영어를 지속할 수 있도록 엄마표영어 환경 조성이 우선되어야 하죠.`,
            `엄마표영어를 시작한다는 것을 주변에 알리세요! 엄마표영어를 성공적으로 해낸 선배 부모님들의 이야기에도 귀를 기울이고요! 엄마표영어에 부스터를 달고 싶다면 전문가와 협력하고 있는 커뮤니티를 통해 아이의 효과적인 영어학습을 위한 정보를 제공 받는 것이 필요하겠죠~`,
            `지금 당신의 열정에 주변의 지지가 더해진다면 당신도 당신이 바라는 엄마표영어 성공 사례의 주인공이 될 수 있어요!`,
            `<p class="result__recommend">[영어책읽기 습관만들기]를 추천합니다. 혼자가 아니라 목표가 같은 부모들과 함께 전문가의 코칭을 받으며 엄마표영어에 도전해보세요!</p>`,
        ],
    },
    executive: {
        textResult : [
            '코칭파워 업! <strong>[엄마표영어 실행력]</strong>'
        ],
        textDetail : [
            `엄마표영어 파워를 충전하기 위해 당신에게 필요한 것은 엄마표영어 실행력입니다.`,
            `아직 완벽하지 않다고 생각해서 엄마표영어의 첫 시작을 망설이고 있지는 않나요? 모든 것을 갖추려고 당신이 시작을 미루는 사이, 아이는 훌쩍 커버려요. 무엇인가 하기로 마음을 먹었다면 과감하고 빠르게 도전해야 합니다! “시작이 반이다”라는 말이 있듯이, 시작을 해야 변화가 시작되고 목표에 도달할 가능성도 생겨요!`,
            `첫발을 내딛는것은 두려운 일이예요. 하지만 같은 목표를 가진 사람들과 함께 응원하며 첫발을 내딛는다면 두려움은 곧 설레임으로 바뀔 수 있죠! 첫 걸음을 내딛은 후에는 그동안 걸어온 곳과 앞으로 나아갈 곳을 모니터링해야 해요. 원하는 목표에 도달하기 위해서는 현재의문제점을 개선하며 나아가는 것이 중요하니까요!`,
            `<p class="result__recommend">[영어책읽기 습관만들기]를 추천합니다. 혼자가 아니라 목표가 같은 부모들과 함께 전문가의 코칭을 받으며 엄마표영어에 도전해보세요!</p>`,
        ],
    },
    skil: {
        textResult : [
            '코칭파워 업! <strong>[엄마표영어 기술]</strong>'
        ],
        textDetail : [
            `
            엄마표영어 파워를 충전하기 위해 당신에게 필요한 것은 엄마표영어 기술입니다. 
            가끔 “내가 고른 영어책이 우리 아이에게 알맞을까?”, “아이와 함께 영어책을 읽을 때... 그냥 소리내어 읽어주기만 하면 되는 걸까? 아님.. 어떤 질문을 해야 할까?”, “어떤 교재를 선택해야 우리 아이가 지치지 않고 재미있게 배울 수 있을까?”하는 질문을 던지고 계시진 않은가요?
            `,
            `이 모든 질문에 대해 전문가들은 끊임없이 조언을 제시하고 있습니다. 당신의 궁금증을 전문가의 조언을 통해 풀어낸다면 당신도 우리 아이도 모두 즐겁고 효과적인 엄마표영어를 할 수 있을 거예요!`,
            `<p class="result__recommend">[원데이 리터러시 스타트]와 [영어책읽기 습관만들기]를 추천합니다. 영어책을 읽어주며 어떻게 아이의 영어를 발달시킬 수 있는지 배울 수 있어요!</p>`,
        ]
    },
    efficacy: {
        
        textResult : [
            '코칭파워 업! <strong>[엄마표영어 자기효능감]</strong>',
        ],
        textDetail : [
            `엄마표영어 파워를 충전하기 위해 당신에게 필요한 것은 엄마표영어 자기효능감입니다. 엄마표영어 자기효능감이란 엄마표영어를 적절하게 잘 할 수 있다는 기대와 신념을 말합니다.`,
            `자기효능감 키우기 위해서는 작은 목표 하나를 성취해보는 것이 중요합니다. 말로만 하는 것이 아니라 작지만 구체적인 목표를 세우고 실제로 성취하는 경험을 갖는 것이 자기효능감에 영향을 미칩니다. 당신이 꿈꾸는 큰 목표와 관련된 작은 목표들을 세우고 지금 바로 실천해보세요! 그리고 그 작은 목표들을 성취할 때마다 본인의 노력에 보상해주세요.“칭찬은 고래도 춤추게 만든다”라는 말이 있죠? 노력에 대한 보상은 당신을 춤추게 만들고, 당신은 다음의 목표를 향해 한 걸음 더 나아가게 될 거예요!`,
            `<p class="result__recommend"[리드 투 미 맘]과 [원데이 리터러시 스타트]를 추천합니다. 영어책에 나오는 표현들을 따라읽는 연습부터 시작해보세요. 영어로 유창하게 낭독하는 자신을 발견하며 성취감이 Up! Up! Up! 될 거예요.</p>`,
        ]
    },
    sameScore: {
        textResult : [
            '코칭파워 업! <strong>[2% 부족한 팔방미인]</strong>',
        ],
        textDetail : [
            `당신은 엄마표영어를 하기 위해 필요한 요인들을 모두 비슷한 수준으로 갖추고 있는 팔방미인! 그런데.. 아쉽게도 모두 2% 부족하네.. 모든 요인들을 조금씩 더 보완하면 좋지만 아이가 만3~6세에 해당한다면 가장 먼저 아이에 대한 이해를 넓혀보는 것은 어떨까요?`,
            `엄마표영어는 애착 관계가 형성된 부모가 자신의 자녀에게 직접! 영어를 가르친다는 점에서 다른 교육 방법과 차별되는 강점을 지닙니다.`,
            `부모는 이미 아이의 취향과 성향을 이해하고 있기 때문에, 아이가 학습 시 어떻게 느낄지 고려하며 아이에게 딱 맞는 학습 방법과 학습 내용을 선택할 수 있습니다. 이때문에 아이는 같은 내용을 배우더라도 자신의 마음과 행동을 잘 이해해주는 부모와 학습할 때 새로운 내용에 더욱 개방적인 태도를 보이게 된답니다.`,
            `아이에 대한 이해를 넓히기 위해 오늘부터 아이의 행동을 주의 깊게 관찰하고 전문적인 테스트를 통해 아이의 성격 특성을 파악해보세요. 지금보다 더 눈부신 우리 아이의 성장을 보게 될 거예요!`,
            `<p class="result__recommend">[원데이 리터러시 스타트]를 추천합니다. 아이의 성향과 성격 특성에 맞는 알맞은 영어 학습 방법을 확인할 수 있어요!</p>`
        ]
    },
    highScore: {
        textResult : [
            '완벽 그 자체!',
            '<strong>[엄마표영어 신의 경지]</strong>',
        ],
        textDetail : [
            `CHEERS!!! 당신을 엄마표영어 신의 경지로 인정!!!`,
            `당신은 엄마표영어를 성공적으로 해내기 위해 필요한 다섯 가지 요인, ‘아이에 대한 이해’, ‘지지적인 주변 환경’, ‘과감하고 빠르게 도전하는 실행력’, ‘엄마표영어에 대한 기술’, ‘자기효능감’을 두루 두루 높은 수준으로 갖추고 계십니다!!!`,
            `지금의 경험을 잘 기억하고 기록해보세요! 그리고... 당신의 엄마표영어 코칭파워에 전문성을 더해보세요! 이후 엄마표영어 전문가로 거듭날 수 있는 잠재력을 이대로 가만히 둘 수 없죠~~!!`,
            `<p class="result__recommend">[리터러시 전문가 과정]을 추천합니다. 당신은 미래의 멋진 엄마표영어 전문가가 될 수 있어요!</p>`,
        ]
    }
}

const chessCategory = [
    'pawn', 'knight', 'bishop', 'king', 'rook', 'queen'
];

const serveyCategory = [
    'environment', 'understanding', 'executive', 'skil', 'efficacy'
];

let result = {
    environment: 0,
    understanding: 0,
    executive: 0,
    skil: 0,
    efficacy: 0,
};

let total = 0;

$(function(){
    result.environment = parseInt(getParameterByName('environment'));
    result.understanding = parseInt(getParameterByName('understanding'));
    result.executive = parseInt(getParameterByName('executive'));
    result.skil = parseInt(getParameterByName('skil'));
    result.efficacy = parseInt(getParameterByName('efficacy'));

    setChart();
    setResultText();
    setChessText();
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setChart(){
    $('#chart').remove();
    var chartHtml = '<canvas class="chart" id="chart" width="400" height="400"></canvas>';
    $('#chart_box').append(chartHtml);
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                ['엄마표영어','환경'],
                ['아이에 대한','이해'],
                ['엄마표영어','실행력'],
                ['엄마표영어','기술'],
                ['엄마표영어','자기효능감']
            ],
            datasets: [{
                label: '결과',
                data: [
                    result.environment,
                    result.understanding,
                    result.executive,
                    result.skil,
                    result.efficacy,
                ],
                borderWidth: 6,
                borderColor: 'rgb(160, 255, 156)',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            }]
        },
        options: {
            responsive: false,
            scale: {
                gridLines: {
                    color: "black",
                    lineWidth: 1
                },
                angleLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    stepSize: 4
                },
                pointLabels: {
                    fontSize: 12,
                    fontColor: "black",
                    fontAlign: "center"
                }
            },
            legend: {
                display: false
            }
        }
    });   
}

function getFirstScore(){
    let score = 100;

    for(var i=0; i<serveyCategory.length; i++){
        total += result[serveyCategory[i]];

        (score > result[serveyCategory[i]]) ?
            score = result[serveyCategory[i]] :
            score = score;
    }

    return score;
}

function getFirstCategory(){
    let firstScore = getFirstScore();

    for(var i=0; i<serveyCategory.length; i++){
        if(result[serveyCategory[i]] === firstScore) return serveyCategory[i];
    }

    return null;
}

function setChessText(){
    let text = null;
    
    if(total < 40) text = scoreTexts[chessCategory[0]];
    else if(total < 55) text = scoreTexts[chessCategory[1]];
    else if(total < 70) text = scoreTexts[chessCategory[2]];
    else if(total < 80) text = scoreTexts[chessCategory[3]];
    else if(total < 90) text = scoreTexts[chessCategory[4]];
    else text = scoreTexts[chessCategory[5]];

    $('.result__img img').attr('src', text.img);
    $('.chess__title').html(text.title);
    $('.chess__subtitle').html(text.subtitle);
    $('.chess__detail').html(text.detail);
}

function setResultText(){
    let first = getFirstCategory();
    let text = null;

    if(total < 90){
        if(
            result.environment === result.understanding &&
            result.environment === result.executive &&
            result.environment === result.skil &&
            result.environment === result.efficacy
        ) {
            text = resultTexts['sameScore'];
        } else {
            text = resultTexts[first];
        }
    } else {
        text = resultTexts['highScore'];
        $('#change__link').html(
            `
            <span class="btn__top">Dr!Sue. X FRIENDS</span>                        
            <span class="btn__bottom">원데이 리터러시 스타트</span>
            `
        );
        $('#change__link').attr('href', 'http://weread.co.kr/57');
    }

    $('#percent').text(`${total}%`);

    for(var i=0; i < text.textResult.length; i++){
        $('#result').append(`<p>${text.textResult[i]}</p>`);
    }

    for(var i=0; i < text.textDetail.length; i++){
        $('#detail').append(`<p>${text.textDetail[i]}</p>`);
    }
}