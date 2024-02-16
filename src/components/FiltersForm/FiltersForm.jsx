import makes from "/src/data/makes.json";

const prices = [];
for (let i = 30; i <= 200; i += 10) {
  prices.push(i);
}

const FiltersForm = () => {
  function updateSelectedOption() {
    const select = document.getElementById("price");
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "default") {
      selectedOption.text = `To ${selectedOption.value}$`;
    }
  }

  return (
    <form>
      <p>Car brand</p>
      <label>
        <select id="brand" defaultValue="default">
          <option disabled value="default">
            Enter the text
          </option>
          {makes.map((brandName) => (
            <option key={brandName} value={brandName}>
              {brandName}
            </option>
          ))}
        </select>
      </label>

      <p>Price/1 hour</p>
      <label>
        <select
          id="price"
          defaultValue="default"
          onChange={updateSelectedOption}
        >
          <option disabled value="default">
            To $
          </option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </label>

      <p>Car mileage/km</p>
      <label>
        <span>From</span>
        <input type="number" />
      </label>
      <label>
        <span>To</span>
        <input type="number" />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default FiltersForm;
