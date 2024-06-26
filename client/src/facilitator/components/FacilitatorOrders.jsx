import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getBookingForFacilitator } from "../../store/slices/bookingSlice";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getAllPackages } from "../../store/slices/packageSlice";
import Loader from "../../auth/Loader";
import MyPerformance from "./MyPerformance";
import MyReports from "./MyReports";
import SearchAppointment from "../../admin/components/SearchAppointment";

const FacilitatorOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, facilitatorBooking, facilitatorBookingCount } =
    useSelector((state) => state.booking);
  const cols = [
    {
      field: "name",
      headerName: "Patient Name",
      minWidth: 150,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 200,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "phone",
      headerName: "Phone No.",
      minWidth: 120,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "sessions",
      headerName: "Sessions Left",
      minWidth: 100,
      type: "number",
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "valid",
      headerName: "Valid Till",
      minWidth: 120,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "date",
      headerName: "Scheduled Date",
      type: "Date",
      minWidth: 120,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "time",
      headerName: "Batch",
      minWidth: 120,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "payment",
      headerName: "Payment Type",
      minWidth: 100,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "isPaid",
      headerName: "Is Paid",
      minWidth: 100,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
      renderCell: (cellValues) => {
        return (
          <>
            {cellValues.row.isPaid ? (
              <p className="text-green-400 font-semibold">Paid</p>
            ) : (
              <p className="text-red-800 font-semibold">Unpaid</p>
            )}
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
    },
    {
      field: "action",
      headerName: "Actions",
      minWidth: 100,
      flex: 0.3,
      headerClassName: "text-[#00286b] font-semibold",
      renderCell: (cellValues) => (
        <div className="flex text-2xl  justify-end">
          <Link to={`/incharge/orderDetail/${cellValues.id}`}>
            <BiEdit className="text-green-400" />
          </Link>
        </div>
      ),
    },
  ];
  const rows = [];
  facilitatorBooking &&
    facilitatorBooking.map((ther) => {
      const date = new Date(ther.packageAndDate.dateAndTime);
      rows.push({
        name: ther.personal.name,
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}-${
          date.getHours() + 2
        }:${date.getMinutes()}`,
        status: ther.status,
        location: ther.personal.location + ": " + ther.personal.address,
        phone: ther.personal.phone,
        sessions: ther.sessions,
        valid: new Date(ther.validTill).toISOString().split("T")[0],
        payment: ther.paymentType,
        isPaid: ther.payment ? true : false,
        id: ther._id,
      });
    });
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 15,
    page: 0,
  });
  const submitHandler = () => {
    const options = {
      keyword,
      page: paginationModel.page + 1 || 1,
      limit: paginationModel.pageSize,
    };
    dispatch(getBookingForFacilitator(options));
    setResults(keyword);
  };
  useEffect(() => {
    const options = {
      keyword,
      page: paginationModel.page + 1 || 1,
      limit: paginationModel.pageSize,
    };
    dispatch(getBookingForFacilitator(options));
  }, [dispatch, paginationModel]);
  return (
    <div className="w-full my-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-2xl border-b-4 border-[#00286b] text-[#00286b] pb-2 font-bold w-fit text-center mx-auto sm:text-2xl sm:w-4/5">
            Facilitator Panel
          </h1>
          <div className="w-[90%] p-4 shadow-lg mx-auto my-8 sm:my-4">
            <h1 className="text-[#00286b] text-xl text-center font-semibold mb-4">
              My Patients
            </h1>
            <SearchAppointment
              keyword={keyword}
              setKeyword={setKeyword}
              submitHandler={submitHandler}
            />
            {results && (
              <p className="w-[90%] mx-auto text-gray-400 text-sm">
                Showing Results for '{results}'
              </p>
            )}
            <div className="h-[80vh] w-full mt-4">
              <DataGrid
                rows={rows}
                columns={cols}
                getRowHeight={() => "auto"}
                className=" mx-auto "
                rowCount={facilitatorBookingCount}
                loading={loading}
                pageSizeOptions={[15]}
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={setPaginationModel}
              />
            </div>
          </div>
          <MyPerformance />
          <MyReports />
        </>
      )}
    </div>
  );
};

export default FacilitatorOrders;
