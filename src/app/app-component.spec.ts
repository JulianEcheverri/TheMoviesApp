import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let app: AppComponent;

  beforeEach(async(() => {
    app = new AppComponent();
  }));

  it(`should have as title 'MoviesApp'`, async (() => {
    expect(app.title).toEqual("MoviesApp");
  }));
});
