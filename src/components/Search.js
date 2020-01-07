import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alert-context";
import { GithubContext } from "../context/gitgub/github-context";

const Search = () => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const { search, clearUsers } = useContext(GithubContext);
  const onSubmit = e => {
    if (e.key !== "Enter") return;
    clearUsers();
    if (value.trim()) {
      hide();
      search(value.trim());
    } else {
      show("Введите корректные данные", "danger");
    }
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя"
        onKeyPress={onSubmit}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
