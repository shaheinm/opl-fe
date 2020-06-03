import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import BodyFooter from '../index';

afterEach(cleanup);

it("renders BodyFooter without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<BodyFooter/>, div);
});

it("renders BodyFooter correctly", ()=>{
  const { getByTestId } = render(<BodyFooter/>);
  expect(getByTestId("footer")).toBeInTheDocument();
});

it("matches the snapshot", ()=>{
  const tree = renderer.create(<BodyFooter/>).toJSON();
  expect(tree).toMatchSnapshot();
});