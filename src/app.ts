/** @format */

type admin = {
  name: string;
  privileges: string[];
};

type employee = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = admin & employee;
const e1: elevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type universal = combinable;
