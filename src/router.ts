import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import HomePage from "./routes/home-page.vue";
// @ts-ignore
import GamePage from "./routes/game-page.vue";
// @ts-ignore
import LevelPage from "./routes/level-page.vue";
// @ts-ignore
import PersonPage from "./routes/person-page.vue";

import SettingPage from "./routes/setting-page.vue";

const routes = [
  { path: "/", name: "homepage", component: HomePage },
  { path: "/game", name: "game", component: GamePage },
  { path: "/game/level/:levelId", name: "level", component: LevelPage },
  {
    path: "/game/level/:levelId/:personId",
    name: "person",
    component: PersonPage,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
