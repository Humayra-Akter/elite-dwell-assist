import React from "react";
import CountdownTimer from "./CountdownTimer";

const AcknowledgedMaidBookingsRow = ({ user }) => {
  return (
    <tr>
      <td className="text-md capitalize">{user.booking.userName}</td>
      <td className="text-md">{user.booking.userEmail}</td>
      <td className="text-md">
        {new Date(user.booking.selectedDate).toLocaleDateString()}
      </td>
      <td className="text-md">{user.booking.selectedTimeSlot}</td>
      <td className="text-md">{user.booking.selectedServices.join(", ")}</td>
      <td className="text-md capitalize">{user.booking.address.area}</td>{" "}
      <td className="text-lg">
        <CountdownTimer selectedDate={user.booking.selectedDate} />
      </td>
    </tr>
  );
};

export default AcknowledgedMaidBookingsRow;
