import React from 'react';

function Footer({items}) {
  let today = new Date();

  return (
      <footer>
        <p>Total {items.length===1 ? "Item" : "Items" } : {items.length}</p>
        <p>Copyright &copy;{today.getFullYear()} Subrat Sir.</p>
      </footer>
  )

}let today = new Date();

export default Footer;