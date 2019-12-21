package aoc.day5;

import org.junit.Test;

import static aoc.day5.Day5.findInput;
import static org.junit.Assert.assertEquals;

public class Day5Test {

    @Test
    public void testOpCode1(){
        //add, position 0, to position 0, store at position 0, end program
        int[] program = new int[]{1,0,0,0,99};
        assertEquals(2, Day5.runProgram(program)[0]);
    }

    @Test
    public void testOpCode2(){
        //multiple, position 3, with position 0, store at position 3, end program
        int[] program = new int[]{2,3,0,3,99};
        assertEquals(6, Day5.runProgram(program)[3]);

        program = new int[]{2,4,4,5,99,0};
        assertEquals(9801, Day5.runProgram(program)[5]);
    }

    @Test
    public void testOpCode1And2(){
        int[] program = new int[]{1,1,1,4,99,5,6,0,99};
        int[] result = Day5.runProgram(program);
        assertEquals(30, result[0]);
        assertEquals(2, result[4]);
    }

    @Test
    public void testFindInput(){
        int[] program = new int[]{1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 19, 1, 19, 5, 23, 1, 9, 23, 27, 2, 27, 6, 31, 1, 5, 31, 35, 2, 9, 35, 39, 2, 6, 39, 43, 2, 43, 13, 47, 2, 13, 47, 51, 1, 10, 51, 55, 1, 9, 55, 59, 1, 6, 59, 63, 2, 63, 9, 67, 1, 67, 6, 71, 1, 71, 13, 75, 1, 6, 75, 79, 1, 9, 79, 83, 2, 9, 83, 87, 1, 87, 6, 91, 1, 91, 13, 95, 2, 6, 95, 99, 1, 10, 99, 103, 2, 103, 9, 107, 1, 6, 107, 111, 1, 10, 111, 115, 2, 6, 115, 119, 1, 5, 119, 123, 1, 123, 13, 127, 1, 127, 5, 131, 1, 6, 131, 135, 2, 135, 13, 139, 1, 139, 2, 143, 1, 143, 10, 0, 99, 2, 0, 14, 0};
        assertEquals(3951, findInput(program, 19690720));
    }
}
