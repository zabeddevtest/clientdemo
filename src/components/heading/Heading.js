import React from "react";
import "./heading.css";

const Heading = (page) => {
  return (
    <>
      <div className="heading">
        <div className="header__heading">
          {page.page === "lore" ? (
            <div className="flex items-between main__lore">
              <div className='lore__heading'>
                <h2>Inspired by the colours of South East Asia.</h2>
              </div>
              <div className='lore__text'>
                <p>
                  Project: SEA is forged at the crossroads of Web 3,
                  brand-building and a deep appreciation for all things
                  cultural. Explore the concrete jungle of Weta-Weta Island as
                  the Myst descends on the citizens, taking them on adventures
                  unknown!
                </p>
                <p>
                  Owning a Project: SEA NFT gives you a passport to Weta-Weta
                  Island, an island nation inhabited by 8,888 citizens living on
                  the Ethereum blockchain. NFT holders get first-hand access to
                  upcoming Physical, Web3 and Community rewards - which will be
                  revealed in due time.
                </p>
                <p>
                  Join us in the vibrant and colourful world of Project: SEA, a
                  first-of-it's-kind Web3 brand building experience.
                </p>
              </div>
            </div>
          ) : (
            <h1>Enter the MYst.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Heading;
