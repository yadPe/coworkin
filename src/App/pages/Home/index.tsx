import React from 'react'
import BoxPage from '../../components/BoxPage';
import ListingCard from '../Listing/components/ListingCard';

export function Home() {
  return (
    <>
      <BoxPage fontSize="xl" textAlign="center">
        <ListingCard />
      </BoxPage>
    </>
  );
}