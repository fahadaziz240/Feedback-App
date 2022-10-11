import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
    const headerStyle={backgroundColor:bgColor ,color:textColor}
  return (
    <header style={headerStyle}>
      <div className="contianer">
        <h2>Feedback UI</h2>
        <p>{text}</p>
      </div>
    </header>
  )
}
Header.defaultProps= {
    text : 'feedback UI',
    bgColor : "#000000",
    textColor : "#ff6a95"
}
Header.propTypes = {

    text: PropTypes.string,
    bgcolor :PropTypes.string,
    textColor:PropTypes.string


}
export default Header
