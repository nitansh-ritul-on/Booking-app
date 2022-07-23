import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import "./list.css";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../components/searchItem/SearchItem";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [people, setPeople] = useState(location.state.people);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  console.log(destination, people, date);
  console.log(location);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (
                <DateRange
                  // className="date"
                  // editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  // moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label htmlFor="">Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={people.adult}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Child</span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInput"
                    placeholder={people.children}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    className="listOptionInput"
                    placeholder={people.rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  );
};
export default List;
