function generateCandyList(prefix, count) {
    let list = [];
    for (let i = 1; i <= count; i++) {
        list.push(`${prefix}_${i}.png`);
    }
    return list;
}

const maxCounts = {
    bow: 4,
    ball: 5,
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

    // Define which levels are active and displayed in the dropdown menu
    activeLevels: [1, 2, 3, 5],

    candyGroups: {
        bow: bowList,
        ball: ballList,
        long: longList,
        cute: cuteList,
        bowball: [...bowList, ...ballList],
        mix: [...bowList, ...ballList, ...longList, ...cuteList]
    },

    levelConfig: {
        1: { group: 'bow', blindMode: false, maxDailyPlays: 3, name: 'Level 1' },
        2: { group: 'bowball', blindMode: false, maxDailyPlays: 3, name: 'Level 2' },
        3: { group: 'mix', blindMode: false, maxDailyPlays: 2, name: 'Level 3' },
        4: { group: 'cute', blindMode: false, maxDailyPlays: 3, name: 'Level 4' },
        5: { group: 'cute', blindMode: false, maxDailyPlays: 3, name: 'Level 5 (Book Reading)' }
    }
};