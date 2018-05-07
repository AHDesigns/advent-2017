const { TEST } = require('./utils');
const { d3 } = require('./tests');

function generateArray(target) {
    const arr = [[1, 1, 0]];

    let x = 1;
    let layer = 0;
    while (x < target) {
        x++;
        layer++;

        const initX = x;
        x += (8 * layer) - 1;

        arr.push([initX, x, layer]);
    }

    return arr;
}

function findSteps(input, spiral = []) {
    const [min, max, layer] = spiral.find(([ min, max ]) => (min <= input && input <= max))
    const diff = input - min;

    if (diff === 0) {
        return 0;
    }

    let steps = (layer * 2) - 1;
    let polarity = -1;
    for (let x = 0; x < diff; x++) {
        steps += polarity;
        if (steps === layer || steps === (layer * 2)) {
            polarity *= -1;
        }
    }

    return steps;
}


function methodOne(arrayOfInputs) {
    const [largest] = arrayOfInputs.reduce((acc, val) => (val[ 0 ] > acc[ 0 ] ? val : acc));
    const spiral = generateArray(largest);
    return function calculateAnser(input) {
        return findSteps(input, spiral);
    };
}

/* --------------------------------------------- */
/* RUN
/* --------------------------------------------- */

TEST(d3.part1, methodOne(d3.part1));
// TEST(d3.part2, methodTwo);
