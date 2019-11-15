"use strict";

describe("Weather", function() {
  var weather;
  beforeEach(function() {
    weather = new weather();
  });
  it("creates stormy weather randomly", function() {
    spyOn(Math, "random").and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it("creates not stormy weather at other times", function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(Weather.isStormy()).toBeFalsy;
  });
});
