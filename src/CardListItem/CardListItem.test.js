import React from "react";
import CardListItem from "./CardListItem";
import { shallow } from "enzyme";

const cardName = "Blood Moon";
const index = 0;
const userCardsData = [
  {
    cardName: "Blood Moon",
    cardCount: 1
  }
];
const removeListItemMock = jest.fn();
const setCardCountMock = jest.fn();

describe("CardListItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardListItem
        cardName={cardName}
        cardIndex={index}
        key={cardName}
        removeListItem={removeListItemMock}
        setCardCount={setCardCountMock}
        userCardsData={userCardsData}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call removeListItem when the trash-can is clicked", () => {
    wrapper.find(".fa-trash-alt").simulate("click", {
      target: { closest: () => {return { id: "0" }} }
    });
    expect(removeListItemMock).toBeCalled();
  });

  it("should decrement state count when minus sign is clicked", () => {
    wrapper.instance().increaseCardCount({userCardsData, cardName})
    expect(wrapper.state("count")).toEqual(2);
    wrapper.find(".fa-minus").simulate("click");
    expect(wrapper.state("count")).toEqual(1);
  });

  it("should increment state count when plus sign is clicked", () => {
    expect(wrapper.state("count")).toEqual(1);
    wrapper.find(".fa-plus").simulate("click");
    expect(wrapper.state("count")).toEqual(2);
  });

  it("should call setCardCount when updateUserCardsDataState is called", () => {
    wrapper.instance().updateUserCardsDataState();
    expect(setCardCountMock).toBeCalled();
  })
});