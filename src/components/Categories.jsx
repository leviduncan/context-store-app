function Categories(props) {
  const { categorySearch } = props
  return (
    <div className="category-grid">
      {/* <div className="all skeleton" onClick={() => categorySearch('')}>All</div> */}
      <div className="items cameras" onClick={() => categorySearch('cameras')}>Cameras
      <br/><span>Shop now</span>
      </div>
      <div className="items computers" onClick={() => categorySearch('computers')}>Computers
      <br/><span>Shop now</span>
      </div>
      <div className="items earbuds" onClick={() => categorySearch('earbuds')}>Earbuds
      <br/><span>Shop now</span>
      </div>
      <div className="items gaming lite" onClick={() => categorySearch('gaming')}>Gaming
      <br/><span>Shop now</span>
      </div>
      <div className="items headphones lite" onClick={() => categorySearch('headphones')}>Headphones
      <br/><span>Shop now</span>
      </div>
      <div className="items speakers" onClick={() => categorySearch('speakers')}>Speakers
      <br/><span>Shop now</span>
      </div>
      <div className="items watches lite" onClick={() => categorySearch('watch')}>Watches
      <br/><span>Shop now</span>
      </div>
    </div>
  )
}

export default Categories