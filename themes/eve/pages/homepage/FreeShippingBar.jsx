import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Envío gratis</h2>
          <p>Envío gratis en envíos superiores a 100 euros</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Internacional UPS</h2>
          <p>Pide desde cualquier sitio
          Solicite presupuesto por WhatsApp</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Solo piedras naturales</h2>
          <p>Nuestros productos son 100% originales.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
