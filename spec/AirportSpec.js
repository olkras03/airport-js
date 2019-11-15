"use strict";

describe("Airport", function() {
  var airport;
  var plane;
  var weather

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpy('weather, ['isStormy']);
    airport = new Airport(weather);
    // plane = jasmine.createSpy("plane", ["land"]);
  });

  it("has no planes by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
  it("can clear planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can clear planes for takeoff", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
   
})
  it("can check for stromy conditions", function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe("under stormy conditions", function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it("does not clear the planes for takeoff", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() {
        airport.clearForTakeOff(plane);
      }).toThrowError("cannot takeoff during storm");
    });

    it("does not clear planes for landing", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() {
        airport.clearForLanding(plane);
      }).toThrowError("cannot land during storm");
    });
  });
});
