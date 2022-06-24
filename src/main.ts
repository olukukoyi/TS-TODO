export {};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#task-form");
const name = document.querySelector<HTMLInputElement>("#name");
const age = document.querySelector<HTMLInputElement>("#age");
const year = document.querySelector<HTMLInputElement>("#year");

type Data = {
  name: string;
  age: number;
  year: number;
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name?.value == "" || name?.value == null) return;
  if (age?.value == "" || age?.value == null) return;
  if (year?.value == "" || year?.value == null) return;

  const newData: Data = {
    name: name.value,
    age: parseInt(age.value),
    year: parseInt(year.value),
  };

  addData(newData);
});

const addData = (newData: Data) => {
  const listItem = document.createElement("div");
  const nameLabel = document.createElement("label");
  const ageLabel = document.createElement("label");
  const yearLabel = document.createElement("label");
  nameLabel.append(newData.name);
  ageLabel.append(String(newData.age));
  yearLabel.append(String(newData.year));
  listItem.append(
    "Name: " +
      nameLabel.innerText +
      " Age: " +
      ageLabel.innerText +
      " Year:" +
      yearLabel.innerText
  );

  list?.append(listItem);
};
