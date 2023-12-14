/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SectionListData } from "../types";

export const peopleData: unknown[] = [
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
  {
    name: "John Doe",
    job: "Engineer",
    age: "29",
  },
  {
    name: "Joe Schmoe",
    job: "Electrician",
    age: "33",
  },
  {
    name: "Fred Joe",
    job: "CEO",
    age: "58",
  },
];

const foodData: unknown[] = [
  {
    dish: "Ramen",
    healthRating: "Bit unhealthy",
    spiciness: "Decent",
  },
  {
    dish: "Spicy Hamburger",
    healthRating: "Unhealthy",
    spiciness: "Spicy",
  },
  {
    dish: "Ceasar Salad",
    healthRating: "Healthy",
    spiciness: "Mild",
  },
];

const moviesData: unknown[] = [
  {
    title: "Interstellar",
    genre: "Sci-fi",
    rating: "8.7",
  },
  {
    title: "The Immitation Game",
    genre: "Thriller",
    rating: "9.4",
  },
  {
    title: "Avengers: Endgame",
    genre: "Action",
    rating: "7.9",
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action",
    rating: "7.7",
  },
  {
    title: "Bullet Train",
    genre: "Action/Comedy",
    rating: "8.0",
  },
];

export const sectionListData: SectionListData[] = [
  {
    data: peopleData,
    sectionName: "People",
    listKeys: { titleKey: "name", bodyKey: "Engineer", captionKey: "age" },
  },
  {
    data: foodData,
    sectionName: "Food",
    listKeys: { titleKey: "dish", bodyKey: "healthRating", captionKey: "spiciness" },
  },
  {
    data: moviesData,
    sectionName: "Movies",
    listKeys: { titleKey: "title", bodyKey: "genre", captionKey: "rating" },
  },
];

export const sectionActionTexts: string[] = ["Action 1", "Action 2", "Action 3"];

// Focus IDs
export const nextPageFocusId: string = "nextPageActionFocusID";
export const prevPageFocusId: string = "prevPageActionFocusID";
