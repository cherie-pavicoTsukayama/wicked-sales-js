import React from 'react';

export default function ProductListItem() {
  return (
    <div className="card col-sm-3 shadow-sm">
      <img className="card-img-top" src="../images/ostrich-pillow.jpg" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Ostrich Pillow</h5>
        <p className="card-text">
          Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.
        </p>
      </div>
    </div>
  );
}
