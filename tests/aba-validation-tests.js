"use strict";
var mocha = require("mocha")
	, should = require("should")
	, aba = require("../src/aba-validation").ABAValidator
	, _VALID_ROUTING_NUMBER = "123123123";
	
describe("ABA Validation", function(){
	
	describe("Basic Requirements", function(){
		
		it("should only allow a 9 character routing number string", function(){
			aba.validate(_VALID_ROUTING_NUMBER).should.be.true;
			aba.validate("123123").should.be.false;
			aba.validate("123123123123").should.be.false;
		});
		
		it("should trim the routing number", function(){
			aba.validate(_VALID_ROUTING_NUMBER + "       ").should.be.true;
		});
		
		it("should only allow numeric routing number strings", function(){
			aba.validate(_VALID_ROUTING_NUMBER + "A").should.be.false;
		});
		
		it("should not allow a routing number that contains just 0's", function(){
			aba.validate("000000000").should.be.false;
		});
		
	});
	
	describe("Happy Path", function(){
		it("should return true for valid routing numbers.", function(){
			aba.validate(_VALID_ROUTING_NUMBER).should.be.true;
		});
	});
	
});