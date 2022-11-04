import './index.css'

const ComponentItem = props => {
  const {name, comment, backgroundClassNames, appendTime, isLiked} = props
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLiked ? 'liked' : 'like'

  return (
    <div>
      <div className="name-container">
        <div className="firstletter">{name.slice(0, 1)}</div>
        <p>{name}</p>
        <p>{appendTime}</p>
      </div>
      <div>
        <p>{comment}</p>
      </div>
      <div className="like-container">
        <button type="button">
          <img src={likeImage} />
        </button>

        <p className={`para ${likeClassName}`}>Like</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
    </div>
  )
}

export default ComponentItem
