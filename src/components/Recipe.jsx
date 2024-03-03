import RecipeTag from './RecipeTag'
const Recipe = (props) => {
  // console.log(props.recipe)
  return (
    <div class="recipecard">
      <div classname="content1">
        <h2>{props.recipe.recipe_name}</h2>
        <div className="tag">
          {props.recipe.recipe_tags.map((recipe_tag, index) => (
            <RecipeTag key={index} recipe_tag={recipe_tag} />
          ))}
        </div>
        <h3>{props.recipe.recipe_category}</h3>
        <hr></hr>
      </div>
      <div className="image">
        <img src={props.recipe.recipe_photo} />
      </div>
      <div className="content2">
        <p>
          <b>Country: </b> {props.recipe.recipe_cuisine['country']}
        </p>
        <p>
          <b>What's to Love: </b>
          {props.recipe.recipe_desc}
        </p>
        <p>
          <b>Average Cost:</b> {props.recipe.recipe_cost}
        </p>
        <p>
          Wanna try it out yourself? Click
          <a href={props.recipe.recipe_link}> here.</a>
        </p>
      </div>
      <div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Recipe
