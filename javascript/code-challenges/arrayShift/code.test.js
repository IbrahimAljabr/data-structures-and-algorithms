


const supertest = require("supertest");
const { array } = require("./array-shift.js");
const server = require("./array-shift.js");

const request = supertest(server.server);



  describe("Array testing", () => {

    it("Happy Path", () => {
      
      expect(array).toEqual([0,1,2,3,4,99,5,6,7,8,9]);
    });


  })