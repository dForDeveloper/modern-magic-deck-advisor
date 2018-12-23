import React from 'react';
import FaveListItem from './FaveListItem';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

const deckName = "Bant Spirits"
const index = 0;
const userFavoriteDecks = [
  {
    deckName: "Bant Spirits",
    cards: [
    "Breeding Pool",
    "Cavern of Souls",
    "Flooded Strand",
    "Horizon Canopy",
    "Misty Rainforest",
    "Windswept Heath",
    "Noble Hierarch",
    "Phantasmal Image",
    "Collected Company",
    "Aether Vial"
    ],
    cardCounts: {
    Breeding Pool: 1,
    Cavern of Souls: 1,
    Flooded Strand: 3,
    Horizon Canopy: 3,
    Misty Rainforest: 2,
    Windswept Heath: 2,
    Noble Hierarch: 4,
    Phantasmal Image: 3,
    Collected Company: 4,
    Aether Vial: 3
    }
    }
]

describe("FaveListItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FaveListItem />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})