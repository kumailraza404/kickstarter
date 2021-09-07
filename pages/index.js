import React, { useState, useEffect } from "react";
import factory from "../ethereum/factory";

export default () => {
  useEffect(() => {
    (async () => {
      console.log("invoked functipon");
      const campaigns = await factory.methods.getDeployedCampaigns().call();

      console.log(campaigns);
    })();
  }, []);

  return <h1>Home page</h1>;
};
