describe("maths fibonacci", function(){
    it("should be defined", function(){
        expect(maths.fibonacci).toBeDefined();
    });
    it("should return 1 for fibonacci negative", function(){
        expect(maths.fibonacci(-1)).toBe(1);
    });
    it("should return 1 for fibonacci 0", function(){
        expect(maths.fibonacci(0)).toBe(1);
    });
    it("should return 1 for fibonacci 1", function(){
        expect(maths.fibonacci(1)).toBe(1);
    });
    it("should return 233 for fibonacci 13", function(){
        expect(maths.fibonacci(13)).toBe(233);
    });
});

describe("maths factorial", function(){
    it("should be defined", function(){
        expect(maths.factorial).toBeDefined();
    });
    it("should return 1 for negative factorial", function(){
        expect(maths.factorial(-1)).toBe(1);
    });
    it("should return 1 for factorial 0", function(){
        expect(maths.factorial(0)).toBe(1);
    });
    it("should return 1 for factorial 1", function(){
        expect(maths.factorial(1)).toBe(1);
    });
    it("should return 2 for factorial 2", function(){
        expect(maths.factorial(2)).toBe(2);
    });
    it("should return 120 for factorial 5", function(){
        expect(maths.factorial(5)).toBe(120);
    });
});

describe("maths euler", function(){
    it("should be undefined", function(){
        expect(maths.euler).toBe(undefined);
    });
});
