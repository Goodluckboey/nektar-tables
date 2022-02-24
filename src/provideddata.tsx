type cellType = {
  editable: boolean;
  label: string;
  hint?: string;
  icon?: string;
};

export const data: cellType[][] = [
  [
    { editable: false, label: "row 1 column 1" },
    { editable: true, label: "row 1 column 2" },
  ],
  [
    { editable: false, label: "row 2 column 1", hint: "some hint" },
    { editable: false, label: "row 2 column 2" },
  ],
  [
    {
      editable: false,
      label: "row 3 column 1",
      hint: "some hint 2",
      icon: "../images/alertIcon.png",
    },
    { editable: false, label: "row 3 column 2" },
  ],
];

// editable
// hints
// generic
