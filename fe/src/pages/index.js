export default function Home() {
  const BE_URL = "http://localhost:3001/add-user";
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
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
    console.log(FETCHED_JSON);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-[15px]">
        <label htmlFor="username" for="username">
          Username:
          <input id="name" name="username" className="text-black" />
        </label>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
