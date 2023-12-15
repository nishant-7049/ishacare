import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getBookingForTherapist } from "../../store/slices/bookingSlice";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  getAllPackages,
  getPackageByName,
} from "../../store/slices/packageSlice";

const TherapistOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, therapistBooking } = useSelector(
    (state) => state.booking
  );
  const { user } = useSelector((state) => state.user);
  const { packages } = useSelector((state) => state.package);
  const cols = [
    { field: "name", headerName: "Patient Name", minWidth: 150, flex: 0.3 },
    { field: "problem", headerName: "Problem", minWidth: 200, flex: 0.3 },
    {
      field: "date",
      headerName: "Date",
      type: "Date",
      minWidth: 100,
      flex: 0.3,
    },
    { field: "time", headerName: "Time", minWidth: 100, flex: 0.3 },
    { field: "payment", headerName: "Payment Type", minWidth: 100, flex: 0.3 },
    { field: "isPaid", headerName: "Is Paid", minWidth: 100, flex: 0.3 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "action",
      headerName: "Actions",
      minWidth: 100,
      flex: 0.3,
      type: "number",
      headerClassName: "text-[#00286b] font-semibold",
      renderCell: (cellValues) => (
        <div className="flex text-2xl  justify-end">
          {user.role == "admin" ? (
            <Link to={`/admin/order/detail/${cellValues.id}`}>
              <BiEdit className="text-green-400" />
            </Link>
          ) : (
            <Link to={`/incharge/orderDetail/${cellValues.id}`}>
              <BiEdit className="text-green-400" />
            </Link>
          )}
        </div>
      ),
    },
  ];
  const rows = [];
  therapistBooking &&
    therapistBooking.map((ther) => {
      const pac =
        packages &&
        packages.filter((pack) => {
          return ther.packageAndDate.package == pack._id;
        });
      const date = new Date(ther.packageAndDate.dateAndTime);
      rows.push({
        name: ther.personal.name,
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}-${
          date.getHours() + 2
        }:${date.getMinutes()}`,
        status: ther.status,
        problem: ther.complaints.problem,
        payment: pac && pac[0].paymentType,
        isPaid: ther.payment ? true : false,
        id: ther._id,
      });
    });
  useEffect(() => {
    dispatch(getBookingForTherapist());
    if (!packages) {
      dispatch(getAllPackages());
    }
  }, [dispatch]);
  return (
    <div className="w-full mt-[6vmax]">
      <h1 className="text-3xl border-b-4 border-[#00286b] text-[#00286b] pb-2 font-bold w-fit text-center mx-auto sm:text-2xl sm:w-4/5">
        Therapist Orders
      </h1>
      <DataGrid
        rows={rows}
        columns={cols}
        autoHeight
        className="w-4/5 mx-auto my-8"
      />
    </div>
  );
};

export default TherapistOrders;
