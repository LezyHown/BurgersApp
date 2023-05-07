import React from "react";

import footerAPI from "./footerAPI";
import SectionBlock from "./SectionBlock";

export default function SectionList() {
  return (
    <div className="footer-section-list">
      {footerAPI.map((footerBlock, index) => (
        <SectionBlock key={index} title={footerBlock.title} links={footerBlock.links} />
      ))}
    </div>
  );
}