

const supertest = require('supertest');
const  array  = require("./array-binary-search");
const server = require('./array-binary-search');



describe('array testing', ()=>{

    it("Happy Path", () => {
      
        expect(array.array).toEqual(8);

      });
})

