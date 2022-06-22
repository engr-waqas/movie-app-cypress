export class MovieApp {
  SelectMovie() {
    return cy.contains('[placeholder="WATCHER"]');
  }
  StarIcon() {
    return cy.contains('[class="Star-Icon"]');
  }
  FavoriteIcon() {
    return cy.contains('[class="Favorite-Icon"]');
  }
  FavoritesPage() {
    return cy.contains('[class="Favorite_movies"]');
  }
}

export const Getlocator = new MovieApp();
