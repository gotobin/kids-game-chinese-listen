function generateCandyList(prefix, count) {
    let list = [];
    for (let i = 1; i <= count; i++) {
        list.push(`${prefix}_${i}.png`);
    }
    return list;
}

const maxCounts = {
    bow: 3,
    ball: 2,
    long: 3,
    cute: 4
};

// Generate lists statically beforehand
const bowList = generateCandyList('candy_bow', maxCounts.bow);
const ballList = generateCandyList('candy_ball', maxCounts.ball);
const longList = generateCandyList('candy_long', maxCounts.long);
const cuteList = generateCandyList('candy_cute', maxCounts.cute);

const CANDY_CONFIG = {
    jarWidth: 200,
    jarHeight: 380,
    groundHeight: 40,
    scale: 0.05,         
    bodyWidth: 30,       
    bodyHeight: 30,      
    restitution: 0.9,    
    friction: 0.1,
    frictionStatic: 1.0, 
    gravityY: 1,
    maxCandies: 1000,
    
    maxCounts: maxCounts,

    // Regular object property instead of a getter function
    candyGroups: {
        bow: bowList,
        ball: ballList,
        long: longList,
        cute: cuteList,
        mix: [...bowList, ...ballList, ...longList, ...cuteList]
    },

    levelConfig: {
        1: { group: 'bow', blindMode: false, maxDailyPlays: 3 },
        2: { group: 'ball', blindMode: true, maxDailyPlays: 3 },
        3: { group: 'bow', blindMode: true, maxDailyPlays: 2 }
    }
};