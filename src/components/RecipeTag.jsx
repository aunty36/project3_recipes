const RecipeTag = (props) => {
  let tagColour
  // console.log(props.genre.name)
  switch (props.recipe_tag) {
    case 'QD':
      tagColour = '#0CE8B1'
      break
    case 'H':
      tagColour = '#90EFDF'
      break
    case 'DF':
      tagColour = '#B42AFF'
      break
    case 'GF':
      tagColour = '#042940'
      break
    case 'M':
      tagColour = '#03A688'
      break
    case 'V':
      tagColour = '#F2668B'
      break
    case 'OP':
      tagColour = '#D3D92B'
      break
    case 'OV':
      tagColour = '#F21313'
      break
    default:
      tagColour = '#F2DEA2'
  }
  return (
    <div
      className="recipetag"
      style={{
        backgroundColor: tagColour
      }}
    >
      {props.recipe_tag}
    </div>
  )
}
export default RecipeTag
