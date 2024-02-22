import { nanoid } from "nanoid";
export default function Home() {
  const BE_URL = "http://localhost:3001/add-user";
  const DEL_URL = "http://localhost:3001/users";

  async function handleSubmit(e) {
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
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  }
  // async function handleDelete(e) {
  //   e.preventDefault();
  //   const data = {
  //     username: e.target.username.value,
  //   };
  //   const options = {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   const FETCHED_DATA = await fetch(DEL_URL, options);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   console.log(FETCHED_JSON);
  // }
  return (
    <div className="flex flex-col w-[800px] m-auto gap-[50px]">
      <div className="top m-auto">
        <form onSubmit={handleSubmit} className="flex gap-[15px]">
          <label htmlFor="name" for="name">
            Username:
            <input id="name" name="name" className="text-black" />
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
      <div className="bottom m-auto">
        {/* <form onSubmit={handleDelete} className="flex gap-[15px]">
          <label htmlFor="username" for="username">
            Username:
            <input id="name" name="username" className="text-black" value="a" />
          </label>
          <input type="submit" value="delete"></input>
        </form> */}
      </div>
    </div>
  );
}
