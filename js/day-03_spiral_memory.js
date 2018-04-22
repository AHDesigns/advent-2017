function generateArray(target) {
        const arr = [[1,1,0]];

        var x = 1;
        var layer = 0;
        while (x < target) {
                x++;
                layer++;

                const initX = x
                x += (8 * layer) -1;

                arr.push([initX, x, layer]);
        }

        return arr;
}

function findSteps(input, spiral = []) {
        const [min, max, layer] = spiral.find(([min,max]) => (min <= input && input <= max))
        const diff = input - min;

        if (diff === 0) {
                return 0
        }

        var steps = (layer * 2) - 1;
        var polarity = -1;
        for (var x = 0; x < diff; x++) {
                steps += polarity;
                if (steps === layer || steps === (layer *2)) {
                        polarity *= -1
                }
        }

        return steps;
}


function check(arrayOfInputs) {
        const [ largest ] = arrayOfInputs.reduce((acc, val) => (val[0] > acc[0] ? val : acc))
        const spiral = generateArray(largest);

        arrayOfInputs.forEach(([input, expected]) => {
                const output = findSteps(input, spiral);
                if (output === expected) {
                        console.log('true for: ', input, ' = ', expected);
                } else {
                        console.log('failed for: ', input, ' result was: ', output, ' expected: ', expected);
                }
        })

}

check([
        [1,0],
        [12,3],
        [23,2],
        [1024,31],
        [368078,371]
]);
