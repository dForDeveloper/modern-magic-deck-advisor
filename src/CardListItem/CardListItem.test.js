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
    wrapper.find(".cardlist--item").simulate("click", {
      target: {
        classList: {
          contains: className => {
            if (className === "fa-trash-alt") {
              return true;
            }
          }
        },
        closest: () => {
          return { id: "0" };
        }
      }
    });
    expect(removeListItemMock).toBeCalled();
  });

  it("should increment state count when plus sign is clicked", () => {
    expect(wrapper.state("count")).toEqual(1);
    wrapper.find(".cardlist--item").simulate("click", {
      target: {
        classList: {
          contains: className => {
            if (className === "fa-plus") {
              return true;
            }
          }
        }
      }
    });
    expect(wrapper.state("count")).toEqual(2);
  });

  it("should decrement state count when minus sign is clicked", () => {
    wrapper.instance().increaseCardCount({userCardsData, cardName})
    expect(wrapper.state("count")).toEqual(2);
    wrapper.find(".cardlist--item").simulate("click", {
      target: {
        classList: {
          contains: className => {
            if (className === "fa-minus") {
              return true;
            } 
          }
        }
      }
    });
    expect(wrapper.state("count")).toEqual(1);
  });

  it("should call setCardCount after CardListItem state is updated", () => {
    wrapper.instance().updateUserCardsDataState();
    expect(setCardCountMock).toBeCalled();
  })
});
