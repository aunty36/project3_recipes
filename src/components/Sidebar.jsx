const Sidebar = () => {
  return (
    <div>
      <div>
        <h3> Filter Recipes by Category: </h3>
      </div>
      <div class="container">
        <input type="radio"></input>
        Entrees/Mains
      </div>
      <div class="container">
        <input type="radio"></input>
        Lunch
      </div>
      <div class="container">
        <input type="radio"></input>
        Soups/Stews
      </div>
      <div class="container">
        <input type="radio"></input>
        Appetizers/Sides
      </div>
      <div class="container">
        <input type="radio"></input>
        Desserts
      </div>
      <div>
        <hr></hr>
      </div>
      <div>
        <h3> Filter Recipes by Main Ingredient: </h3>
      </div>
      <div class="container">
        <input type="radio"></input>
        Pasta
      </div>
      <div class="container">
        <input type="radio"></input>
        Meat
      </div>
      <div class="container">
        <input type="radio"></input>
        Beans
      </div>
      <div class="container">
        <input type="radio"></input>
        Sugar
      </div>
      <div class="container">
        <input type="radio"></input>
        Dairy
      </div>
      <div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Sidebar
