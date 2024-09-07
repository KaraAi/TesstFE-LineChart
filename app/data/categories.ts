export interface Category {
  name: string;
  id: string;
  valueStart: string;
  valueEnd: string;
  rate: string;
}

export interface ChartData {
  date: Date;
  categoryData: {
    name: string;
    fill: string;
    value: string;
  }[];
}

export const categoriesOvertime: ChartData[] = [
  {
    date: new Date("2020-08-10"),
    categoryData: [
      {
        name: "Danh mục A",
        fill: "#ff7300",
        value: "335.00",
      },
      {
        name: "Danh mục B",
        fill: "#82ca9d",
        value: "40.00",
      },
      {
        name: "Danh mục C",
        fill: "#ffc658",
        value: "110.23",
      },
    ],
  },
  {
    date: new Date("2020-07-31"),
    categoryData: [
      {
        name: "Danh mục A",
        fill: "#ff7300",
        value: "120.00",
      },
      {
        name: "Danh mục B",
        fill: "#82ca9d",
        value: "230.88",
      },
      {
        name: "Danh mục C",
        fill: "#ffc658",
        value: "125.95",
      },
    ],
  },
  {
    date: new Date("2020-07-21"),
    categoryData: [
      {
        name: "Danh mục A",
        fill: "#ff7300",
        value: "110.23",
      },
      {
        name: "Danh mục B",
        fill: "#82ca9d",
        value: "120.00",
      },
      {
        name: "Danh mục C",
        fill: "#ffc658",
        value: "25.00",
      },
    ],
  },
  {
    date: new Date("2020-07-11"),
    categoryData: [
      {
        name: "Danh mục A",
        fill: "#ff7300",
        value: "10.23",
      },
      {
        name: "Danh mục B",
        fill: "#82ca9d",
        value: "56.00",
      },
      {
        name: "Danh mục C",
        fill: "#ffc658",
        value: "10.34",
      },
    ],
  },
  {
    date: new Date("2020-07-01"),
    categoryData: [
      {
        name: "Danh mục A",
        fill: "#ff7300",
        value: "110.23",
      },
      {
        name: "Danh mục B",
        fill: "#82ca9d",
        value: "456.00",
      },
      {
        name: "Danh mục C",
        fill: "#ffc658",
        value: "111.45",
      },
    ],
  },
];

export const categories: Category[] = [
  {
    name: "Danh mục A",
    id: "A",
    valueStart: "335.0",
    valueEnd: "40.0",
    rate: "+30%",
  },
  {
    name: "Danh mục B",
    id: "B",
    valueStart: "120.0",
    valueEnd: "230.88",
    rate: "+10%",
  },
  {
    name: "Danh mục C",
    id: "C",
    valueStart: "110.23",
    valueEnd: "120.0",
    rate: "+2%",
  },
];
