import React from "react";
import { Router, Redirect } from "@reach/router";
import Villains from "./villains/pages/Villains";
import EditVillain from "./villains/pages/EditVillain";
import Heroes from "./heroes/pages/Heroes";
import EditHero from "./heroes/pages/EditHero";

const RootRouter = () => (
  <Router>
    <Redirect from="/" to="heroes" noThrow />
    <Heroes path="heroes" />
    <EditHero path="edit-hero/:id" />
    <Villains path="villains" />
    <EditVillain path="edit-villain/:id" />
  </Router>
);
export default RootRouter;
