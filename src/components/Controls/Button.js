const Button = ({ onclick, text, length }) => {
  return (
    <div style={`width: ${length || 'inherit'}`} class="button" onclick={onclick}>
      {text}
    </div>
  )
}

export default Button