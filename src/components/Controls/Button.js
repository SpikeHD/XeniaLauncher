const Button = ({ onclick, text }) => {
  return (
    <div class="button" onclick={onclick}>
      {text}
    </div>
  )
}

export default Button