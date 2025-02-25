
const CssStyling = () => {

const headerStyle = {
  font : "italic",
  fontWeight : "bold",
  textSize : "3rem",
  textAlign : "center",
  padding : "2rem",
  color : "red",
  backgroundColor : "purple"
}

  return (
    <div>   
      <h1 style={headerStyle}>Weather Application</h1>
    </div>
  )
}

export default CssStyling
