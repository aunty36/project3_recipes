const TopNav = () => {
  return (
    <header className="top_nav">
      <div>
        <a href="#">home</a>
      </div>
      <div>about</div>
      <div>recipes</div>

      <div>search</div>
      <div>
        <input type="text" placeholder="Search.." />
      </div>
      <div>
        <img src="./src/images/ig_logo.png" />
      </div>
      <div>
        <img src="./src/images/yt_logo.png" />
      </div>
    </header>
  )
}

export default TopNav
