let program = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 19, 1, 19, 5, 23, 1, 9, 23, 27, 2, 27, 6, 31, 1, 5, 31, 35, 2, 9, 35, 39, 2, 6, 39, 43, 2, 43, 13, 47, 2, 13, 47, 51, 1, 10, 51, 55, 1, 9, 55, 59, 1, 6, 59, 63, 2, 63, 9, 67, 1, 67, 6, 71, 1, 71, 13, 75, 1, 6, 75, 79, 1, 9, 79, 83, 2, 9, 83, 87, 1, 87, 6, 91, 1, 91, 13, 95, 2, 6, 95, 99, 1, 10, 99, 103, 2, 103, 9, 107, 1, 6, 107, 111, 1, 10, 111, 115, 2, 6, 115, 119, 1, 5, 119, 123, 1, 123, 13, 127, 1, 127, 5, 131, 1, 6, 131, 135, 2, 135, 13, 139, 1, 139, 2, 143, 1, 143, 10, 0, 99, 2, 0, 14, 0];

function processOp(pointer, opCode, program) {
    let a = program[program[pointer + 1]];
    let b = program[program[pointer + 2]];
    let memory = program[pointer + 3];
    let result = 0;

    if (opCode === 1) {
        result = a + b;
    } else if (opCode === 2) {
        result = a * b;
    }

    program[memory] = result;
}

function runProgram(noun, verb, program) {
    let pointer = 0;

    program[1] = noun;
    program[2] = verb;

    while (pointer < program.length) {
        let opCode = program[pointer];
        if (opCode === 1 || opCode === 2) {
            processOp(pointer, opCode, program);
        } else if (opCode === 99) {
            break;
        } else {
            console.log("NO-OP: " + opCode + " at position " + pointer);
            break;
        }

        pointer += 4;
    }

    return program[0];
}

function findInput(program, desiredOutput) {
    let currentProgram = [];

    let noun = 0;
    let verb = 0;
    let success = false;

    while (noun < program.length) {

        while (verb < program.length) {
            currentProgram = program.slice();
            let result = runProgram(noun, verb, currentProgram);
            console.log(noun + ", " + verb + " = " + result);
            if (result === desiredOutput) {
                success = true;
                break;
            } else {
                verb++;
            }
        }

        if (success) {
            break;
        } else {
            noun++;
            verb = 0;
        }
    }

    if (success) {
        return "Noun: " + noun + ", Verb:" + verb;
    } else {
        return "Result could not be calculated";
    }
}

document.querySelector("#app").innerHTML = findInput(program, 19690720);