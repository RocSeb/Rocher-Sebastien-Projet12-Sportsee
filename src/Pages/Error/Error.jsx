import React from 'react';

/**
 * Render Error404 component
 * @function Error404
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Error404() {
  return (
    <main>
      <img src="/404error/" alt="404error" />
      <p>Oups! La page demandée n'existe pas</p>
    </main>
  );
}