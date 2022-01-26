import ItemList from './ItemList'

function Content({items, handleCheck, handleDelete}) {

  return (
    <main>
      {
        items.length ? (
          <ItemList 
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />
        ) : (
          <p>No Items</p>
        ) 
      }
    </main>
  )
}

export default Content;