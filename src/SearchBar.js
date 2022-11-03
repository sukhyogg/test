export function SearchBar({
    data,
    filtertext
    
    
  }) {
    return (
      <form>
        <input 
          type="text" 
          value={data} placeholder="Search..." 
          onChange={(e) => filtertext(e.target.value)} />
        
      </form>
    );
  }