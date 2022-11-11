import React from "react";
import StIncubation from "../../app/components/stIncubation/StIncubation";
import TypicalIncubation from "../../app/components/stIncubation/TypicalIncubation";
import BannerCommon from "../../app/components/main/banner/common/BannerCommon";

const MainIncubation = () => {
  return (
    <main>
      <BannerCommon id={3} />
      <StIncubation />
      <TypicalIncubation />
    </main>
  );
};

export default MainIncubation;
