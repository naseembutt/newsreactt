import Nav from "./Nav";

export default function Header(props) {
  // Styling logic jo active hone par color badalti hai
  const headerStyle = {
    backgroundColor: props.active ? '#03a9f4' : '#64b5f6', 
    transition: '0.4s ease' 
  };

  return (
    <header style={headerStyle}>
      <div className="logo">Awesome News</div>
      <input 
        onChange={props.getKeywords} 
        placeholder="Search news..." 
      />
      <Nav />
    </header>
  );
}