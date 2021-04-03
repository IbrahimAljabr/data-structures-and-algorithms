
const  {array}   = require("./array-binary-search");


describe('Should get the index for the searched number  ', ()=>{

    it("Happy Path Left", () => {
      
          expect(array([1,2,3,4,5,6,7,8],3)).toEqual(2);

      });
      it("Happy Path Right", () => {
      
        expect(array([1,2,3,4,5,6,7,8],7)).toEqual(6);

    });
    it("Not found", () => {
      
        expect(array([10,20,30,40,50,60,70,80],5)).toEqual('not found');

    });
})

