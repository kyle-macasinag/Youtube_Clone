export const Reply = (props) => {
    return(
        <div className = "container">
            <h4>{props.reply.user.username}</h4>
            <p>{props.reply.text}</p>
        </div>
    )
}