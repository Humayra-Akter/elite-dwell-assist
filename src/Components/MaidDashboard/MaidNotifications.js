import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MaidNotifications = () => {
  return (
    <div className="notifications">
      <h2>Booking Notifications</h2>
      <ul></ul>
      <button>Clear Notifications</button>
    </div>
  );
};

export default MaidNotifications;
