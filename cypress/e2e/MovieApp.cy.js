/// <reference types="cypress" />

import { Context } from "mocha";
import { Getlocator } from "../support/page_objects/MovieApp";

describe("Testing the MovieApp", () => {
  before("login to the app", () => {
    cy.visit(
      "https://install.appcenter.ms/orgs/itops-03e0/apps/qa-interview-movie-app-1/distribution_groups/link"
    );
  });
  describe("Verify that user can add a movie in favorites", () => {
    it("User selects the movie from movie list", () => {
      Getlocator.SelectMovie().click();
    });
    it("User clicks on star icon", () => {
      Getlocator.StarIcon().click();
    });
    it("User navigates to Favorites tab", () => {
      Getlocator.FavoriteIcon().click();
    });
    it("Movie should be available in Favorites tab", () => {
      Getlocator.FavoritesPage().should("contain", "WATCHER");
    });
  });
});
