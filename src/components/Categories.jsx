function Categories(props) {
  const { categorySearch } = props
  return (
    <div className="d-flex align-items-center">
      <div className="all skeleton" onClick={() => categorySearch('')}>All</div>
      <div className="cameras" onClick={() => categorySearch('cameras')}>Cameras</div>
      <div className="computers" onClick={() => categorySearch('computers')}>Computers</div>
      <div className="earbuds" onClick={() => categorySearch('earbuds')}>Earbuds</div>
      <div className="gaming" onClick={() => categorySearch('gaming')}>Gaming</div>
      <div className="headphones" onClick={() => categorySearch('headphones')}>Headphones</div>
      <div className="speakers" onClick={() => categorySearch('speakers')}>Speakers</div>
      <div className="watches" onClick={() => categorySearch('watch')}>Watches</div>
    </div>
  )
}

export default Categories