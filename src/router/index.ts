import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import EuqCard from "../views/EuqCard.vue";
import StudBalls from "../views/StudBalls.vue";
import HomePage from "../views/HomePage.vue";
import JournalList from "../views/JournalList.vue";
import UserPage from "../views/UserPage.vue";
import AchievmentPage from "../views/AchievmentPage.vue";
import EuqBook from "../views/EuqBook.vue";
import MsgPage from "../views/MsgPage.vue";
import ResumePage from "../views/ResumePage.vue";
import CollegePage from "../views/CollegePage.vue";
import StudBilet from "../views/StudBilet.vue";
import BusBilet from "../views/BusBilet.vue";
import LoginPage from "../views/LoginPage.vue";
import RegPage from "../views/RegPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/tab1",
  },

  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/JournalList.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/EuqQR.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/MessagePage.vue"),
      },
      {
        path: "tab5",
        component: () => import("@/views/UserPage.vue"),
      },
    ],
  },
  {
    path: "/studballs",
    name: "euqcard",
    component: StudBalls,
  },
  {
    path: "/journallist",
    name: "journallist",
    component: JournalList,
  },
  {
    path: "/userpage",
    name: "userpage",
    component: UserPage,
  },
  {
    path: "/achievmentpage",
    name: "achievmentpage",
    component: AchievmentPage,
  },
  {
    path: "/euqbook",
    name: "euqbook",
    component: EuqBook,
  },
  {
    path: "/msg",
    name: "msg",
    component: MsgPage,
  },
  {
    path: "/resumepage",
    name: "resumepage",
    component: ResumePage,
  },
  {
    path: "/collegepage",
    name: "collegepage",
    component: CollegePage,
  },
  {
    path: "/studbilet",
    name: "studbilet",
    component: StudBilet,
  },
  {
    path: "/busbilet",
    name: "busbilet",
    component: BusBilet,
  },
  {
    path: "/loginpage",
    name: "loginpage",
    component: LoginPage,
  },
  {
    path: "/regpage",
    name: "regpage",
    component: RegPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
