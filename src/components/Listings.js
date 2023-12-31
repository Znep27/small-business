import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Listings = (props) => {
  return (
    <div className="card-container">
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {props.username && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/details/${business.id}`} className="underline">
                    {business.name}
                  </Link>
                </TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.hours}</TableCell>
                <TableCell>{business.address}</TableCell>
                {props.username && (
                  <TableCell>
                    <DeleteIcon
                      onClick={() => {
                        console.log(`deleting this listing:`);
                        console.log(props.businesses[index]);
                        props.deleteListing(index);
                      }}
                      className="text-red"
                    />
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listings;