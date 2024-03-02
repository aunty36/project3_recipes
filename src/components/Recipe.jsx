import RecipeTag from './RecipeTag'
const Recipe = (props) => {
  // console.log(props.recipe)
  return (
    <div class="recipecard">
      <div classname="name">
        <h2>{props.recipe.recipe_name}</h2>
        <hr></hr>
      </div>
      <div className="cat">
        <h3>{props.recipe.recipe_category}</h3>
      </div>
      <div className="tag">
        {props.recipe.recipe_tags.map((recipe_tag, index) => (
          <RecipeTag key={index} recipe_tag={recipe_tag} />
        ))}
      </div>

      <div className="image">
        <img src={props.recipe.recipe_photo} />
      </div>
      <div className="content">
        <p>
          <b>Region:</b> {props.recipe.recipe_cuisine['country']}
        </p>
        <p>
          <b>What's to Love: </b>
          {props.recipe.recipe_desc}
        </p>
        <p>
          <b>Average Cost:</b> {props.recipe.recipe_cost}{' '}
        </p>
        <div>Would like to put my RecipeInfo component here.</div>
        <p>
          Wanna try it out yourself? Click
          <a href={props.recipe.recipe_link}> here.</a>
        </p>
      </div>
    </div>
  )
}

export default Recipe
