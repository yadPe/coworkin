import React from 'react'
import { Link } from "react-router-dom";
import BoxPage from '../../components/BoxPage';

export function About() {
  return (
    <BoxPage>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </BoxPage>
  );
}