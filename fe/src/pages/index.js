import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
export default function Home() {
  const URL = "http://localhost:3001/users";
  const BE_URL = "http://localhost:3001/add-user";
  const DEL_URL = "http://localhost:3001/delete-user";
  const EDIT_URL = "http://localhost:3001/edit-user";
  // STATES
  // const [stats, setStat] = useState("");
  const [users, setUsers] = useState("");
  const [showEdit, setShowEdit] = useState([false, ""]);

  // SEE
  async function handleUsers() {
    const FETCH_USER_DATA = await fetch(URL);
    const FETCH_USER_JSON = await FETCH_USER_DATA.json();
    setUsers(FETCH_USER_JSON);
  }

  // NEW
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
  }

  // DELETE
  async function handleDelete(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(DEL_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  }
  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <div className="flex flex-col pt-[50px] w-[800px] m-auto gap-[50px]">
      <div className="top m-auto">
        <form onSubmit={handleSubmit} className="flex gap-[15px]">
          <label htmlFor="name">
            Username:
            <input id="name" name="name" className="text-black" />
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
      <div>
        {users.users.map((e) => {
          return (
            <div className="flex m-auto w-80 m-auto gap-10">
              <p>{e.name}</p>
              <button
                className="border-2 p-2"
                id={nanoid()}
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                Delete
              </button>
              <button
                className="border-2  p-2"
                id={nanoid()}
                onClick={(e) => {
                  setShowEdit([!showEdit[0], e.target.id]);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
      <div className="edit"></div>
    </div>
  );
}
