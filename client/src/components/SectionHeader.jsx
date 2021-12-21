import "../assets/css/sectionheader.css";

const SectionHeader = (props) => {
  return (
    <>
      <div className="section-header" >
        <h1>{props.section}</h1>
      </div>
    </>
  )
}

export default SectionHeader;